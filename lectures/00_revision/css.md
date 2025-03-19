---
level: 1
---

<div class="title">
    <h1>Le CSS</h1>
</div>


---
level: 2
---
# Le CSS
<br>
Le CSS (Cascading Style Sheet) est un language servant à associer du style aux balises HTML.

Le style en CSS s'écrit à l'aide de la propriété à définir, suivie de deux points et de la valeur à assigner. Toutes les lignes se terminent par des point-virgules.
```css
propriete:valeur;
```

Par exemple, la propriété ```color``` permet de définir la couleur du texte. Pour définir un texte en rouge, on écrira :

```css
color:red;
```

Toutes les propriétés nécessitent des valeurs avec des types particuliers, il peut s’agir de couleur (comme dans l'exemple ci-dessus), de taille, de temps, de valeur prédéfinies, etc

---
level: 2
---
# Le CSS
<br>
Le CSS peut s'écrire à 3 endroits différents.<br><br>

1. A même une balise, on dit alors qu'il est *inline* :

<table ><tbody><tr><td>

```html
<p style="color:red;">Texte contenu dans la balise</p>
```

</td><td>

<div class="block_reset">  
    <p style="color:red;">Texte contenu dans la balise</p>
</div>

</td></tr></tbody></table>


---
level: 2
---
# Le CSS
<br>
Le CSS peut s'écrire à 3 endroits différents.<br><br>

2. Dans la balise ```<head>```, à l'aide de la base ```<style>``` :

<table><tbody><tr><td>

```html
<!DOCTYPE html>                
<html lang="fr">              
    <head>                      
      <title>Titre</title>
      <style>
        p{
            color:red;
        }
      </style>    
    <body>
        <p>Texte contenu dans la balise</p>
    </body>
</html>
```

</td><td>

<div class="block_reset">  
    <p style="color:red;">Texte contenu dans la balise</p>
</div>

</td></tr></tbody></table>

---
level: 2
---
# Le CSS
<br>
Le CSS peut s'écrire à 3 endroits différents.<br><br>

3. Dans un (ou plusieurs) fichier séparé, importé dans le HTML avec la balise ```<link>```

<table><tbody><tr><td>
index.html
```html
<!DOCTYPE html>                
<html lang="fr">              
    <head>                      
      <title>Titre</title>
      <link rel="stylesheet" href="style.css">
    <body>
        <p>Texte contenu dans la balise</p>
    </body>
</html>
```
style.css
```css
p{
    color:red;
}
```

</td><td>

<div class="block_reset">  
    <p style="color:red;">Texte contenu dans la balise</p>
</div>

</td></tr></tbody></table>

---
level: 2
---

# Le CSS

- Autant que possible, il faut écrire le CSS dans un fichier séparé
    - Cela sépare la sémantique (HTML) du style (CSS)
    - Cela évite de nombreuses répétitions, et est plus facilement maintenable
    - Cela rend les fichiers HTML moins longs

- Les autres solutions ne sont utilisées que lorsque cela est nécessaire

---
level: 2
---
# Le CSS
Les sélecteurs

Quand le CSS n'est pas *inline*, il faut utiliser des **sélecteurs** pour indiquer à quels éléments HTML le style s'applique.

La syntaxe est :

```css
selecteur{
    propriete_1:valeur;
    propriete_2:valeur;
}
```

Exemple:

```css
p a{
    margin: 10px;
    font-size: 15pt;
    color: rgb(20, 200, 10);
    text-decoration: underline;
}
```

---
level: 2
---
# Le CSS
Les sélecteurs

On peut sélectionner :
- Toutes les balises d'un type avec son nom : ```balise {}```
- Toutes les balises d'une classe avec un point et le nom de la classe : ```.classe {}```
- Une balise portant un id spécifique avec un dièse et l'id : ```#id {}```
- Toutes les balises portant un attribut spécifique avec des crochets : ```input[type=number] {}```

On peut combiner des sélecteurs :
- Avec un espace pour indiquer un enfant : ```p a {}```
- Avec un ```>``` pour indiquer un enfant direct : ```p > a {}```
- Avec une virgule pour indiquer un sélecteur ou l'autre : ```p, a {}```
- Avec un ```+``` pour indiquer un élément directement après un autre : ```p + a {}```
- Avec un ```~``` pour indiquer un élément directement avant un autre : ```p ~ a {}```

---
level: 2
---
# Le CSS
Les sélecteurs -- Quelques exemples

```css {1|2|3|4|5|6|7|8|9|10|11|12|13}
p {}                    <-- Toutes les balises p
.maClasse {}            <-- Toutes les balises de classe maClasse
#monId {}               <-- Balise portant l'id monId
p.maClasse {}           <-- Toutes les balises p de classe maClasse
p a {}                  <-- Toutes les balises a contenues dans une balise p
p .maClasse {}          <-- Toutes les balises de classe maClasse contenues dans une balise p
p, a {}                 <-- Toutes les balises p et toutes les balises a
p, .maClasse {}         <-- Toutes les balises p et toutes les balises de classe maClasse
p > a {}                <-- Toutes les balises a directement contenues dans une balise p
p + div {}              <-- Toutes les balises div se trouvant juste après une balise p
p ~ div {}              <-- Toutes les balises div se trouvant juste avant une balise p
input[type="number"] {} <-- Toutes les balises input avec un attribut "type" valant "number"
.maClasse[src] {}       <-- Toutes les balises de classe maClasse possédant un attribut "src"
```
<v-click>
Touts ces sélecteurs sont chaînables :
```css
div p div.blabla .blibli > input[type="number"] {} 
```
</v-click>
<v-click>
```
Toutes les balises input avec un attribut "type" valant "number" directement contenues dans des balises de classe 
blibli contenues dans des balises div de classe blabla dans des paragraphes dans des balises div
```
</v-click>

---
level: 2
---
# Le CSS
Les couleurs

Les couleurs peuvent être exprimés de différentes manières :

<style>
    tr{
        border-bottom: 1px solid white;
    }
    td div{
        margin-top:10px;
        margin-bottom:10px;
        margin-left:25px;
    }
</style>

<table>
    <tr>
        <td>
            Noms de couleurs, selon liste normée    
        </td>
        <td>
            <div style="color:green;width:250px">color: green;</div> 
            <div style="color:MediumAquaMarine">color: MediumAquaMarine;</div>
        </td>
    </tr>
    <tr>
        <td>
            Code HTML, de forme #<span style="color:red;">RR</span><span style="color:green;">GG</span><span style="color:DodgerBlue;">BB</span> ou #<span style="color:red;">RR</span><span style="color:green;">GG</span><span style="color:DodgerBlue;">BB</span>AA, ou le rouge (RR), vert (GG), bleu (BB) et transparence (AA) sont des valeurs en hexadécimal, allant de 00 à FF.
        </td>
        <td>
            <div style="color:#FF0000;">color: #FF0000;</div>
            <div style="color:#CC11AADD;">color: #CC11AADD;</div>
        </td>
    </tr>
    <tr>
        <td>
            Valeurs rouge, vert, bleu entre 0 et 255 dans la fonction <code>rgb</code>. La fonction <code>rgba</code> prend un paramètre supplémentaire alpha, entre 0 et 1.
        </td>
        <td>
            <div style="color:rgb(255, 255, 255);">color: rgb(255, 255, 255);</div>
            <div style="color:rgba(26, 233, 226, 0.8);">color: rgba(26, 233, 226, 0.8);</div>
        </td>
    </tr>
    <tr>
        <td>
            Valeurs teinte (0 à 360), saturation (0% à 100%), clarté (0% à 100%) dans la fonction <code>hsl</code>. La fonction <code>hsla</code> prend également un paramètre alpha entre 0 et 1.
        </td>
        <td>
            <div style="color:hsl(50, 50%, 50%);">color: hsl(50, 50%, 50%);</div>
            <div style="color:hsla(340, 40%, 70%, 0.7);">color: hsla(340, 40%, 70%, 0.7);</div>
        </td>
    </tr>
</table>
s
<div class="handout_notes">
  Les codes couleurs HTML sont devenus un standard très utilisé aussi en dehors du web. On les trouve souvent dans les logiciels de dessin.<br><br>
  La notation HSL (teinte, saturation, clarté) peut sembler étrange, mais est très pratique pour créer des palettes de couleurs cohérentes avec différentes variations de la même teinte, ou au contraire différentes couleurs de même force.
</div>

---
level: 2
---
# Le CSS
Les unités

<style>
    td {
        min-width:60px;
    }
</style>

<table>
    <tr>
        <td colspan=2>
            <h3>Unités absolues</h3>
        </td>
    </tr>
    <tr>
        <td>cm</td>
        <td>centimètres</td>
        <td><code>width: 5cm;</code></td>
    </tr>
    <tr>
        <td>mm</td>
        <td>milimètres</td>
        <td><code>height: 5mm;</code></td>
    </tr>
    <tr>
        <td>pt</td>
        <td>points</td>
        <td><code>font-size: 15pt</code></td>
    </tr>
    <tr>
        <td>px</td>
        <td>pixels (dépend de la résolution)</td>
        <td><code>margin-top: 20px;</code></td>
    </tr>
    <tr>
        <td colspan=2>
            <br>
            <h3>Unités relatives</h3>
        </td>
    </tr>
    <tr>
        <td>em</td>
        <td>multiplicateur par rapport à la police de l'élément courant</td>
        <td><code>font-size: 1.5em;</code></td>
    </tr>
    <tr>
        <td>rem</td>
        <td>multiplicateur par rapport à la police de l'élément racine (balise html)</td>
        <td><code>font-size: 1.5rem;</code></td>
    </tr>
    <tr>
        <td>vh</td>
        <td>% de la hauteur de la fenêtre</td>
        <td><code>top: 50vh;</code></td>
    </tr>
    <tr>
        <td>vw</td>
        <td>% de la largeur de la fenêtre</td>
        <td><code>padding-left: 3vw;</code></td>
    </tr>
    <tr>
        <td>%</td>
        <td>% de la même propriété de l'élément parent</td>
        <td><code>width: 50%;</code></td>
    </tr>
</table>

---
level: 2
---
# Le CSS
Les propriétés -- Les boites

<style>
    .borderExample{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-right:25px;
    }
    .borderExample div{
        width:80px;
        height:50px;
        margin:5px;
        background-color:rgb(206, 91, 19);
        border:5px solid rgb(110, 185, 24);
        display:flex;
        justify-content:center;
        align-items:center;
    }
</style>

<img src="/css_box.svg" width="400px" style="position:absolute;top:20px;right:20px;z-index:10">
<br>

```css
margin-top:5px;         <-- Marge du haut
margin-right:6px;       <-- Marge droite
margin-bottom:7px;      <-- Marge du bas
margin-left:8px;        <-- Marge gauche
margin:5px 6px 7px 8px; <-- Raccourci, définissant les marges haut, droite, bas, gauche en une ligne
margin:5px;             <-- Raccourci, définissant toutes les marges à 5px
```

Pour le padding, remplacer ```margin``` par ```padding``` Par exemple : ```padding-bottom:5px```
<br><br><hr>

<table>
<tr>
<td>

```css
border-width: 2px;      <-- Largeur de la bordure
border-style: solid;    <-- Type de bordure, voir ci-contre    ---------->
border-color: red;      <-- Couleur de la bordure
border: 2px solid red;  <-- Raccourci
```

Ces propriétés existent aussi pour chaque direction :   
<code class="language-css">border-top-width: 3px;</code> ou ```border-left: 1px solid black;```
   
</td>
<td>
    <div class="borderExample">
        <div style="border-style:none;">none</div>
        <div style="border-style:solid;">solid</div>
        <div style="border-style:dashed;">dashed</div>
        <div style="border-style:dotted;">dotted</div>
        <div style="border-style:double;">double</div>
        <div style="border-style:groove;">groove</div>
        <div style="border-style:ridge;">ridge</div>
        <div style="border-style:inset;">inset</div>
        <div style="border-style:outset;">outset</div>
    </div>
</td>
</tr>
</table>

---
level: 2
---
# Le CSS
Les propriétés -- Le texte

Police d'écriture :

```css
font-family: Arial, Helvetica, serif; <-- Liste de polices à utiliser, par ordre de préférence, selon disponibilité
font-size: 15pt;                      <-- Taille de la police
font-style: italic;                   <-- Type de police : "normal", "italic" ou "oblique"
font-weight: bold;                    <-- Epaisseur de la police : "lighter", "light", "normal", "bold" ou "bolder"

font: 15px italic bold Arial, Helvetica, serif; <-- Raccourci pour toutes les propriétés ci-dessus
```

Formattage de texte :
```css
text-align: center;             <-- Alignement du texte dans la boite contenante, "left", "right", "center", "justify"
text-decoration: underline;     <-- Ligne additionelle, "none", "underline", "overline", "line-through"
text-orientation
text-shadow
text-transform
text-underline-offset
```

---
level: 2
---
# Le CSS
Les propriétés -- Les flexbox


---
level: 2
---
# Le CSS
Les propriétés -- Les grid