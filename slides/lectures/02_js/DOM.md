---
level : 1
---

<div class="title"><h2>Le DOM</h2></div>

---
level : 2
---
# JavaScript
Le DOM

Comment lire et écrire le contenu de notre document HTML avec du JavaScript ? 
Grâce au Document Object Model (DOM) !

Le DOM est l'interface permettant d'accéder à la page web. Il se caractérise par l'ajout de deux objets, accessibles partout dans le code : `document` et `window`.

Pour récupérer des éléments HTML : 

```js
const e1 = document.getElementById('monId');            // Retourne l'élément qui porte l'id "monId"
const e2 = document.getElementsByClassName('maClasse'); // Retourne un tableau avec les éléments de classe "maClasse"
const e3 = document.querySelector('p .large');          // Retourne le premier élément correspondant au sélecteur CSS        
```

<div class="handout_notes">
Jusqu'ici, nous n'avons utilisé que la console pour interagir avec JavaScript. Évidemment cela n'est pas très pratique et la raison principale d'executer du JavaScript dans un navigateur est de pouvoir interagir avec la page web et son contenu.
<br><br>

Le DOM est l'interface que met à disposition le navigateur pour lire / écrire du contenu sur la page. <br>
L'objet `document` offre des fonctions pour interagir avec la page web elle-même et son contenu. <br>
L'objet `window` offre des fonctions pour interagir avec la fenêtre du navigateur. Par exemple, récupérer la résolution de la fenêtre.
</div>

---
level : 2
---
# JavaScript
Le DOM

Une fois un élément récupéré, toutes ses propriétés sont modifiables

```js
const elem = document.querySelector('p');            // Sélectionne le premier paragraphe de la page
elem.textContent = "Nouveau contenu du paragraphe";  // Assigne un nouveau texte au paragraphe
elem.style.fontSize = "20pt";                        // Assigne une nouvelle taille de police
```

Référence du DOM et ses fonctions : https://www.w3schools.com/js/js_htmldom.asp

Il est aussi possible d'attacher des événements aux éléments :

```js
const elem = document.getElementById('MyId');                   // Récupère l'élément à modifier
elem.addEventListener("click", ()=>elem.textContent="Clic!");   // Au clic, modifie le texte de l'élément à "Clic!"
```

<br>
```js
// document.body retourne toujours la balise body de la page actuelle
// Quand la page est complètement chargée ("load"), change le texte de l'élément info en "Loaded!"
document.body.addEventListener("load", ()=>document.getElementById('info').textContent="Loaded!");
```

<div class="handout_notes">

La fonction `addEventListener` permet d'attacher une action à un événement.<br>
Le premier paramètre est une chaîne de caractère qui décrit l'événement. <br>
Le second paramètre est l'action à executer quand l'événement survient. Cette action est une fonction, c'est un excellent exemple d'une fonction qui prend en paramètre une autre fonction à executer plus tard.
</div>