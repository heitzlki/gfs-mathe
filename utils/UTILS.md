# Utils

- [Clean](#clean)
- [Generate](#gen)

## Clean

| Befehl              | Option(en) | Beschreibung                                        | Besipiel                  |
| ------------------- | ---------- | --------------------------------------------------- | ------------------------- |
| `yarn clean-all`    |            | _löscht_ _gen-svg_ und _gen-tex_ generierte Dateien |                           |
| `yarn clean-tex`    | Datei      | _löscht_ _gen-tex_ generierte Dateien               | `yarn clean-tex vortrag`  |
| `yarn clean-svg`    | Datei      | _löscht_ _gen-svg_ generierte Dateien               | `yarn clean-svg sinus`    |
| `yarn clean-path`   | Datei      | _löscht_ _gen-path_ generierte Dateien              | `yarn clean-path sinus`   |
| `yarn clean-frames` | Datei      | _löscht_ _gen-frames_ generierte Dateien            | `yarn clean-frames sinus` |

## Generate

| Befehl                | Option(en)     | Beschreibung                                                      | Besipiel                      |
| --------------------- | -------------- | ----------------------------------------------------------------- | ----------------------------- |
| `yarn gen-all`        |                | _generiert_ _gen-svg_, _gen-tex_ und _gen-frames_ Dateien         |                               |
| `yarn gen-tex`        | Datei          | _generiert_ _LaTex_ Dateien                                       | `yarn gen-tex vortrag`        |
| `yarn gen-svg`        | Datei          | _generiert_ _Vectorgrafik_ Dateien                                | `yarn gen-svg sinus`          |
| `yarn gen-path`       | Datei          | _generiert_ _.path_ Dateien                                       | `yarn gen-path sinus`         |
| `yarn gen-frames`     | Datei          | _generiert_ _.frame.X.svg_ mit _.frames_ und _.config.json_ Datei | `yarn gen-frames sinus`       |
| `yarn gen-frames-new` | Datei & Frames | _generiert_ _.frames_ und _.config.json_ Datei                    | `yarn gen-frames-new sinus 7` |
