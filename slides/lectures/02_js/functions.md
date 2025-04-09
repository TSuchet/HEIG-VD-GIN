---
level : 1
---

<div class="title"><h2>Les fonctions</h2></div>

---
level : 2
---
# JavaScript
Les fonctions

Les fonctions se déclarent de la manière suivante

```js
function add(a,b,c){    // Déclare la fonction "add", disponible dans le contexte courant
    return a + b + c;
}

const result = add(4,6,8); // result = 18
console.log(typeof add); // Affiche "function"
```

En Javascript les fonctions sont des objets comme les autres, il est possible de les assigner à des variables :

```js
const maFonction = function foo(a, b) { // Déclare une fonction "foo" assignée à la variable "maFonction"
    return a * b;
}
console.log(maFonction(3,4)) // Affiche 12
console.log(foo(3,4)) // ERREUR : foo n'est pas définit
```
Dans cet exemple, on a nommé notre fonction "foo". Ce nom est inutile car notre fonction est stockée dans "maFonction".

<div class="handout_notes">
Les fonctions en JavScript se déclarent avec une syntaxe similaire au C/C++. Dans le premier exemple on déclare une fonction "add" qui prends 3 paramètres. Le corps de la fonction retourne l'addition des trois paramètres.

Comme dans beaucoup de languages, l'instruction "return" retourne la valeur indiquée juste après et met fin à l'execution de la fonction.

En JavaScript les fonctions sont considérées comme des objets, qui peuvent donc être assignés à des variables. Il est possible de créer des tableaux de fonctions, des objets contenant des fonctions, etc.
Quand une fonction est assignée à une variable, elle n'est pas disponible dans le contexte actuel. Elle est simplement "stockée" dans la variable
</div>


---
level : 2
---
# JavaScript
Les fonctions

Stocker des fonctions dans des variables est très courant en JavaScript. Il existe une syntaxe alternative sans donner de nom à une fonction. On appelle cela une fonction anonyme.

```js
const operation1 = function nom_inutile(a,b){ return 1 + a * b } // Syntaxe classique
const operation2 = function (a,b){ return 1 + a * b } // Fonction anonyme
```

Les fonctions anonymes sont très utilisées en JavaScript, il existe une notation alternative, plus légère

```js
const operation3 = (a,b) => { return 1 + a * b;} // Syntaxe plus légère, avec une fonction anonyme
```

Si la fonction n'est composée que d'un ```return``` (comme c'est le cas ici), il est même possible de l'enlever ainsi que les accolades.

```js
const operation4 = (a,b) => 1 + a * b; // Dans ce cas, on peut omettre les accolades et le return
```

Toutes les notations de cette slides sont équivalentes

<div class="handout_notes">
On le verra plus loins, mais les fonctions et leur gestion est au coeur du JavaScript. Il est extrêmement commun d'avoir des fonctions dans des objets, en tant que paramètres d'autres fonctions, etc.
</div>

---
level : 2
---
# JavaScript
Les fonctions

Exemple où une fonction est passée en paramètre d'une fonction :
```js
function apply_to_table(table, func){       // Le paramètre func est une fonction appliquée au tableau
    for(let i=0; i<table.length; i++){      // On itère pour chaque élément du tableau
        table[i] = func(table[i]);          // Appel de la fonction avec l'élément du tableau en paramètre
    }
    return table;
}
console.log(apply_to_table([2, 4, 6], (x) => 3*x+1)); // Affiche [7, 13, 19]
```

<div class="handout_notes">
Cet exemple illustre la puissance des fonctions en JavaScript : elles peuvent être passées en tant que valeur n'importe où.
Du point de vue de JavaScript, les fonctions sont des objets, qui ont la particularité de contenir du code pouvant être executé.
</div>
