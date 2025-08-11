export default class EtwinBar {
    
    init() {
        
        this.addCssLink("/src/css/etwinBar.css");
        this.addEtwinBarContainer();
        this.populateEtwinFooter();
    }
    
    
    /**
     * Adds the links to the Eternaltwin games in the footer of the page
     */
    async populateGamesBlock() {

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
        this.renderGamesList(games, gamesContainer);
    }


    /**
     * Add <li> items in a <ul>
     * 
     * @param {String} listSelector
     * @param {Array} listItems
     */
    async populateList(listSelector, listItems) {

        let container = await document.querySelector(listSelector);
        container.innerHTML = "";

        let fragment = document.createDocumentFragment();
        listItems.forEach(listItem => {
            const newItem = document.createElement('li');
            newItem.innerText = listItem;
            fragment.appendChild(newItem);
        });

        container.appendChild(fragment);
    }


    /**
     * Insert a raw text inside a block. If you need a list (<ul>), see the populateList() method.
     * 
     * @param {String} blockSelector
     * @param {String} text
     */
    async populateBlock(blockSelector, text) {

        let container = await document.querySelector(blockSelector);
        container.innerHTML = "";
        container.append(text);
    }


    /**
     * Load an HTML <template>
     */
    async loadTemplate(url, templateId) {

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


    async loadJson(filePath) {

        try {
            const response = await fetch(filePath);
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
     * Add a <link> line in HTML for adding a CSS file
     * 
     * @param {String} cssPath
     */
    addCssLink(cssPath) {
        
        const head = document.head;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssPath;
        head.insertBefore(link, head.firstChild);
    }


    /**
     * Test if the file exists
     */
    async isFile(url) {

        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.ok;
        } catch (error) {
            return false;
        }
    }

    
    /**
     * Add the <section id="etwinBar"> in the HTML page
     */
    addEtwinBarContainer() {
        
        // Create <footer> if doesn't exist
        let footerNode = document.querySelector("footer");
        if(footerNode === null) {
            let tag = document.createElement("footer");
            document.querySelector("body").appendChild(tag);
        }
        
        // Create <section id="etwinBar"> if not already placed by the user
        let etwinBarNode = document.querySelector("#etwinBar");
        if(etwinBarNode === null) {
            let tag = document.createElement('section');
            tag.id = 'etwinFooter';
            document.querySelector('footer').appendChild(tag);
        }
    }
    

    /**
     * Insert the full footer of Eternaltwin (with the Piouz logo,
     * "Thanks to" block, "Staff" block, etc.)
     */
    async populateEtwinFooter() {
        
        // Add the footer inside the HTML page
        const template = await this.loadTemplate("/src/templates/fullFooter.htm", "#tplFullFooter");
        const etwinFooter = await document.querySelector('#etwinFooter');
        const clone = template.content.cloneNode(true);
        etwinFooter.appendChild(clone);

        // Apply the user's customisations
        const configFilePath = "/src/config.json";
        this.isFile(configFilePath).then(async isFile => {
            if(isFile) {
                let configs = await this.loadJson(configFilePath);
                // Add the texts in the blocks (Games, Staff, Thanks)
                this.populateGamesBlock();
                this.populateList("#etwinFooter .staff ul", configs.staff);
                this.populateBlock("#etwinFooter .thanks p", configs.thanks.join(', '));
                // Apply the customized styles
                this.applyCustomStyles(configs.design);
                // Hide the blocks the user doesn't want
                this.hideBlocks(configs.hiddenBlocks);
                // Set custom values for the links
                this.replaceLinksHref("#etwinFooter .contributions [data-link]", configs.mySite);
                this.replaceLinksHref("#etwinFooter .alpha [data-link]", configs.mySite);
                this.replaceLinksHref("#etwinFooter .legal [data-link]", configs.mySite);
            }
        });
    }


    /**
     * Apply the customized styles the user has set in the data- attributes
     * (see the README.md for more informations)
     */
    async applyCustomStyles(stylesValues) {
        
        let logoShadowColor = this.getLogoShadowColor(stylesValues.logoColor);
        
        let styleNode = document.createElement('style');
        styleNode.textContent = `
            #etwinFooter {
                background-color: ${stylesValues.footerBackgroundColor};
            }
            #etwinFooter .block {
                background-color: ${stylesValues.blockBackgroundColor};
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
            #etwinFooter .etwin-logo .shadow {
                fill: ${logoShadowColor};
            }
        `;
        // Write the new style rules in the head of the page
        let head = document.head;
        head.insertBefore(styleNode, head.querySelector("link[rel='stylesheet']").nextSibling);
    }
    
    
    /**
     * Calculate the RGB color for the shadow logo, slightly lighter than 
     * the main logo color
     */
    getLogoShadowColor(mainLogoColor) {
        
        // Convertir la couleur en RGB
        const rgb = this.cssColorToRgb(mainLogoColor);

        if (!rgb) return;

        // Créer une version plus claire (ex: 80% du chemin vers blanc)
        const lighter = {
            r: Math.round(rgb.r + (255 - rgb.r) * 0.8),
            g: Math.round(rgb.g + (255 - rgb.g) * 0.8),
            b: Math.round(rgb.b + (255 - rgb.b) * 0.8),
        };

        return `rgb(${lighter.r}, ${lighter.g}, ${lighter.b})`;
    }
    
    
    /**
     * Get the RGB values from a color.
     * 
     * @param {String} colorString - Color in any format (named color, hexadecimal...)
     * @para {Object}
     */
    cssColorToRgb(color) {
        
        const temp = document.createElement("div");
        temp.style.color = color;
        document.body.appendChild(temp);

        const rgb = getComputedStyle(temp).color;
        document.body.removeChild(temp);

        // Expected result: "rgb(r, g, b)" or "rgba(r, g, b, a)"
        const match = rgb.match(/rgba?\((\d+), (\d+), (\d+)/);
        if (!match) return null;
        
        return {
            r: parseInt(match[1], 10),
            g: parseInt(match[2], 10),
            b: parseInt(match[3], 10),
        };
    }
    
    
    /**
     * Get the content of a data- attribute and convert it to a JS list.
     * Ex: <div data-members="alice, bob"></div>
     *     will be converted to ["alice", "bob"]
     * Example of usage:
     *     let hiddenBlocks = this.parseDatasetList(document.querySelector("#etwinFooter"), "hiddenblocks");
     *
     * @param {Object} element - The HTML element owning the data- attribute
     *				 Ex: document.querySelector("#myElement")
     * @param {String} dataAttrName - The name the data- which contains the list to parse.
                                      The items in the value must be separated by a comma.
     * @return {Array}
     */
    parseDatasetList(element, dataAttrName) {

        let raw = element.dataset[dataAttrName];
        if (!raw) return [];
        return raw.split(',').map(item => item.trim()).filter(Boolean);
    }


    hideBlocks(hiddenBlocks) {

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
    renderGamesList(games, containerElement) {

        const fragment = document.createDocumentFragment();

        games.forEach(game => {
            const newSiteItem = document.createElement('li');
            newSiteItem.innerHTML = `<a href="${game.url}" title="${game.description} (S'ouvre dans un nouvel onglet)" lang="en" target="_blank" rel="noopener">${game.name}</a>`;
            fragment.appendChild(newSiteItem);
        });

        containerElement.appendChild(fragment);
    }
    
    
    /**
     * Replace the href value in the <a> identified by the dataset "data-link"
     * Example of HTML: <a data-link="myName" href="https://gitlab.com/eternaltwin">GitLab</a>
     * 
     * @param {String} selector - The DOM selector to the container of the links.
     *                      Always prefix it with #etwinFooter to avoid modifiying
     *                      the user's HTML. 
     * @param {Object} replacementLinks - The links of the new values for the links,
     *                      where each key is the name of the data-* and its value 
     *                      is your replacement link
     */
    replaceLinksHref(selector, replacementLinks) {
        
        const links = document.querySelectorAll(selector);
        links.forEach(a => {
            const key = a.dataset.link;
            const newHref = replacementLinks[key];
            if (newHref) {
                a.href = newHref;
            }
        });
    }
}
