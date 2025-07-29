# What is EtwinBar?
Etwinbar is a part of the Eternaltwin project (https://eternaltwin.org/).

Etwinbar allows you to insert on your own site a footer common to all of the Eternaltwin games.

# How to install the Eternaltwin footer on my site?
## 1) Install the EtwinBar library
Put the **/etwinbar** folder in the appropriate place of your site. It can be the root or a subfolder.

## 2) Set up the HTML elements
**Insert this line where you want inside the &lt;footer&gt; of your page :**
```html
<section id="etwinFooter"></section>
```
(This is where the list of games will be added.)

**Insert this line inside the &lt;head&gt; of your page :**
```html
<link rel="stylesheet" href="etwinbar/css/etwinBar.css">
```
(Adapt the path if you have placed the **/etwinbar** folder elsewhere than at the root of your site.)

**Insert this line before the end of your &lt;body&gt; :**
```html
<script type="text/javascript" src="etwinbar/js/etwinBar.js" async></script>
```
(Adapt the path if you have placed the **/etwinbar** folder elsewhere than at the root of your site.)

# Example
Here is a minimalistic structure with the 3 elements to insert :
```html
<html>
	<head>
		<link rel="stylesheet" href="etwinbar/css/etwinBar.css">
	</head>
	<body>
		
		<!-- The main content of your site is here -->
		
		<footer>
			<section id="etwinFooter"></section>
		</footer>
		
		<script type="text/javascript" src="etwinbar/js/etwinBar.js" async></script>
		
	</body>
</html>
```

You can find a complete example of implementation in the **demo.htm** page.

# How to change the style of the footer?
The CSS provided with EtwinBar is minimalistic, as we assume you want to apply styles in accordance with the design of your site.

If you want to add or change the styles, put your rules in your own CSS files. Don't put them in the CSS files of EtwinBar, as they would be erased in case of update.
