# Utils

- [Clean](#clean)
- [Generate](#gen)

## Clean

| Befehl              | Option(en) | Beschreibung                                              | Besipiel                  |
| ------------------- | ---------- | --------------------------------------------------------- | ------------------------- |
| `yarn clean-all`    |            | **löscht** **gen-svg** und **gen-tex** generierte Dateien |                           |
| `yarn clean-tex`    | Datei      | **löscht** **gen-tex** generierte Dateien                 | `yarn clean-tex vortrag`  |
| `yarn clean-svg`    | Datei      | **löscht** **gen-svg** generierte Dateien                 | `yarn clean-svg sinus`    |
| `yarn clean-path`   | Datei      | **löscht** **gen-path** generierte Dateien                | `yarn clean-path sinus`   |
| `yarn clean-frames` | Datei      | **löscht** **gen-frames** generierte Dateien              | `yarn clean-frames sinus` |

## Generate

| Befehl                | Option(en)     | Beschreibung                                                              | Besipiel                      |
| --------------------- | -------------- | ------------------------------------------------------------------------- | ----------------------------- |
| `yarn gen-all`        |                | **generiert** **gen-svg**, **gen-tex** und **gen-frames** Dateien         |                               |
| `yarn gen-tex`        | Datei          | **generiert** **LaTex** Dateien                                           | `yarn gen-tex vortrag`        |
| `yarn gen-svg`        | Datei          | **generiert** **Vectorgrafik** Dateien                                    | `yarn gen-svg sinus`          |
| `yarn gen-path`       | Datei          | **generiert** **.path** Dateien                                           | `yarn gen-path sinus`         |
| `yarn gen-frames`     | Datei          | **generiert** **.frame.X.svg** mit **.frames** und **.config.json** Datei | `yarn gen-frames sinus`       |
| `yarn gen-frames-new` | Datei & Frames | **generiert** **.frames** und **.config.json** Datei                      | `yarn gen-frames-new sinus 7` |
