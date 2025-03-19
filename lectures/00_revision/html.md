---
level: 1
---

<div class="title">
    <h1>Le HTML</h1>
</div>


---
level: 2
---

# Le HTML
Introduction

Le HTML (HyperText Markup Language) est un language fait de balises qui décrivent le contenu d'une page web.

Exemple d'un élément HTML composé de deux balises :

```html
<balise>        <-- Balise ouvrante 
    Contenu     <-- Contenu (peut à son tour être un élément)
</balise>       <-- Balise fermante (notez le '/')
```
<br>
<v-click>
Les balises peuvent contenir des attributs, certains avec une valeur :
```html
<balise attributNumeroUn="valeur1" attributSansValeur> Contenu </balise>
```
</v-click>
<br>
<v-click>
Certains éléments n'ont pas de contenu, ils sont alors composés d'une seule balise dite "auto-fermante" :
```html
<baliseAutoFermante>
```
</v-click>

<div class="handout_notes">
  Le HTML est fait d'éléments délimités par des balises. Les éléments sont contenus les uns dans les autres. Le HTML possède uniquement un rôle sémantique, qui décrit ce qui se trouve sur la page et à quoi cela correspond. En particulier, le HTML ne décrit pas comment quelque chose doit être affiché, il s'agit du rôle du CSS.<br>
  Par défaut, les navigateurs ont tous un style assignés aux éléments HTML. Ce style est plus ou moins identique d'un navigateur à l'autre, avec de légères différences.<br><br>
  Les élément HTML sont indiqués par une balise ouvrant et une balise fermante. Le contenu de l'élément se trouve entre ces balises.<br>
  La balise ouvrante peut avoir des paramètres, que l'on nomme attributs, ils s'écrivent à l'intérieur de la balise ouvrante. Chaque balise possède une liste d'attributs possibles qui sont reconnus en HTML. Un attribut peut avoir une valeur assignée, ou simplement exister sans valeur.<br>
  Certains éléments n'ont pas de contenu. C'est le cas par exemple de la balise qui indique un retour à la ligne, rien ne peut être mis "dans un retour à la ligne". L'élément HTML ne possède alors qu'une balise ouvrante, sans contenu ne balise fermante. On dit que ces balise sont "auto-fermantes".
</div>

---
level: 2
---

# Le HTML
Page HTML minimale

```html
<!DOCTYPE html>                 <-- En-tête, indique un document HTML5
<html lang="fr">                <-- Balise racine, contient l'ensemble de la page, attribut langue en français
    <head>                      <-- Métadonnées
      <title>Titre</title>      <-- Titre, généralement affiché dans l'onglet du navigateur
    </head>
    <body>                      <-- Corps de la page, contient tous les éléments présents sur la page
    </body>
</html>
```
<br>

- La balise ```<html>``` doit être la racine de tout élément
- Il ne doit y avoir qu'une balise ```<head>``` et ```<body>```
- L'indentation n'est pas prise en compte lors du rendu
- Votre navigateur essayera toujours de faire le rendu d'une page *au mieux*, même si elle est invalide
  - Cela est parfois le source d'erreurs de rendu étranges, pensez toujours à vérifier votre HTML !

<div class="handout_notes">
  Voici la page HTML valide la plus petite possible. Elle contient <br>
  &nbsp - une ligne < !DOCTYPE >, qui ne fait que signaler que ce document est du HTML 5. Elle ne fait pas vraiment partie de la structure de la page.<br>
  &nbsp - la balise < html >, qui doit contenir tout le reste de la page. Son attribut "lang" permet d'indiquer la langue du document.<br>
  &nbsp - la balise < html > contient toujours deux balises : < head > et < body > <br>
  &nbsp - la balise < head > contient des informations sur la page elle-même, mais pas son contenu. Par exemple son titre, son auteur, sa date, des liens vers des styles et des scripts, etc. <br>
  &nbsp - la balise < body > contient toutes les balises présentes dans le corps de la page, qui seront présentes sur la page affichée à l'écran
  <br><br>
  Quand le navigateur effectue le rendu d'une page, il supprime tous les espaces (hors texte), retour à la ligne et tabulations. Cela permet de formatter le code HTML sans impacter le rendu. Il existe des balises et symboles particulier pour ajouter manuellement ces espaces.<br>
  Lors du rendu, la navigateur corrigera les erreurs de HTML autant que possible. Il ajouter par exemples les balises manquantes pour corriger la hiérarchie. C'est à double tranchant, car cela peut provoquer des pages au rendu inétendu car incorrectes.
