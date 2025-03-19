---
---

<div class="title">
    <img src="https://nodejs.org/static/logos/nodejsLight.svg" width="400px">
</div>

---
level : 2
---
# Node.js

- Node.js est un environnement d'execution JavaScript

- De même que Python, il vous permet d'executer du JavaScript sur votre machine et d'en faire des applications

- Node.js permet, entre autres, de faire
    - Des serveurs web
    - Des applications web
    - Des applications desktop et en ligne de commande
    - Des scripts
    - etc.

- De même que Python possède son gestionnaire de paquets *pip*, Node.js possède *npm* (*node packet manager*)

<div class="handout_notes">
Node.js est donc une application qui interprète du JavaScript et le transforme en instructions pour votre machine. 

Il existe certaines variations entre le JavaScript de Node et celui de votre navigateur. Par exemple Node ne possède pas de DOM, car le script ne s'execute pas sur le page web. Node vient également avec un ensemble de fonctions permettant d’interagir avec votre système (créer des fichiers, gérer des processus, etc), ce qui ne fait pas de sens pour une page web.

Il existe d'autres environnements d'executions et d'autres gestionnaires de packets que Node et npm. Nous utilisons ceux-ci car ce sont les plus répandus et les plus standards. Les alternatives ont souvent des fonctions très similaires.
</div>


---
---

<div class="title">
    <img src="https://vite.dev/logo.svg" width="300px">
</div>

---
level : 2
---
# Vite

- Vite est un *bundler* fonctionnant avec Node.js (entre autres)
- Un bundler prend un ensemble de fichiers JavaScript, HTML, CSS, images, etc et produit une application web rapide et minimale
- Les avantages sont :
    - **Gestion moderne des dépendances** : plus besoin d'avoir des fichiers JS inclus dans tous les sens au milieu du HTML. Les dépendances sont installées avec npm et inclues avec du JavaScript moderne
    - **Résultat minimal** : Vite simplifie le code en n'incluant que les parties de code vraiment nécessaires et minimise le code
    - **Support d'outils d'automation et d'integration continue** (mise en forme automatique, tests, script lors d'un commit, etc)
    - **Ajout facile d'autres technologies** (Vue, TypeScript, SCSS, Svelte, React, etc)

Ce bundler est tellement utilisé que certaines librairies en font leur moyen de diffusion principal. C'est le cas d'OpenLayers.