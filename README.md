<h1 align="center">RemuRhythm</h1>

<p align="center">A rhythm practice/game website</p>

## :speech_balloon: About the structure

Most of the project is based on the typical structure of a Nuxt 3 project.
But you will find out that there's more folders than usual.

This section is dedicated to that: explaining what those folders contain.

### :file_folder: `utils`

This folder contains scripts that aren't reactive in any way (so not composables)
as well as typing information (for example, component props interfaces) in `utils/types`.

Regarding the props interfaces, there's no guidance about separating the props interfaces from
their respective components, so this `utils/types/props.ts` file must be considered temporary.

### :file_folder: `config`

This folder contains configuration files related to the app.

This could be props presets for components, static data, and any data that would be used at runtime that you want to separate from your `app.config.ts` file.

## :busts_in_silhouette: Credits

### :globe_with_meridians: Website

Me, PhirosWolf :smile:

### :wrench: Framework

[Nuxt 3 - The Hybrid Vue Framework](https://v3.nuxtjs.org/)

### :capital_abcd: Fonts

- [Gulax by Velvetyne Type Foundry](https://velvetyne.fr/fonts/gulax/)
- [Format 1452 by Velvetyne Type Foundry](https://velvetyne.fr/fonts/format-1452/)

All information regarding the authors of those fonts as well as their licenses are included in the webpages linked above.