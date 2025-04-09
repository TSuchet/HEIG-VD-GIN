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

Toutes les notations de cette slide sont équivalentes

<div class="handout_notes">
On le verra plus loins, mais les fonctions et leur gestion est au coeur du JavaScript. Il est extrêmement commun d'avoir des fonctions dans des objets, ou en tant que paramètres d'autres fonctions, etc.
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

---
level : 2
---
# JavaScript
Les fonctions -- Paramètres par défaut

Les fonctions acceptent des paramètres par défaut. <br>

Exemple : 

```js
function add(a, b, c=0, d=0){
    return a + b + c + d;
}

console.log(add(2,3));      // Affiche 5
console.log(add(2,3,4));    // Affiche 9
console.log(add(2,3,4,5));  // Affiche 14
```

Les paramètres par défaut doivent toujours se trouver en dernière position `function add(a=0, b){}` est invalide

---
level : 2
---
# JavaScript
Les fonctions -- Immutabilité

L'immutabilité s'applique aussi dans le cas des fonctions, de la même manière que pour l'assignation.

```js {1-10|10-20}
function modify_number(num){    // Type de base en paramètre, il sera dupliqué durant l'execution
    num = 10;                   // Cette assignation modifie la copie local dans la fonction
    return num;
}

const num_1 = 1;
const num_2 = modify_number(num_1);
console.log(num_1);     // Retourne 1  : La valeur de base n'a pas été modifiée
console.log(num_2);     // Retourne 10 : Il s'agit de la valeur renvoyée par la fonction


function modify_table(table){   // Type composé en paramètre, ce sera une référence à l'objet de base
    table[1] = 10;              // Cette assignation va modifier le tableau original
    return table;
}

const table_1 = [1,2,3];
const table_2 = modify_table(table_1);
console.log(table_1);   // Retourne [10, 2, 3] : table_1 a été modifié par la fonction
console.log(table_2);   // Retourne [10, 2, 3] : il s'agit du même tableau que table_1
```

<div class="handout_notes">

Quand une fonction est appelée, au moment d'assigner la valeur à ses paramètres, elle se comporte comme l'opérateur `=`.
C'est-à-dire : <br>
- Les types de base sont immuable, et seront donc dupliqués
- Les objets (types composés) sont mutables, et la fonction s’exécutera *sur le même objet que passé en paramètre*

La fonction *modify_number* ci-dessus prend un nombre en paramètre, et lui assigne 10. Comme il s'agit d'un nombre, il sera copié au moment d'executer la fonction, cela ne modifiera pas le nombre d'origine, et la fonction retournera toujours 10.

La fonction *modify_table*, au contraire, prend un tableau en paramètre. Le tableau sur lequel va agir la fonction sera le tableau passé en paramètre : il n'y a pas de copie. La ligne `table[1] = 10` va donc modifier le tableau d'origine.
De plus, la ligne `return table` va renvoyer le même tableau que passé en paramètre.

Les variables `table_1` et `table_2` vont donc référencer le même tableau, et tout changement de l'une sera visible dans l'autre.
<br>
Les fonctions qui modifient leur objets d'entrée sans créer de copie sont souvent appelée *in-place*.
</div>


