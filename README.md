## TITRE DU PROJET

ÉVALUATION D’ENTRAÎNEMENT :
Dynamiser vos sites web avec Javascript

## Expected deliverable

Création d’un petit jeu sur navigateur web à l’aide du DOM.
En fin de prestation, le commanditaire doit recevoir les différents éléments suivants :

- Un jeu fonctionnel
- Une interface lisible qui correspond à la maquette fournie.
  Ceci implique plusieurs fonctionnalités globales :
  En front-desk (côté client) :
- La possibilité de créer une nouvelle partie
- La possibilité de retenir le score courant
- La possibilité de lancer le dé
- La possibilité d’avoir 2 joueurs

Règles :
Le jeu comprend 2 joueurs sur un seul et même écran.
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le
résultat d’un lancer est ajouté au ROUND.
Lors de son tour, le joueur peut décider à tout moment de:

- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
  tour de l’autre joueur.
- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
  Le premier joueur qui atteint les 100 points sur global gagne le jeu.

Modalités / Restrictions :

- Votre code sera structuré
- Le jeu devra être fonctionnel
- Les ressources seront disponibles dans un dossier images
  o La font sera Lato (google font) : https://fonts.google.com/
  specimen/Lato
  o Le Framework CSS de votre choix

Barème et critères d’évaluation

1. Connaître et utiliser un environnement de développement (2 points).
2. Écrire un algorithme et l’intégrer dans une page web avec des scripts événementiels et avec un langage
   de script côté client (5 points).
3. Utilisation des normes ECMAScript (JS) et du DOM (5 points).
4. Connaissance et utilisation d’un framework de présentation de type adaptatif (5 points).
5. Déploiement de la réalisation en ligne (3 points)

## Deployment

https://dulcet-buttercream-61b0dc.netlify.app

## 🚀 the project

https://github.com/JohanCode2180100/DiceGameStudi

## Installation

```bash
  Si problème avec le site netlify, vous pouvez cloner le depot, ouvrir le dossier avec votre editeur de code, faire un clic droit sur le fichier index.html et envoyer sur votre live serveur.
```

## Roadmap

1. Réflection sur les outils à utiliser :
   html/css
   js
   et le framework IONIC

2. Lecture de la doc ionic

   - idée retenue : découpage de la maquette et creation du html en retenant le RESPONSIVE GRID de IONIC, création du responsive
   - prise en compte des restrictions
     - font (LATO)
     - ressources dans dossier image
     - icones sur ionic

3. création de l'algorythme sur une feuille A4.
4. Création du fichier js

   - Ajout d'un module pour la récupération du DOM
   - respect de la normalisation JS, utilisation des littéraux de gabarits, fonctions fléchées, absence de VAR, utilisation du addEventListener.

5. Deux branches sur github
   - 1 branche main
   - 1 branche dev va permettre de continuer à ameliorer ce projet

## Optimizations

Après plusieurs essais, mise en evidence d'un problème de compréhension du joueur sur le fait que la différence entre deux tirages d'un même nombre n'est pas visible. J'ai donc ajouté un setInterval de 0.5s pour afficher un dé vide après le tirage.

- creation d'un dé vide pour cette fonction

## Authors

    JOHAN SAINTYVES

- [github](https://github.com/JohanCode2180100)
