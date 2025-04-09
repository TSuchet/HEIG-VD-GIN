---
level : 1
---

<div class="title"><h2>Immuabilité</h2></div>

---
level : 2
---
# JavaScript
L'immuabilité

En JavaScript, il existe une différence fondamentale entre les types de base et les objets.

Qu'affiche ce code ?

```js
let a = 5;
let b = a;

b = 10;

console.log(a);
console.log(b);
```

<v-click>

Ce code affichera bien : <br>
`5` <br>
`10`
</v-click>

<div class="handout_notes">

Voici un exemple simple, rien de surprenant, mais il est intéressant d'examiner en détail ce que JavaScript fait lors de l'execution de ces lignes.
</div>

---
level : 2
---
# JavaScript
L'immuabilité

<style>
    img{width:180px;}
</style>

<img src="/immutable1.svg"><br>
<v-click>
<hr><br>
<img src="/immutable2.svg"><br>
</v-click>
<v-click>
<hr><br>
<img src="/immutable3.svg"><br>
</v-click>
<v-click>

En JavaScript les types de base sont *immuables*. Un assignment créera toujours une copie.
</v-click>


<div class="handout_notes">

Les types de base sont des variables qui *ne changent jamais de valeur*. On dit qu'elles sont immuables. Lors d'un assignment, JavaScript va copier la valeur dans un nouvel espace mémoire, indépendant du premier. Ainsi, modifier la variable `b`dans l'exemple précédent ne modifie pas `a`, car il s'agit de deux variables séparées.

En réalité, si vous assignez une nouvelle valeur à `a`, par exemple avec le code :
<pre>
let a = 5;
a = 10;
</pre>
La première ligne assignera à `a` une valeur 5 stockée en mémoire, puis la seconde ligne créera un autre espace mémoire et assignera ce dernier à `a`. La valeur d'origine `5`ne sera pas modifiée.
On peut le constater si `a`est une chaîne de caractères : 
<pre>
let a = "Bonjour";
a[0] = "A";
</pre>
Faire un `console.log(a)` affichera "Bonjour" et non "Aonjour", même si on a assigné "A" au premier caractère. Cet assignment n'a eu aucun effet car `a` est d'un type de base et donc immuable.
</div>

---
level : 2
---
# JavaScript
L'immuabilité

En JavaScript, il existe une différence fondamentale entre les types de bases et les autres objets.

Et qu'affiche ce code ?

```js
let a = [1, 2, 3];
let b = a;

b[1] = 10;

console.log(a);
console.log(b);
```

<v-click>

Ce code affichera : <br>
`[1, 10, 3]` <br>
`[1, 10, 3]`
</v-click>

<div class="handout_notes">

Ici on remarque que modifier `b` modifie également `a`. Le comportement est différent que celui du cas précédent, pourquoi?
</div>

---
level : 2
---
# JavaScript
L'immuabilité

<style>
    img{width:180px;}
</style>

<img src="/immutable4.svg"><br>
<v-click>
<hr><br>
<img src="/immutable5.svg"><br>
</v-click>
<v-click>
<hr><br>
<img src="/immutable6.svg"><br>
</v-click>
<v-click>

En JavaScript les types non basiques sont *mutables*. Un assignment créera une référence vers l'objet.
</v-click>
<div class="handout_notes">

Contrairement aux types de base, quand on assigne un objet, celui-ci n'est pas copié. La variable assignée pointera vers le même espace mémoire que la variable originale. Ainsi, changer l'une changera implicitement l'autre aussi.

Les objets sont *mutable*, il est possible de les changer directement sans créer de copie. C'est bien le comportement attendu : 
<pre>
let a = [1,2,3];
a[0] = 4;
</pre>
Dans ce cas un `console.log(a)` affichera bien `[4,2,3]`, car le tableau a été modifié.

Il devient clair pourquoi un code comme celui-ci est valide : 
<pre>
const a = [1,2,3];
a[0] = 10;
</pre>
Bien que `a` soit `const`, il est autorisé de modifier un élément du tableau, car `a` est toujours assigné au même objet. C'est l'objet lui-même que l'on change avec la seconde instruction. Le mot clé `const` ne garanti donc *pas* que l'objet assigné à une variable ne changera pas, il garanti que la variable ne pourra pas être assignée à autre chose.

</div>
