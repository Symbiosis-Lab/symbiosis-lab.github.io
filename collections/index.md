---
title: Collections
uid: "511d5791"
description: Collection, archive and exhibition sites built with moss, the open-source tool from Symbiosis Lab.
lang: en
children: false
content_width: wide
nav: true
weight: 1
---

Symbiosis Lab builds collection, archive and exhibition sites with [moss](https://github.com/Symbiosis-Lab/moss), its open-source tool. A site is a folder of files you own: pages in markdown, images beside them, a spreadsheet of metadata if you keep one. There is no server and no database, and the finished site can be published anywhere.

## moss on collections

A moss site is plain files: no server, no database, nothing loaded from elsewhere. It costs little to host and keeps working after the grant ends. Every object gets its own page, and visitors can search the whole collection.

:::grid 2
![A print page: the full image, with its caption and title beneath.](object-page.jpg)
+++
![The foot of a print page: a table of metadata, then links to the previous and next print.](object-metadata.jpg)
+++
![A map of Japan with clusters of numbered places and a strip of print cards along the bottom.](places-map.jpg)
+++
![Search results for Hakone on the Tōkaidō catalogue: the print's own page first, then the place and the artist.](search.jpg)
:::

### Beyond a typical static site generator

- **Nothing to install but the app.** No programming language, package manager or image tools to set up. (The app runs on macOS; Windows is in progress.)
- **A live preview.** The site updates as you edit, and problems are reported while you work.
- **Images and media, handled.** Sizes and formats are made for you; video, audio, PDF and 3D files embed like images.
- **Maps that ship with the site.** A page for every place, and routes along a journey, with no online map service.
- **Several languages per site.**
- **Essays beside the catalogue,** in one folder, linked to each other.
- **Publishing that protects your links.** moss won't publish a change that breaks an address people already use.

## Collections we built

:::grid 1
[![Hiroshige's Tōkaidō catalogue: a snow scene at Kanbara, with the series title over it.](hiroshige.jpg)](https://tokaido.mosspub.com/)

**[Fifty-three Stations of the Tōkaidō](https://tokaido.mosspub.com/).** Hiroshige's fifty-five prints of the road from Edo to Kyoto, in order, each with its catalogue record and a place on the map.
:::

:::grid 2
[![Zhu Da's site: his name and a poem set in vertical Chinese beside tiles for calligraphy, paintings and writings.](zhu-da.jpg)](https://www.zhudasnotebook.com/)

**[Zhu Da (八大山人)](https://www.zhudasnotebook.com/).** The painter's paintings, calligraphy and letters, 1626–1705, set in vertical Chinese.
+++
[![William Blake's notebook: three tiles for illuminated books, paintings and prints, and writings.](william-blake.jpg)](https://www.blakesnotebook.com/)

**[William Blake](https://www.blakesnotebook.com/).** A reading room for the illuminated books, the paintings and prints, and the writings.
+++
[![Virginia Woolf's site: her name above a quotation about libraries.](virginia-woolf.jpg)](https://virginia-woolf.mosspub.com/)

**[Virginia Woolf](https://virginia-woolf.mosspub.com/).** Her essays, fiction and talks, gathered as a reading collection.
+++
[![The Chautauqua Circle's site: a photograph of a columned pavilion above the circle's name.](chautauqua-circle.jpg)](https://chautauqua-circle.mosspub.com/)

**[Chautauqua Literary and Scientific Circle](https://chautauqua-circle.mosspub.com/).** A nineteenth-century reading circle: its course of reading, local circles and notices.
:::

## Selected client work

:::grid 2
[![SoCiviC Theatre's home page: the title of the current production beside its poster.](socivic-theatre.jpg)](https://www.socivic.org/)

**[SoCiviC Theatre](https://www.socivic.org/).** A theatre company's news, past productions and visitor information, in English and Simplified Chinese.
+++
[![The Center for Habitable Planetary Systems home page: a planet over the words Shaping Habitable Worlds.](chps.jpg)](https://www.um-chps.org/)

**[Center for Habitable Planetary Systems](https://www.um-chps.org/).** A University of Michigan research centre: its mission, faculty, projects and publications.
+++
[![Yin Lab's home page: a strip of satellite images beside a statement of its research.](yin-lab.jpg)](https://www.yinlab.io/)

**[Yin Lab](https://www.yinlab.io/).** An NYU research lab: its research themes, publications, team and resources.
+++
[![The home page of 在場·獎學金: the programme's name over a field of colour.](frontline.jpg)](https://frontline.mosspub.com/)

**[在場·獎學金](https://frontline.mosspub.com/).** A Chinese-language scholarship programme: its writing and comics awards, past seasons, a map of places and an English section.
:::

## Next: supporting CollectionBuilder

CollectionBuilder turns a spreadsheet and a folder of objects into a collection website. moss will work with those projects exactly as they are, so choosing a route is never final.

![A CollectionBuilder folder forks into two routes that use the same folder and files, so you can switch at any time: Jekyll, your existing build, and moss, which adds an editor, instant preview, search, maps and hosting. An arrow from moss up to Jekyll shows moss running checks, verifications and thumbnails for the Jekyll build. Both routes then flow into GitHub Pages or other hosts.](diagram2-wide.svg)

![A CollectionBuilder folder forks into two routes that use the same folder and files, so you can switch at any time: Jekyll, your existing build, and moss, which adds an editor, instant preview, search, maps and hosting. An arrow from moss up to Jekyll shows moss running checks, verifications and thumbnails for the Jekyll build. Both routes then flow into GitHub Pages or other hosts.](diagram2-narrow.svg)

:::grid 2
### Route 1: preview and build in moss

With CollectionBuilder's own templates and look.

- A GUI and an editor for your files
- Instant preview, problems flagged where they occur
- Built-in search, maps and place pages
- Publishing and hosting on your own domain
- Everything else moss does

+++

### Route 2: stay on Jekyll, aided by moss

moss helps; your Jekyll build stays as it is.

- Metadata checks, as a GitHub Action or a command
- Image and PDF thumbnails, no ImageMagick or Ghostscript
- Problems caught before Jekyll builds
:::

- **6 → 1** CollectionBuilder asks for Git, an editor, Ruby, Jekyll, ImageMagick and Ghostscript before a first preview. In moss you open the folder.
- **93–99%** of Jekyll's rendered files, reproduced byte for byte without Ruby by a prototype, on CollectionBuilder's demo and three community sites.
- **30 of 100** recent forum threads are "objects not showing", "0 items" or a 404 after publishing, caused by metadata mistakes found only after publishing. Both routes flag them first.
- **0.7 s** to re-render after editing one cell at 10,000 items, instead of 35 s. Only the 5–10 pages that read it change. A prototype measurement, not shipped.

All of it is open source, and the spreadsheet and folder stay yours whichever tool builds them.

## Contact

::: {.work-cta}
[Write to hi@symbiosis-lab.org →](mailto:hi@symbiosis-lab.org)
:::
