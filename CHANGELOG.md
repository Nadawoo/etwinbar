# Changelog for EtwinBar
This changelog is formatted as recommended by [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

## [Unreleased]
### Added
- [Config] You can totally remove a link by setting it to "null" in the config file
- [Config] New parameters to cutomise the "Legal mentions" and "Rules" links
### Modified
- [Config] The "boxBackgroundColor" parameter is renamed "blockBackgroundColor"

## [11.0] - 2025-08-08
### Added
- New config parameter to customise the global background of the footer
- New config parameters to customise the links in the "Participations are welcome" block
### Modified
- Hiding blocks:
    - The blocks to hide are now defined in the config file (no more in a dataset HTML attribute)
    - The block about version/commit/server (below the "alpha" block) can be hidden
- The EtwinBar's styles are loaded before the user's ones, so:
    1. In case of conflicts between styles, the user's styles are preserved
    2. The user can override the EtwinBar's styles to deeply customise the footer

### Fixed
- Fix indentation size in the HTML template and the CSS

## [10.0] - 2025-08-07
### Modified
- [Installation] The library is now importable as a Javascript module (no more <script src="etwinBar.js"> in your HTML)
- The "/etwinbar" folder is renamed "/src" (strong convention)
- The entry point of the library is renamed "index.js" (strong convention)
- The demonstration page is moved out of the lib folder for a real world usage

## [9.0] - 2025-08-07
### Modified
- [Installation] The HTML line for inserting the CSS is no more required
- [Installation] The HTML line for inserting the footer is no more required

## [8.0] - 2025-08-06
### Added
- The library can now be installed as an npm module

## [7.0] - 2025-08-05
### Fixed
- [JS] Encapsulate the EtwinBar's functions in a Javascript class to avoid interferences with the user's JS
- [CSS] Remove the last EtwinBar's styles which could have interfered with the user's styles

## [6.0] - 2025-08-02
### Added
- [Customization] The content of the "Staff" and "Thanks" blocks can be modified
### Changed
- [Customization] The styles are now defined in a config file, no more as attributes in the HTML

## [5.0] - 2025-08-01
### Added
-  [Customization] The user can change the styles of the footer (background color, text color...)

### Changed
- Add link to the wiki in the main text block

## [4.0] - 2025-08-01
### Added
- [Customization] The user can hide blocks of his choice

### Changed
- Add the missing links for Alphabounce, Dinocard and Interwheel

## [3.0] - 2025-07-31
### Changed
- Rewording of the texts to make them generic and include all useful links
## [2.0] - 2025-07-30
### Added
- Can insert the full footer of Eternaltwin (with the Piouz logo, "Thanks to" block and "Staff" block)

## [1.1] - 2025-07-30
### Added
- [a11y] Mention that the links open in a new tab

### Changed
- [Perf] Optimized generation for the list of sites

### Security 
- Add rel="noopener" attribute on links opening in a new tab
 
## [1.0] - 2025-07-29
### Added
- EtwinBar can insert an HTML footer containing the list of Eternaltwin's games.