</div>


---
level: 2
layout: image
image: /html_hierarchy.svg
backgroundSize: 90%
---

<div class="handout_notes">
  Un code HTML peut être vu comme un graph, dont la racine est toujours le balise < html > et dont les deux premiers niveaux (balises html, head et body) ne changent jamais. <br><br>
  En réalité, au moment de faire le rendu, le navigateur convertira le code HTML en un tel graph. Cela permet de créer des algorithmes très efficaces pour rendre un grand nombre de balises. Les pages web modernes pouvant contenir plusieurs milliers de balises.
</div>

---
level: 2
---


# Le HTML
Quelques balises

<table><tbody><tr><td>

```html      
<h1>Titre de niveau 1</h1>
<h2>Titre de niveau 2</h2>
<h3>Titre de niveau 3</h3>
<h4>Titre de niveau 4</h4>
<h5>Titre de niveau 5</h5>
<h6>Titre de niveau 6</h6>
```

</td><td>

<div class="block_reset">                     
  <h1>Titre de niveau 1</h1>
  <h2>Titre de niveau 2</h2>
  <h3>Titre de niveau 3</h3>
  <h4>Titre de niveau 4</h4>
  <h5>Titre de niveau 5</h5>
  <h6>Titre de niveau 6</h6>
</div>

</td></tr></tbody></table>

- Les balises ```<h1>``` à ```<h6>``` indiquent des titres de niveau 1 à 6

<div class="handout_notes">
  Un exemple simple de balises sont les titres, indiqués par les balises < h1 > à < h6 >. A noter que la taille de la police est le style par défaut du navigateur, à aucun moment nous n'avons définit à quoi devait ressembler ces titres.
</div>

---
level: 2
---

# Le HTML
Quelques balises

<style>
  hr{
    border-color:black;
  }
</style>

<table><tbody><tr><td>

```html                  
<div>
  <p> Paragraphe contenant un texte d'une certaine 
      longeur. Un paragraphe peut contenir 
      <a href="https://heig-vd.ch/">des liens</a>.
  </p>
  <hr>
  <p> Les retour à la ligne <br> dans le code 
      sont ignorés, <br> il peuvent être 
      faits <br> avec la balise < br >
  </p>
</div>
```

</td><td>

<div class="block_reset">            
  <div>
    <p> 
        Paragraphe contenant un texte d'une certaine 
        longeur. Un paragraphe peut contenir 
        <a href="https://heig-vd.ch/">des liens</a>.
    </p>
    <hr>
    <p>
        Les retour à la ligne <br> dans le code 
        sont ignorés, <br> il peuvent être 
        faits <br> avec la balise < br >
    </p>
  </div>
</div>

</td></tr></tbody></table>

<v-click>

- La balise ```<div>``` sert de contenant, de "boite" pour contenir d'autres éléments. Elle n'ajoute rien à la page
- La balise ```<p>``` indique un paragraphe
- La balise ```<a>``` indique un lien hypertexte via son attribut *href*
- La balise ```<br>``` indique un retour à la ligne
- La balise ```<hr>``` indique une ligne horizontale

</v-click>

<div class="handout_notes">
  Un lien dans la balise < a > peut être absolu ou relatif.<br>
  La balise < br > signifie "line BReak"<br>
  Même si les espaces et les retour à la ligne dans le HTML sont ignorés, il faut toujours garder son code propre et organisé.
</div>

---
level: 2
---
# Le HTML
Quelques balises

<table><tbody><tr><td>

```html               
<img src="https://heig-vd.ch/images/heig-vd-logo.gif" width="120px" alt="HEIG-VD Logo">
<ul>
    <li>Element 1</li>
    <li>Element 2</li>
</ul>
<ol>
    <li>Element 1</li>
    <li>Element 2</li>
</ol>
```

