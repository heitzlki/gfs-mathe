# gfs-mathe

## Table of contents

- [General Info](#general-Info)
- [Setup](#setup)
- [Utils](#utils)
  - [Clean](#clean)
  - [Generate](#generate)
- [Manual setup](#manual-setup)
- [Tools](#Tools)
- [Struktur](#struktur)

## General Info

Die ist das Github-repository und für die Gleichwertige Feststellung von Schülerleistungen(GFS) von Kirill Heitzler in dem Fach Mathematik über das Thema "Mit dem Sinus modellieren".

## Setup

```
git clone https://github.com/heitzlki/gfs-mathe
cd gfs-mathe/
yarn install
yarn gen-all
```

## Utils

###### https://github.com/heitzlki/gfs-mathe/utils/UTILS.md

### Clean

```
yarn clean-all
```

### Generate

```
yarn gen-all

yarn gen-tex <name>

yarn gen-svg <name>

yarn gen-frames <name>

yarn gen-frames-new <name> <frames>
```

## Tools

###### https://github.com/heitzlki/gfs-mathe/TOOLS.md

## Manual setup

### LaTex

```
pdflatex -synctex=1 -interaction=nonstopmode <name>.tex
```

## Struktur

```
.
├── assets
│   ├── ggb
│   │   ├── EinheitskreisBasic.ggb
│   │   ├── Einheitskreis.ggb
│   │   └── Einheitslreis-1.ggb
│   ├── main
│   ├── others
│   │   ├── differentWaysToRowThreeImages.txt
│   │   ├── Einheitskreis.svg
│   │   ├── LaTex_commands.txt
│   │   ├── links.txt
│   │   └── structure.odp
│   ├── path
│   ├── pictures
│   │   ├── freiburg12-060227.jpg
│   │   ├── FreiburgMünster.png
│   │   └── FreiburgMünster.xcf
│   ├── scripts
│   │   ├── del_path.py
│   │   ├── del_tex.py
│   │   ├── gen_path.py
│   │   └── gen_path_svg.py
│   ├── sin-cos-tan
│   │   ├── Cosinus.pfad.svg
│   │   ├── Cosinus.svg
│   │   ├── Sin-Cos-Tan.svg
│   │   ├── Sinus.pfad.svg
│   │   ├── Sinus.svg
│   │   ├── Tangens.pfad.svg
│   │   └── Tangens.svg
│   ├── sources
│   │   └── sources.txt
│   ├── steps
│   │   ├── RechtwinkligesDreieck-Schritte.svg
│   │   └── RechtwinkligesDreieck.svg
│   └── svg
│       ├── 0_alpha_90_360.svg
│       ├── 0_alpha_90.svg
│       ├── einheitskreis_dreieck_pythagoras.svg
│       ├── radar_loesung.svg
│       ├── radar.svg
│       ├── rechtwinkliges_dreieck_am_muenster.svg
│       ├── rechtwinkliges_dreieck_cosinus.svg
│       ├── rechtwinkliges_dreieck_sin_cos_tan.svg
│       ├── rechtwinkliges_dreieck_sinus.svg
│       ├── rechtwinkliges_dreieck.svg
│       ├── rechtwinkliges_dreieck_tangens.svg
│       ├── schaufelraddamper.svg
│       ├── sin_120_087.svg
│       ├── sin_310_-_077.svg
│       ├── sin_cos_einheitskreis.svg
│       ├── sin_neunzig_cos_neunzig_einheitskreis.svg
│       ├── sin_neunzig_minus_alpha_cos_neunzig_minus_alpha.svg
│       ├── sin_null_cos_null_einheitskreis.svg
│       ├── sinuswelle.svg
│       ├── sinuswelle_zeichnen.svg
│       └── title.svg
├── gfs-mathe.pdf
├── gfs-mathe.tex
└── README.md
```
