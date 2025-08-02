
addFullEtwinFooter();


/**
 * Adds the links to the Eternaltwin games in the footer of the page
 */
async function addEtwinGames() {
	
	const games = [
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
		name: "MyBrute",
		url: "https://labrute.eternaltwin.org",
		description: "Un jeu de combat gratuit : forme le combattant le plus puissant de tous les temps !"
		},
		{
		name: "DinoRPG",
		url: "https://dinorpg.eternaltwin.org/",
		description: "Élevez vos dinoz dans un jeu d'aventure extraordinaire !"
		},
		{
		name: "EternalKingdom",
		url: "https://kingdom.eternaltwin.org/",
		description: "Faites prospérer votre capitale. Recrutez des soldats et devenez... Empereur !"
		},
		{
		name: "Directquiz",
		url: "https://www.directquiz.org/",
		description: "Mettez votre culture à rude épreuve dans Direct Quiz, le jeu de quiz le plus déjanté du web !"
		},
		{
		name: "Dinocard Rebirth",
		url: "https://dinocard.eternaltwin.org/",
		description: "Dinocard Rebirth est la re-création du jeu original Dinocard de Motion Twin. Il contient déjà 150 cartes jouables !"
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
		name: "ePopotamo",
		url: "https://epopotamo.eternaltwin.org/",
		description: "Le jeu de mots relax jouable en toute situation !"
		},
		{
		name: "AlphaBounce",
		url: "https://alphabounce.eternaltwin.org",
		description: "AlphaBounce est un casse-briques dans lequel vous êtes un prisonnier condamné à miner dans l'espace pour l'éternité. Peut-être parviendrez-vous à rentrer à la maison ?"
		},
		{
		name: "Interwheel",
		url: "https://interwheel.styve-simonneau.fr/",
		description: "Grimpez de roue en roue pour échapper à l'eau montante !"
		}
	];
	
	// Write each site in a new <li>
	const gamesContainer = await document.querySelector('#etwinFooter .games ul');
	renderGamesList(games, gamesContainer);
}


/**
 * Load an HTML <template>
 */
async function loadTemplate(url, templateId) {

	const response = await fetch(url);
	if (!response.ok) throw new Error(`Failed to load template file: ${response.status}`);
	const text = await response.text();

	// Create a temporary element to parse the HTML
	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = text;
	// Extracts the HTML of the template
	const template = tempDiv.querySelector(templateId);
	if (!template) throw new Error('Template ID not found inside the file');

	return template;
}


async function loadJson(filePath) {

	try {
		const response = await fetch('config.json');
		if (!response.ok) {
			throw new Error('HTTP error while reading JSON file: ' + response.status);
		}
		return await response.json();
	} catch (error) {
		console.error('Error while reading JSON file:', error);
		return null;
	}
}


/**
 * Insert the full footer of Eternaltwin (with the Piouz logo,
 * "Thanks to" block, "Devs" block, etc.)
 */
async function addFullEtwinFooter() {
	
	// Add the footer inside the HTML page
	const template = await loadTemplate("/etwinbar/templates/fullFooter.htm", "#tplFullFooter");
	const etwinFooter = document.querySelector('#etwinFooter');
	const clone = template.content.cloneNode(true);
	etwinFooter.appendChild(clone);
	
	// Populate the block "Eternatwin's games" with the list of games
	addEtwinGames();
	
	// Hide the blocks the user doesn't want
	let hiddenBlocks = parseDatasetList(document.querySelector("#etwinFooter"), "hiddenblocks");	
	hideBlocks(hiddenBlocks);
	
	// Applies the customized styles of the user
	let configs = await loadJson('config.json');
	applyCustomStyles(configs.design);
}


/**
 * Apply the customized styles the user has set in the data- attributes
 * (see the README.md for more informations)
 */
async function applyCustomStyles(stylesValues) {
	
	let styleNode = document.createElement('style');
	styleNode.textContent = `
		#etwinFooter .box {
			background-color: ${stylesValues.backgroundColor};
			border-color: ${stylesValues.borderColor};
			color: ${stylesValues.textColor};
		}
		#etwinFooter hr {
			border-color: ${stylesValues.borderColor};
		}
		#etwinFooter a {
			color: ${stylesValues.linkColor};
		}
		#etwinFooter .status {
			border-color: ${stylesValues.borderColor};
		}
		#etwinFooter .etwin-logo .contour {
			fill: ${stylesValues.logoColor};
		}
	`;
	// Write the new style rules in the head of the page
	document.head.appendChild(styleNode);
}


/**
 * Get the content of a data- attribute and convert it to a JS list.
 * Ex: <div data-members="alice, bob"></div>
 *     will be converted to ["alice", "bob"]
 *
 * @param {Object} element - The HTML element owning the data- attribute
 *							 Ex: document.querySelector("#myElement")
 * @param {String} dataAttrName - The name the data- which contains the list to parse.
								  The items in the value must be separated by a comma.
 * @return {Array}
 */
function parseDatasetList(element, dataAttrName) {
	
	let raw = element.dataset[dataAttrName];
	if (!raw) return [];
	return raw.split(',').map(item => item.trim()).filter(Boolean);
}


function hideBlocks(hiddenBlocks) {
	
	hiddenBlocks.forEach(className => {
		const element = document.querySelector(`#etwinFooter .${className}`);
		if(element) {
			element.classList.add('hidden');
		}
	});
}


/**
 * Write each games in a new <li>
 * 
 * @param {Array} games - Array of objects with { url, name, description }
 * @param {HTMLElement} containerElement - The DOM element to render the list into
 */
function renderGamesList(games, containerElement) {
	
	const fragment = document.createDocumentFragment();

	games.forEach(game => {
		const newSiteItem = document.createElement('li');
		newSiteItem.innerHTML = `<a href="${game.url}" title="${game.description} (S'ouvre dans un nouvel onglet)" target="_blank" rel="noopener">${game.name}</a>`;
		fragment.appendChild(newSiteItem);
	});

	containerElement.appendChild(fragment);
}