</td><td>


<div class="block_reset">            
  <img src="https://heig-vd.ch/images/heig-vd-logo.gif" width="120px" alt="HEIG-VD Logo">
  <ul>
    <li>Element 1</li>
    <li>Element 2</li>
  </ul>
  <ol>
    <li>Element 1</li>
    <li>Element 2</li>
  </ol>
</div>


</td></tr></tbody></table>

<v-click>

- La balise ```<img>``` indique une image, chargée à partir de sa source *src*
- Les balises ```<ol>``` ou ```<ul>``` indiquent une liste ordrée *"ordered list"*" ou non-ordrée *"unordered list"*
    - Les éléments d'une liste sont indiqués par une balise ```<li>```, *"list item"*

</v-click>

<div class="handout_notes">
  La source d'une image peut être une URL absolue (comme dans l'exemple) ou relative. Les formats classiques JPG, PNG, GIF, SVG sont supportés ainsi que d'autres plus performants tels que AVIF ou WebP.
  L'attribut *alt* permet d'indiquer une description de l'image, utile quand l'image ne peut pas être affichée (p.ex. lecteur à haute voix, accessibilité, analyse automatique, etc) 
</div>


---
level: 2
---
# Le HTML
Quelques balises -- Les tableaux


<table><tbody><tr><td>

```html                 
<table>
    <tr>
        <td>Element W</td>
        <td>Element X</td>
    </tr>
    <tr>
        <td>Element Y</td>
        <td>Element Z</td>
    </tr>
</table>
```

</td><td>


<div class="block_reset">            
  <table>
    <tr><td>Element W</td><td>Element X</td></tr>
    <tr><td>Element Y</td><td>Element Z</td></tr>
  </table>
</div>

</td></tr></tbody></table>

- Un tableau basique est fait à l'aide de la balise ```<table>```
- Cette balise contient des balises ```<tr>``` *"table row"* qui décrivent les lignes
- Ces balises ```<tr>``` contiennent une balise ```<td>``` *"table data"* par colonne du tableau


---
level: 2
---
# Le HTML
Quelques balises -- Les tableaux

<style>
.block_reset table *{
  text-align:center;
}
th{
  font-weight:bold;
  text-decoration:underline;
}
tfoot td{
  font-size:0.8rem;
}
</style>

<table><tr><td>

```html                 
<table>
    <thead>
        <tr><th>En-tête 1</th><th>En-tête 2</th></tr>
    </thead>
    <tbody>
        <tr><td>Cellule 1</td><td>Cellule 2</td></tr>
    </tbody>
    <tfoot>
        <tr><td>Pied 1</td><td>Pied 2</td></tr>
    </tfoot>
</table>
```

</td><td>

<div class="block_reset">            
  <table>
    <thead>
      <tr><th>En-tête 1</th><th>En-tête 2</th></tr>
    </thead>
    <tbody>
      <tr><td>Cellule 1</td><td>Cellule 2</td></tr>
    </tbody>
    <tfoot>
      <tr><td>Pied 1</td><td>Pied 2</td></tr>
    </tfoot>
  </table>
</div>

</td></tr></table>

- Un tableau peu contenir une section d'en-tête ```<thead>``` ou les ```<td>``` sont remplacés par ```<th>```
- Un tableau peu contenir une section finale ```<tfoot>```
- Dans ces cas, la section principale doit être indiquée par ```<tbody>```

---
level: 2
---
# Le HTML
Quelques balises -- Les formulaires

<style>
input, select{
  border: 1px solid black
}
</style>

<table><tr><td>

```html                    
<form>
    <label> Champ texte : <input> </label>
    <br><br>
    <label> Champ à options : 
        <select>
        <option>Option 1</option>
        <option>Option 2</option>
        </select>
    </label>
    <br><br>
    <label> Bouton d'envoi : <input type="submit" value="Envoyer"> </label>
</form>
```

</td><td>

<div class="block_reset">            
  <form>
    <label> Champ texte : <input> </label>
    <br><br>
    <label> Champ à options : 
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </label>
    <br><br>
    <label> Bouton d'envoi : <input type="submit" value="Envoyer"> </label>
  </form>
