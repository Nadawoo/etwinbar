
addEtwinFooter();


/**
 * Adds the links to the Eternaltwin games in the footer of the page
 */
function addEtwinFooter() {
	
	const sites = [
		{
		name: "MyHordes",
		url: "https://myhordes.eu/jx/public/welcome",
		description: "Le premier jeu de survie zombie gratuit se déroulant dans un monde hostile peuplé de morts-vivants !"
		},
		{
		name: "eMush",
		url: "https://emush.eternaltwin.org/",
		description: "Vous êtes sur le point de vous réveiller à bord du Daedalus avec 15 autres rebelles. Comme vous, ils fuient le Mush, un champignon parasite qui ravage la Terre et menace l'Humanité."
		},
		{
		name: "DinoRPG",
		url: "https://dinorpg.eternaltwin.org/",
		description: "Élevez vos dinoz dans un jeu d'aventure extraordinaire !"
		},
		{
		name: "Neoparc",
		url: "https://neoparc.eternaltwin.org/",
		description: "Combattez d'autres Dinoz et gagnez ainsi petit à petit de l'expérience lors de combats sans merci !"
		},
		{
		name: "Eternalfest",
		url: "https://eternalfest.net/",
		description: "Plus de 200 niveaux ! Une grande variété d'ennemis très très méchants !"
		},
		{
		name: "Eternal Kingdom",
		url: "https://kingdom.eternaltwin.org/",
		description: "Faites prospérer votre capitale. Recrutez des soldats et devenez... Empereur !"
		},
		{
		name: "Directquiz",
		url: "https://www.directquiz.org/",
		description: "Mettez votre culture à rude épreuve dans Direct Quiz, le jeu de quiz le plus déjanté du web !"
		},
		{
		name: "ePopotamo",
		url: "https://epopotamo.eternaltwin.org/",
		description: "Le jeu de mots relax jouable en toute situation !"
		}
	];

	const etwinFooter = document.querySelector('#etwinFooter');
	
	etwinFooter.innerHTML = `<h2>Autres jeux de Eternaltwin</h2>`;
	
	// Write each site in a new <li>
	const sitesContainer = document.createElement('ul');
	etwinFooter.appendChild(sitesContainer);
	renderSitesList(sites, sitesContainer);
}


/**
 * Write each site in a new <li>
 * 
 * @param {Array} sites - Array of objects with { url, name, description }
 * @param {HTMLElement} containerElement - The DOM element to render the list into
 */
function renderSitesList(sites, containerElement) {
	
	const fragment = document.createDocumentFragment();

	sites.forEach(site => {
		const newSiteItem = document.createElement('li');
		newSiteItem.innerHTML = `<a href="${site.url}" title="${site.description} (S'ouvre dans un nouvel onglet)" target="_blank" rel="noopener">${site.name}</a>`;
		fragment.appendChild(newSiteItem);
	});

	containerElement.appendChild(fragment);
}
