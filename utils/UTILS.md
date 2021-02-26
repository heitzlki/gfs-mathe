## Utils

### Clean

> Unabhängig von alle `clean` befehlen sollten Dateien mit folgenden Endungen `.svg, .tex, .frames.svg, .ts, .config.json` `nicht gelöscht werden`

#### Alles

> Dieser Befehl `löscht` Dateien, die durch `Grafiken`(.path, .frame, .pdf_tex, ect.) und `LaTex`(.aux, .log, .out, .synctex.gz, .toc, etc.) generiert wurden

```
yarn clean-all
```

#### LaTex

> Dieser Befehl `löscht` Dateien, die durch `LaTex` generierten wurden(.aux, .log, .out, .synctex.gz, .toc, etc.)

```
yarn clean-tex <name>
```

#### Grafiken

> Dieser Befehl `löscht` Dateien, die durch `Grafiken` generierten wurden(`*.path.*`, `*.pdf_tex*` )

```
yarn clean-svg <name>
```

#### Pfade

> Dieser Befehl `löscht` Dateien, die durch `Pfad` Grafiken generierten wurden(`*.path.*`)

```
yarn clean-path <name>
```

#### Frames

> Dieser Befehl `löscht` Dateien, die durch `inkscape-beamer-frames` Grafiken generierten wurden(`*.frame.*`)

```
yarn clean-svg <name>
```

### Generate

#### Alles

> Dieser Befehl `generiert` alle `LaTex` und `Grafik` Dateien

```
yarn gen-all
```

#### LaTex

> Dieser Befehl `generiert` alle `LaTex` Dateien

```
yarn gen-tex <name>
```

#### Grafiken

> Dieser Befehl `generiert` alle `Grafik` Dateien

```
yarn gen-svg <name>
```

#### Pfade

> Dieser Befehl `generiert` alle für alle `Vectorgrafiken`(`.svg`) `Pfad`(`.path`) Dateien

```
yarn gen-path <name>
```

#### LaTex-PDFs

> Dieser Befehl `generiert` alle `LaTex-PDFs` Dateien

```
yarn gen-pdf-pdf-tex <name>
```

### inkscape-beamer-frames

#### New

```
yarn gen-frames-new <name> <frames>
```

#### Generate

```
yarn gen-frames <name>
```
