---
title: Collections
uid: "511d5791"
description: Collection, archive and exhibition sites built with moss, the open-source tool from Symbiosis Lab.
lang: en
children: false
content_width: wide
---

Symbiosis Lab builds collection, archive and exhibition sites with [moss](https://github.com/Symbiosis-Lab/moss), its open-source tool. A site is a folder of files you own: pages in markdown, images beside them, a spreadsheet of metadata if you keep one. There is no server and no database, and the finished site can be published anywhere.

## What moss does for collections today

### Cheap to run, and it keeps running

A moss site is plain static files: no server, no database, no map or font service from a third party. Hosting costs little or nothing on GitHub Pages or any web host, and the site keeps working after the grant ends and the people who built it move on. moss also refuses to publish a change that would break an address people already link to.

### Run by the people who hold the collection

A collection is a folder: pages in markdown, images beside them. The moss app opens the folder, shows the site as you edit, and publishes it. There is no developer to hire and nothing else to install. (The app runs on macOS today; Windows is in progress.)

### A proper page for every object

Images sized for every screen; video, audio, PDFs and 3D models; a series in order, with "37 of 55"; places, maps and routes; dates; pages for people and subjects.

:::grid 3
![A print page: the full image, with its caption and title beneath.](object-page.jpg)
+++
![The foot of a print page: a table of metadata, then links to the previous and next print.](object-metadata.jpg)
+++
![A map of Japan with clusters of numbered places and a strip of print cards along the bottom.](places-map.jpg)
:::

### Found, searched and read

Search that runs in the visitor's browser, Chinese included; sites in two or more languages; a sitemap for search engines; skip links, landmarks, reduced motion and readable contrast by default.

![Search results for Hakone on the Tōkaidō catalogue: the print's own page first, then the place and the artist.](search.jpg)

### Not yet

Faceted browse, IIIF deep zoom, pages generated from a spreadsheet, rights fields and structured metadata. The CollectionBuilder work below starts with the spreadsheet.

## Collections we built

:::grid 2
[![Hiroshige's Tōkaidō catalogue: a snow scene at Kanbara, with the series title over it.](hiroshige.jpg)](https://tokaido.mosspub.com/)

**[Fifty-three Stations of the Tōkaidō](https://tokaido.mosspub.com/).** Hiroshige's fifty-five prints of the road from Edo to Kyoto, in order, each with its catalogue record and a place on the map.
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

## Proposed: CollectionBuilder in moss

This is proposed work. We have not shipped it.

[CollectionBuilder](https://collectionbuilder.github.io/) is the Jekyll toolkit that many libraries and archives use to publish a spreadsheet of objects as a website. We propose two ways to bring it together with moss, and either one starts from the same spreadsheet and folder.

- **Route 1, build with moss.** A CollectionBuilder project runs unchanged in moss, with no Ruby. It keeps CollectionBuilder's own templates and look, shows a live preview that flags metadata problems where they occur, and publishes anywhere.
- **Route 2, check on Jekyll.** The same checks, and image and PDF thumbnails, as a GitHub Action for projects that are staying on Jekyll.

One measured fact: a no-Ruby prototype reproduced 93–99% of Jekyll's rendered files byte for byte on CollectionBuilder's demo and three community sites, and 98–100% when whitespace is ignored. It is a prototype.

![Diagram. A spreadsheet row names kanbara-01.jpg but the file is kanbara_01.jpg. Today you install six to nine tools, build and publish, and learn of it from a broken image. With moss the live preview flags the row as you edit and suggests the fix, then you publish. Same spreadsheet, folder and templates.](catch-it-where-it-happens.svg)

## Contact

::: {.work-cta}
[Write to hi@symbiosis-lab.org →](mailto:hi@symbiosis-lab.org)
:::
