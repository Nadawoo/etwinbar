# Table of contents
- [What is EtwinBar?](#what-is-etwinbar)
- [How to install the Eternaltwin footer on my site?](#how-to-install-the-eternaltwin-footer-on-my-site)
  - [1. Install the EtwinBar library](#1-install-the-etwinbar-library)
  - [2. Set up the HTML elements](#2-set-up-the-html-elements)
- [Customisation](#customisation)
  - [Prerequirement: create the config file](#prerequirement-create-the-config-file)
  - [How to hide blocks](#how-to-hide-blocks)
  - [How to set the content of the "Staff" block](#how-to-set-the-content-of-the-staff-block)
  - [How to set the content of the "Thanks" block](#how-to-set-the-content-of-the-thanks-block)
  - [How to change the links in the "Contribute" block](#how-to-change-the-links-in-the-contribute-block)
  - [How to change the style of the footer](#how-to-change-the-style-of-the-footer)
  - [How to change the place of the footer](#how-to-change-the-place-of-the-footer)
- [Is there a risk that EtwinBar breaks the CSS/JS of my site?](#is-there-a-risk-that-etwinbar-breaks-the-cssjs-of-my-site)

# What is EtwinBar?
EtwinBar is a part of the Eternaltwin project (https://eternaltwin.org/).

EtwinBar allows you to insert on your own site a footer common to all of the Eternaltwin games.

- ✔️ Install it with only 3 lines of Javascript. No platform or framework required.
- ✔️ Contains all the useful informations and links
- ✔️ Customisable contents
- ✔️ Responsive
- ✔️ Doesn't break your CSS or JS

# How to install the Eternaltwin footer on my site?
## 1. Download the EtwinBar library
### Option 1: With a manual download
1. [Download the EtwinBar library from GitHub](https://github.com/Nadawoo/etwinbar/archive/refs/heads/master.zip)
2. Unzip the downloaded file and put **/etwinbar** folder in the place of your choice among the folders of your site.

### Option 2: By cloning the repository
1. Open a terminal in the place of your choice among the folders of your site
2. Run this command to clone the EtwinBar repository:
```
git clone https://github.com/Nadawoo/etwinbar.git
```

## 2. Initialize the library
### Option 1: directly in your HTML page
Insert this code in your HTML page, before the end of your &lt;body&gt;:
```html
<!-- Don't forget the type="module", otherwise the browser will raise an error like "Cannot use import statement outside a module" -->
<script type="module">
    // Adapt the path if you placed the /etwinbar folder elsewhere than at the root of your site
    import EtwinBar from "/etwinbar/src/index.js"
    const footer = new EtwinBar();
    footer.init();
</script>
```

### Option 2: in a Javascript file
In this example, your Javascript is in a file named **myScript.js** and placed at the root of your site. Adapt this path and name as you need.

1. Insert this code in your HTML page, before the end of your &lt;body&gt;:
```html
<!-- Don't forget the type="module", otherwise the browser will raise an error like "Cannot use import statement outside a module" -->
<script type="module" src="myScript.js"></script>
```

2. Content of your **myScript.js** file:
```js
// Adapt the path if you placed the /etwinbar folder elsewhere than at the root of your site
import EtwinBar from "/etwinbar/src/index.js"
const footer = new EtwinBar();
footer.init();
```

You can find a demonstration in the **index.htm** page.

# Customisation
## Prerequirement: create the config file
Ensure that the file **/etwinbar/src/config.json** exists. If not, create it by renaming the file **config.sample.json** to **config.json**.

## How to hide blocks
Open the **config.json** file and edit the values in the **blocksVisibility** key.
The blocks with the value **0** will be hidden, the ones with **1** will be displayed.
```json
"blocksVisibility": {
    "staff" : 1,
    "thanks" : 0
}
```

Allowed values :
- staff : The "Staff" block
- thanks : The "Thanks to" block
- description : The main block with the logo
- alpha : The alert about the alpha version in the main block
- technical : The informations about the server (version, commit number, server name)
- games : The list of other games
- legal : The links to the legal mentions

## How to set the content of the "Staff" block
Open the **config.json** file and put the names you want in the **"staff"** subkey. Example:
```json
"staff": [
    {
        "name": "John \"Johnny\" Doe",
        "iconName": "administrator.png"
    },
    {
        "name": "Super \"Califragil\" Istic",
        "iconName": "developer.png"
    }
]
```
The value of **iconName** is the name of the icon file located in the folder defined in the **design.iconsPath** key.
Example:
```json
"design": {
    "iconsPath": "img/default/icons/pink"
},
"staff": [
    {
        "name": "John Doe",
        "iconName": "administrator.png"
    }
]
```
This member will have the icon located in img/default/icons/pink/administrator.png

If you need more or different icons, you can put your own ones in the **img/custom/** folder.

If a name contains quotes, don't forget to escape them with a backslash (\\") to keep the JSON valid:
```json
"name": "John \"Johnny\" Doe"
```

## How to set the content of the "Thanks" block
Open the **config.json** file and put the names you want in the **"thanks"** subkey. Example:
```json
"thanks": [
    "Lorem",
    "Ipsum",
    "Dolor",
    "Sit Amet"
]
```
If a name contains quotes, don't forget to escape them with a backslash (\\") to keep the JSON valid:
```json
"thanks": [
    "Super \"Califragil\" Istic"
]
```

## How to change the links in the "Contribute" block
Open the **config.json** file and put the links to you own git repository, wiki page, etc., in the **"mySite"** subkey. Example:
```json
"mySite": {
    "git": "https://gitlab.com/xxxxx",
    "wiki": "https://wiki.eternal-twin.net/xxxxx",
    "translate": "https://crowdin.com/xxxxx",
    "discord": "https://discord.com/xxxxx",
    "forum": "https://eternaltwin.org/forum/xxxxx",
    "rules": "https://eternaltwin.org/rules/xxxxx",
    "legal": "https://eternaltwin.org/legal/xxxxx",
    "contact": "https://discord.com/zzzzz"
}
```

Links can be email addresses (useful for the "Contact" link):
```json
"mySite": {
    "contact": "admin@example.com"
}
```

If a link is empty ("") or missing, the default value for this link will be applied (general links to Eternaltwin, not related to a specific game).

If a link is not relevant for your site, you can totally remove it by setting its value to **null**.
Example for removing the "Translate on Crowdin" sentence:
```json
"mySite": {
    "translate": null
}
```

## How to change the style of the footer
### Parameters
Open the **config.json** file and change the values in the subkeys of the **design** key:
- footerBackgroundColor : Color of the background of the footer
- boxBackgroundColor : Color of the background of the blocks. We recommend to set the same color as for *footerBackgroundColor* for a prettier and modern result.
- borderColor : Color of the border of the blocks
- textColor : Color of the text in the footer
- linkColor : Color of the links in the footer
- logoColor : Color of the Eternatwin's logo at the top of the main block
- iconsPath: The path to the icons for the staff members (administrator, developer...). Allowed values:
  - img/default/icons/pink : default icons in the eMush style
  - img/default/icons/golden : default icons in the MyHordes style
  - img/custom : you can put here your own icon images

If you want to add or change other styles, put your rules in your own CSS files. Never put them in the CSS files of EtwinBar, as they would be erased in case of update.

### Pre-made designs
If you want a pre-made deign for your footer, copy-paste one of these sets of parameters in the **design** key.
#### DinoRPG style (beige)
```json
"design": {
    "footerBackgroundColor": "",
    "blockBackgroundColor": "#fffcf4",
    "borderColor": "#bd7e49",
    "textColor": "#701000",
    "linkColor": "#c54508",
    "logoColor": "#bd7e49",
    "iconsPath": "img/default/icons/pink"
}
```
#### eMush style (night blue)
```json
"design": {
    "footerBackgroundColor": "#080824",
    "blockBackgroundColor": "#080824",
    "borderColor": "rgba(136,166,254,0.3)",
    "textColor": "white",
    "linkColor": "#84e100",
    "logoColor": "black",
    "iconsPath": "img/default/icons/pink"
}
```
#### Black on white
```json
"design": {
    "footerBackgroundColor": "",
    "blockBackgroundColor": "",
    "borderColor": "black",
    "textColor": "black",
    "linkColor": "darkred",
    "logoColor": "black",
    "iconsPath": "img/default/icons/pink"
}
```
#### Dark mode (white on black)
```json
"design": {
    "footerBackgroundColor": "black",
    "blockBackgroundColor": "black",
    "borderColor": "white",
    "textColor": "white",
    "linkColor": "#84e100",
    "logoColor": "black",
    "iconsPath": "img/default/icons/pink"
}
```

## How to change the place of the footer
By default, the EtwinBar's footer is placed at the end of the &lt;footer&gt; tag. You can place it elsewhere by adding this tag where you want in your HTML:
```html
<section id="etwinFooter"></section>
```

# Is there a risk that EtwinBar breaks the CSS/JS of my site?
No, because all the EtwinBar's styles are prefixed with an HTML ID and all its Javascript functions are encapsulated in a class. Just follow these two intructions:
- **Don't define an #etwinFooter ID** in your HTML. This ID is reserved by the library.
- **Don't define an EtwinBar() class** in your Javascript. This class is reserved by the library.
