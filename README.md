# Table of contents
- [What is EtwinBar?](#what-is-etwinbar)
- [How to install the Eternaltwin footer on my site?](#how-to-install-the-eternaltwin-footer-on-my-site)
  - [1. Install the EtwinBar library](#1-install-the-etwinbar-library)
  - [2. Set up the HTML elements](#2-set-up-the-html-elements)
  - [Example](#example)
- [Customisation](#customisation)
  - [Prerequirement: create the config file](#prerequirement-create-the-config-file)
  - [How to hide blocks](#how-to-hide-blocks)
  - [How to set the content of the "Staff" block](#how-to-set-the-content-of-the-staff-block)
  - [How to set the content of the "Thanks" block](#how-to-set-the-content-of-the-thanks-block)
  - [How to change the style of the footer](#how-to-change-the-style-of-the-footer)
- [Is there a risk that EtwinBar breaks the CSS/JS of my site?](#is-there-a-risk-that-etwinbar-breaks-the-cssjs-of-my-site)

# What is EtwinBar?
EtwinBar is a part of the Eternaltwin project (https://eternaltwin.org/).

EtwinBar allows you to insert on your own site a footer common to all of the Eternaltwin games.

- ✔️ Only 3 lines of HTML required to install it on you site
- ✔️ Contains all the useful informations and links
- ✔️ Customisable contents
- ✔️ Responsive
- ✔️ Doesn't break your CSS or JS

# How to install the Eternaltwin footer on my site?
## 1. Install the EtwinBar library
Put the **/etwinbar** folder in the appropriate place of your site. It can be the root or a subfolder.

## 2. Set up the HTML elements
**Insert this line where you want inside the &lt;footer&gt; of your page :**
```html
<section id="etwinFooter"></section>
```
(This is where the list of games will be added.)

**Insert this line inside the &lt;head&gt; of your page :**
```html
<link rel="stylesheet" href="/etwinbar/css/etwinBar.css">
```
(Adapt the path if you have placed the **/etwinbar** folder elsewhere than at the root of your site.)

**Insert this line before the end of your &lt;body&gt; :**
```html
<script type="text/javascript" src="/etwinbar/js/etwinBar.js" async></script>
```
(Adapt the path if you have placed the **/etwinbar** folder elsewhere than at the root of your site.)

## Example
Here is a minimalistic structure with the 3 elements to insert :
```html
<html>
    <head>
        <link rel="stylesheet" href="/etwinbar/css/etwinBar.css">
    </head>
    <body>
        
        <!-- The main content of your site is here -->

        <footer>
                <section id="etwinFooter"></section>
        </footer>

        <script type="text/javascript" src="/etwinbar/js/etwinBar.js" async></script>

    </body>
</html>
```

You can find a complete example of implementation in the **demo.htm** page.

# Customisation
## Prerequirement: create the config file
Ensure that the file **/etwinbar/config.json** exists. If not, create it by renaming the file **config.sample.json** to **config.json**.

## How to hide blocks
You can hide the blocks you don't need by listing them in the "hiddenblocks" data attribute:
```html
<section id="etwinFooter" data-hiddenblocks="staff, thanks">
```
The items must be separated by a comma.

Allowed values :
- staff : The "Staff" block
- thanks : The "Thanks to" block
- description : The main block with the logo
- alpha : The alert about the alpha version in the main block
- games : The list of other games
- legal : The links to the legal mentions

## How to set the content of the "Staff" block
Open the **config.json** file and put the names you want in the **"staff"** subkey. Example:
```json
"staff": [
    "John Doe",
    "Sarah Connor"
]
```
If a name contains quotes, don't forget to escape them with a backslash (\\") to keep the JSON valid:
```json
"staff": [
    "Super \"Califragil\" Istic"
]
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
## How to change the style of the footer
Open the **config.json** file and change the values in the subkeys of the "design" key:

- backgroundColor : Color of the background of the blocks
- borderColor : Color of the border of the blocks
- textColor : Color of the text in the footer
- linkColor : Color of the links in the footer
- logoColor : Color of the Eternatwin's logo at the top of the main block

If you want to add or change other styles, put your rules in your own CSS files. Never put them in the CSS files of EtwinBar, as they would be erased in case of update.

# Is there a risk that EtwinBar breaks the CSS/JS of my site?
No, because all the EtwinBar's styles are prefixed with an HTML ID and all its Javascript functions are encapsulated in a class. Juste follow these two intructions:
- **Don't define an #etwinFooter ID** in your HTML. This ID is reserved by the library.
- **Don't define an EtwinBar() class** in your Javascript. This class is reserved by the library.
