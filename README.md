# Jour4

##starter
créer le projet jour4 
=> ng new jour4

installer bootstrap (version 4) => 
cd jour4
https://getbootstrap.com/docs/4.3/getting-started/introduction/ (regarder comment installer correctement bootstrap version 4)
npm i bootstrap
npm i jquery
npm i popper.js // https://www.npmjs.com/package/popper.js

// modifier le fichier angular.json

code . // ouvrir visual studio
modifier les propriétés 
"styles" et "scripts" de "build"

<pre>
"styles": [
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
],
"scripts": [
    "./node_modules/jquery/dist/jquery.slim.js",
    "./node_modules/popper.js/dist/umd/popper.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
</pre>

=> chemin dans style 

=> lancer la bête : `ng serve -o`

## les premiers composants 

créer deux composants :
- homepage
- navbar

=> afficher à l'écran


