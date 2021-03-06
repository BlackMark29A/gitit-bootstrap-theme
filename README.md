# Gitit Bootstrap Theme

![Screenshot](doc/img/screenshot.png)

Bootstrap theme for [Gitit](https://github.com/jgm/gitit/).  Using following components.

-  Scripts and stylesheets from [Gitit 1.12.3.1](https://github.com/jgm/gitit/), [Bootstrap 4.1.1](https://getbootstrap.com/), [jQuery 3.3.1](https://jquery.com/), [jQuery UI 1.12.1](https://jqueryui.com/).
-  Icons from [Fontawesome 5.1.0](https://fontawesome.com/).
-  Images from [Wiki Commons](https://commons.wikimedia.org/wiki/File:Lambda_lc.svg).

Some scripts or stylesheets are derived from the original one.

## Differences from original

This is just a theme not extension. But some features differ from original.

- Edit preview in modal dialog
- External link icon
- Foldable table of contents
- New default logo in SVG format

## Screenshots

![Screenshot (Home)](doc/img/screenshot-home.png)
![Screenshot (Edit preview)](doc/img/screenshot-edit-preview.png)
![Screenshot (Index)](doc/img/screenshot-index.png)
![Screenshot (Search)](doc/img/screenshot-search.png)
![Screenshot (Home - Mobile)](doc/img/screenshot-home-mobile.png)
![Screenshot (Home - Mobile - Expanded)](doc/img/screenshot-home-mobile-expanded.png)

## Prerequisites

- Gitit 0.12.3

Since Gitit 0.12.3, the syntax highlight library has been replaced with [skylighthing](https://github.com/jgm/skylighting) from [highlighting-kate](https://github.com/jgm/highlighting-kate). If you want to apply this theme before Gitit 0.12.2, please change `custom.css` as follows.

```diff
- @import url("highlighting.css"); /* for syntax highlighting */
+ @import url("hk-pyg.css"); /* for syntax highlighting */
```

## Install

    $ cd path/to/your-gitit-dir
    $ mv cache{,.bak} # if needed
    $ mv static{,.bak}
    $ mv templates{,.bak}
    $ git clone https://github.com/t13a/gitit-bootstrap-theme
    $ gitit-bootstrap-theme/build.sh
    ...
    $ cp -r gitit-bootstrap-theme/out/{static,templates} .

Then start Gitit.

## Run in Docker container

See [Gitit Experimental](https://github.com/t13a/dockerfile-gitit-experimental).
