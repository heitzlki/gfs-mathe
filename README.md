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
├── package.json
├── README.md
├── src
│   ├── handout
│   │   ├── handout.tex
│   │   └── modules
│   │       ├── Enheitskreis
│   │       │   ├── Aufgabe
│   │       │   │   ├── Aufgabe.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── Beispiel
│   │       │   │   ├── Beispiel.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── BeziehungSinCosTan
│   │       │   │   ├── BeziehungSinCosTan.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── Definition
│   │       │   │   ├── Definition.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── Enheitskreis.tex
│   │       │   └── SinCosEinheitskreis
│   │       │       ├── path
│   │       │       ├── pdf_tex
│   │       │       ├── SinCosEinheitskreis.tex
│   │       │       └── svg
│   │       ├── Modellieren
│   │       │   ├── Alpha90
│   │       │   │   ├── Alpha90.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── Beispiel
│   │       │   │   ├── Beispiel.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── ErweitertAlpha360
│   │       │   │   ├── ErweitertAlpha360.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── ErweitertAlpha360Aufgabe
│   │       │   │   ├── ErweitertAlpha360Aufgabe.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── FVonAlpha
│   │       │   │   ├── FVonAlha.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── Graph
│   │       │   │   ├── Graph.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── Modellieren.tex
│   │       │   ├── SinusfunktionGradmaßDef
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   ├── SinusfunktionGradmaßDef.tex
│   │       │   │   └── svg
│   │       │   └── ZeitlicherVorgang
│   │       │       ├── path
│   │       │       ├── pdf_tex
│   │       │       ├── svg
│   │       │       └── ZeitlicherVorgang.tex
│   │       ├── Quellen
│   │       │   └── Quellen.tex
│   │       ├── Rückblick
│   │       │   ├── DerKosinusUndDertangens
│   │       │   │   ├── DerKosinusUndDertangens.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── DerSinus
│   │       │   │   ├── DerSinus.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── DerSinusAufgabe
│   │       │   │   ├── DerSinusAufgabe.tex
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   └── svg
│   │       │   ├── RechtwinkligesDreieckBeschriften
│   │       │   │   ├── path
│   │       │   │   ├── pdf_tex
│   │       │   │   ├── RechtwinkligesDreieckBeschriften.tex
│   │       │   │   └── svg
│   │       │   └── Rückblick.tex
│   │       └── Zusammenfassung
│   └── vortrag
│       ├── modules
│       └── vortrag.tex
├── TOOLS.md
├── utils
│   ├── clean.ts
│   ├── genAll.ts
│   ├── genHandout.ts
│   ├── genSvgs.ts
│   ├── modules
│   │   ├── deleteFile.ts
│   │   └── genSvg.ts
│   ├── startTexmaker.ts
│   └── UTILS.md
└── yarn.lock
```
