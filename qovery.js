// On récupère les boutons du HTML et on let met dans des variables
let btnFactures = document.getElementById('app-btn-factures');
let btnFiches = document.getElementById('app-btn-fiches');
let btnFrais = document.getElementById('app-btn-frais');
let fieldDocuments = document.getElementById('js-field-documents');
let listItems = document.getElementById('js-list');



btnFactures.addEventListener('click', () => {
    // Requête du document json
    fetch('https://secure.askolga.fr/bucket/fdac8247bd256b0728c44923103178174e51cbddf80612cf46797708094eb3c05fe0eac4e8418/search/4dc8a7f01e0631bcd98c10aa294119d4f211e8bd15db6499c1332a7afeefcf205fe571f414eed-show.json')
        .then(response => response.json())
        .then(response => {

            //On réinitialise le contenu de la balise ul
            listItems.innerHTML = "";

            // On récupère le nombre de documents trouvés dans le json et on l'indique à l'utilisateur
            fieldDocuments.innerHTML = Object.keys(response.documents).length + " documents trouvés";

            // On crée des éléments li en fonction du nombre de documents dans le json
            for(let i=0;i<Object.keys(response.documents).length;i++){
                var container = document.createElement("li");
                container.classList.add("factures");

                // Création d'id pour chaque document afin d'appliquer un background tous les 2 documents
                container.id = "factureNum"+ i;
                if(i%2 == 0){
                    container.style.backgroundColor = "#304677";
                }

                //On place les éléments li à l'intérieur de la balise ul
                listItems.appendChild(container);
                
                //Le contenu des éléments li est égale aux noms des documents dans le json.
                container.innerHTML= Object.values(response.documents)[i].filename;
            }
        })
});

btnFiches.addEventListener('click', () => {
    fetch('https://secure.askolga.fr/bucket/fdac8247bd256b0728c44923103178174e51cbddf80612cf46797708094eb3c05fe0eac4e8418/search/607fd57bfc3685e1a2865fc10c652194a455af6f3e594543cecad5417cbecc285ff3208ecaaf0-show.json')
        .then(response => response.json())
        .then(response => {
            listItems.innerHTML = "";
            fieldDocuments.innerHTML = Object.keys(response.documents).length + " documents trouvés";
            for(let i=0;i<Object.keys(response.documents).length;i++){
                var container = document.createElement("li");
                container.classList.add("factures");
                container.id = "factureNum"+ i;
                if(i%2 == 0){
                    container.style.backgroundColor = "#304677";
                }
                listItems.appendChild(container);
                container.innerHTML= Object.values(response.documents)[i].filename;
            }
        })
});

btnFrais.addEventListener('click', () => {
    fetch('https://secure.askolga.fr/bucket/fdac8247bd256b0728c44923103178174e51cbddf80612cf46797708094eb3c05fe0eac4e8418/search/9c9827361e739e7d1e0cc99f70648ae0568866eb993d45b7090e4110bc3f6ddd5fe5815aaf9c5-show.json')
        .then(response => response.json())
        .then(response => {
            listItems.innerHTML = "";
            fieldDocuments.innerHTML = Object.keys(response.documents).length + " document trouvé";
            for(let i=0;i<Object.keys(response.documents).length;i++){
                var container = document.createElement("li");
                container.classList.add("factures");
                container.id = "factureNum"+ i;
                if(i%2 == 0){
                    container.style.backgroundColor = "#304677";
                }
                listItems.appendChild(container);
                container.innerHTML= Object.values(response.documents)[i].filename;
            }
        })
});