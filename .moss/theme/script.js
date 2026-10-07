document.documentElement.classList.add('js'); // lets the stylesheet hide reveal-on-scroll content only when JS can reveal it

// shim: moss gap — section permalinks on the home page; delete when moss provides it
// moss omits section permalinks on the home page; add them so each section stays shareable.
// moss's own click handler copies the link for any a.moss-heading-anchor.
document.querySelectorAll('body[data-page="home"] main h2[id]').forEach(function (h) {
  var a = document.createElement('a');
  a.className = 'moss-heading-anchor';
  a.href = '#' + h.id;
  a.setAttribute('aria-label', 'Link to section: ' + h.textContent);
  h.appendChild(a);
});

(function () {
  var main = document.querySelector('body[data-page="home"] main');
  if (main) {
    var o = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { main.classList.add('revealed'); o.disconnect(); } }, { threshold: 0.15 });
    o.observe(main);
    var img = document.querySelector('.moss-hero img'), ticking = false;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) window.addEventListener('scroll', function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () { img.style.opacity = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.8)); ticking = false; });
    });
  }
})();

// Live status from the Gatus API: footer pill on every page, full list on /status.
(function () {
  var API = 'https://api.mosspub.com/status/api/v1/endpoints/statuses';
  var pill = document.querySelector('footer a[href="/status"]'); // the [checking](/status) link in footer.md
  var page = document.getElementById('overall');
  if (!pill && !page) return;
  var LABEL = {
    ok: { page: 'All systems operational', pill: 'operational' },
    degraded: { page: 'Partial degradation', pill: 'degraded' },
    down: { page: 'Service disruption', pill: 'offline' }
  };
  var $ = function (id) { return document.getElementById(id); };
  function statusOf(ep) {
    var r = ep.results || [], l = r[r.length - 1];
    if (!l) return 'unknown';
    if (l.success) return 'ok';
    return r.slice(-5).some(function (x) { return x.success; }) ? 'degraded' : 'down';
  }
  function pct(ep) {
    var r = ep.results || [];
    if (!r.length) return '\u2014';
    var x = r.filter(function (v) { return v.success; }).length / r.length;
    return (x * 100).toFixed(x >= 0.999 ? 2 : 1) + '%';
  }
  function summarize(data) {
    var any = data.filter(function (e) { return e.group === 'production'; }), down = false, deg = false;
    any.forEach(function (ep) { var s = statusOf(ep); if (s === 'down') down = true; if (s === 'degraded') deg = true; });
    return { prod: any, overall: down ? 'down' : deg ? 'degraded' : 'ok' };
  }
  function renderPage(data) {
    var s = summarize(data), ul = $('services');
    ul.innerHTML = '';
    s.prod.forEach(function (ep) {
      var li = document.createElement('li'), n = document.createElement('span'), d = document.createElement('span'), u = document.createElement('span');
      n.className = 'service-name'; n.setAttribute('data-status', statusOf(ep));
      d.className = 'dot'; n.appendChild(d); n.appendChild(document.createTextNode(ep.name));
      u.className = 'service-uptime'; u.textContent = pct(ep) + ' over last ' + (ep.results || []).length + ' checks';
      li.appendChild(n); li.appendChild(u); ul.appendChild(li);
    });
    page.setAttribute('data-status', s.overall);
    $('overall-label').textContent = LABEL[s.overall].page;
    $('checked-text').textContent = 'Last checked ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    $('recheck').hidden = false;
  }
  function failPage() {
    page.setAttribute('data-status', 'unknown');
    $('overall-label').textContent = 'Status unavailable';
    $('checked-text').textContent = '';
    $('services').innerHTML = '';
    $('error').hidden = false;
    $('recheck').hidden = false;
  }
  function load() {
    if (page) {
      $('error').hidden = true; page.setAttribute('data-status', 'checking');
      $('overall-label').textContent = 'Checking'; $('checked-text').textContent = 'Fetching latest results'; $('recheck').hidden = true;
    }
    var ctrl = new AbortController(), timer = setTimeout(function () { ctrl.abort(); }, page ? 5000 : 3000);
    fetch(API, { signal: ctrl.signal, cache: 'no-store' }).then(function (res) {
      clearTimeout(timer);
      if (!res.ok) throw new Error();
      return res.json();
    }).then(function (data) {
      var s = summarize(data);
      if (pill) { pill.setAttribute('data-status', s.overall); pill.textContent = LABEL[s.overall].pill; }
      if (page) renderPage(data);
    }).catch(function () {
      if (pill) { pill.setAttribute('data-status', 'unknown'); pill.textContent = 'status unavailable'; }
      if (page) failPage();
    });
  }
  if (page) $('recheck').addEventListener('click', function (e) { e.preventDefault(); load(); });
  load();
})();
