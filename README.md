# Exercice pratique Javascript : le Titanic

![Titanic](./img/titanic.jpg)

Dans le cadre de votre métier de dévelopeur Web ou autre (voir plus), vous êtes souvent confronté à des collections de données que vous devez analyser pour diverses raisons. L'exercice que vous devez réaliser a été pensé dans ce sens et va vous permettre de mettre en pratique des principes de bases en programmation Javascript.

## Contexte

Le __14 avril 1912 à 23h40__ le bateau considéré comme insubmersible dès ça création a glissé dans les eaux glacées de l'atlantique nord. Un bien triste voyage inaugural pour une fière esquif, le __Titanic__ s'en es allé emmenant avec lui un grand nombre de passagers. 

En hommage pour ces victimes dont on parle au pluriel sans jamais connaitre leur nombre, ni même celui des rescapés, vous avez à votre disposition dans le dossier `./data` un fichier contenant la liste la plus exhaustive possible des passagers présents sur le __Titanic__ dans un fichier nommé `titanic.js`. Vous allez devoir user de vos compétences en Javascript pour réaliser une cartographie des ces passagers.

## Etapes à suivre

Pour commencer votre travail vous devez récupérer la totalité de ce _repo_ sur votre machine, vous devrez ensuite mettre à jour le fichier `app.js` placer dans le dossier `./js` à la racine du _repo_. Il n'est pas nécessaire de modifier les autres fichiers mais si vous sentez l'envie de faire de la data visualisation monter, n'hésitez pas à faire un tour du cotés de <https://d3js.org>.

### Etape 0) La boucle

Parce qu'il faut bien commencer par le principal, vous devez mettre à jour la fonction `collectionLoop()` pour faire une boucle sur la collection `titanicData`. C'est le point de départ de votre analyse, choisissez une boucle efficace pour traiter des données.

### Etape 1) Recensement

Une fois dans la boucle vous devez calculer les données suivantes :

- Le __nombre total__ de femmes et celui d'hommes
- La __moyenne d'âge__ des femmes et celui des hommes

### Etape 2) Les survivants

Vous devez à présent calculer les données suivantes :

- Le __nombre total__ de femmes qui ont survécu et celui d'hommes
- Le __nombre total__ de femmes qui n'ont pas survécu et celui d'hommes
- Le __nombre total__ de survivants
- Le __nombre total__ de morts

### Etape 3) Les plus jeunes et le plus âgés

Vous devez à présent calculer les données suivantes :

- Le/s plus jeune/s et le plus âgé/s des personnes __qui ont survécu__
- Le/s plus jeune/s et le plus âgé/s des personnes __qui n'ont pas survécu__