</div>

</td></tr></table>

- La balise ```<input>``` indique un champ, qui peut avoir plusieurs formes
- Un ```<input>``` de type *"submit"* indique le bouton pour envoyer le formulaire
- La balise ```<select>``` indique un choix multiple, où les choix sont indiqués par la balise ```<option>```
- La balise ```<label>``` permet d'ajouter une étiquette à la balise qu'elle contient

<div class="handout_notes">
  Cette section sur les formulaires ne présente que leur affichage sur la page.
  Pour créer un formulaire dont les données sont envoyées et reçues par un serveur distant, il faut une logique qui réceptionne ces données. Cela sort du cadre de ce cours.
</div>

---
level: 2
---
# Le HTML
Quelques balises -- Les formulaires


<style>
input, select{
  border: 1px solid black;
  padding:2px;
  margin-top:8px;
  width:120px;
}
</style>

<table><tr><td>

```html                  
<form>
    <label> Texte : <input type="text" value="abc"></label>
    <label> Checkbox : <input type="checkbox" checked></label>
    <label> Nombre : <input type="number" value="123"></label>
    <label> Mot de passe : <input type="password" value="abc"></label>
    <label> Range : <input type="range" value="25" min=10 max=100></label>
    <label> Date : <input type="date"></label>
    <label> Couleur : <input type="color"></label>
</form>
```

</td><td>


<div class="block_reset">            
  <form>
   <label> Texte : <input type="text" value="abc"></label><br>
    <label> Checkbox : <input type="checkbox" checked></label><br>
    <label> Nombre : <input type="number" value="123"></label><br>
    <label> Mot de passe : <input type="password" value="abc"></label><br>
    <label> Range : <input type="range" value="25" min=10 max=100></label><br>
    <label> Date : <input type="date"></label><br>
    <label> Couleur : <input type="color"></label><br>
  </form>
</div>

</td></tr></table>

- La balise ```<input>``` indique un champ, qui peut avoir plusieurs formes
  - Peu importe le type, un input aura toujours une valeur textuelle. Le type n'influence que l'interface
  - L'interface exacte est décidée par le navigateur, elle peut varier.
  - Il existe bien d'autres types d'input

---
level: 2
---
# Le HTML
Quelques balises -- Les sections

<style>
.block_reset{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-template-areas: 
    "header header header header"
    "nav nav nav nav"
    "aside section section section"
    "aside section section section"
    "aside article article article"
    "aside article article article"
    "footer footer footer footer";
}
.block_reset * {
    border: 1px solid black;
    padding:5px;
    display: flex;
    align-items:center;
    justify-content:center;
}
</style>

<table><tr><td>

```html  
<header>Header</header>     <-- Bandeau d'en-tête
<nav>Nav</nav>              <-- Menu
<section>Section</section>  <-- Section de la page
<article>Article</article>  <-- Section indépendante
<aside>Aside</aside>        <-- Élement à part
<footer>Footer</footer>     <-- Pied de page
```

</td><td>

<div class="block_reset">            
  <header style="grid-area:header;">Header</header>
  <nav style="grid-area:nav;">Nav</nav>
  <section style="grid-area:section;">Section</section>
  <article style="grid-area:article;">Article</article>
  <aside style="grid-area:aside;">Aside</aside>
  <footer style="grid-area:footer;">Footer</footer>
</div>

</td></tr></table>

- Ces balises ne sont que sémantiques, elles ne servent que de contenant
- Leur utilisation est facultative, mais conseillée
- La structure sur la droite est un exemple, il n'y a pas d'ordre ou de disposition imposée



---
level: 2
---
# Le HTML
Quelques attributs

Toutes les balises acceptent les attributs suivantes :

Identifiant unique *id*:
```html  
<img id="monImage" src="...">
```

Permet d'identifier un élément en particulier. Chaque *id* de la page doit être unique. Deux éléments ne doivent pas avoir le même *id*.

<hr>

Classes :
```html  
<img class="petiteImage" src="...">
```

Permet d'assigner une classe à un élément. Plusieurs éléments peuvent avoir la même classe. Pratique, par exemple, pour assigner le même style à tous les éléments d'une classe. 


