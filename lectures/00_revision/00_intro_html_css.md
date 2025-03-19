---
theme: default
class: text-center
hideInToc: true
---

# SIG3

## Développement web -- Révision <br><br> HTML -- CSS -- JavaScript

<img src="/heig_vd.svg" class="absolute left-30px bottom-30px" width="150px">

<div class="handout_notes">
  Ce premier chapitre rappelle les bases du HTML, CSS et JavaScript. <br>
  Il reprends rapidement les concepts de zéro, mais va volontairement rapidement sur plusieurs aspects.
  Si vous n'avez jamais travaillé avec ces languages auparavant, il vous faudra sûrement suivre des tutoriels pas à pas. <br>
  N'hésitez pas à poser des questions et vous aiders des ressources externes qui sont mentionnées
</div>

---
hideInToc: true
---

# Programme 
<Toc minDepth="1" maxDepth="1" />

---
layout: image
image: /Web_request_1.svg
backgroundSize: 70%
---
# Transmission d'une page web

---
layout: image
image: /Web_request_2.svg
backgroundSize: 70%
level: 2
---

# Transmission d'une page web

<div class="handout_notes">
  Une page web est composée d'un ensemble de fichiers.
  Lors du chargement d'une page web, le client (le navigateur) effectue une requête vers le serveur. Ce dernier lui répond en lui envoyant un document HTML. Si ce document requiert des fichiers supplémentaires (CSS, JavaScript, images, etc) le client effectue alors une nouvelle requête pour chaque fichier.<br>
  Dès qu'un fichier est reçu, le navigateur analyse sont contenu est fait son rendu. <br>
  Un navigateur web rempli donc deux fonctions principales : Effectuer des requêtes de pages web, et faire leur rendu en respectant les standard.<br>
  Développer un site web à la main, c'est donc créer un ensemble de fichiers HTML / CSS / JavaScript qu'un navigateur pourra afficher. <br>
  Note : En pratique, les navigateurs peuvent également faire le rendu de fichiers locaux, stockés sur le disque du client.
</div>

---

# Les trois piliers du WEB

<style>
  img{
    height:120px;
    margin:auto;
  }
  td{
    text-align:center;
  }
  .code td{
    text-align:left;
    height:100px;
  }
</style>

<table><tbody>
<tr><td>HTML</td><td>CSS</td><td>JavaScript</td></tr>
<tr><td><img src="/html5.svg"></td><td><img src="/css3.svg"></td><td><img src="/js.svg"></td></tr>
<tr><td>Le contenu</td><td>Le style</td><td>La logique</td></tr>
<tr class="code">
  <td>
```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>Titre</title>
  </head>
  <body>
  </body>
</html>
```
  </td>
  <td>
```css
p {
    color: green;
    font-size: 20pt;
}
```
  </td>
  <td>
```js
function hello(){
  console.log("Hello!")
}
```
  </td>
</tr>
</tbody></table>

<div class="handout_notes">
  Une page web est constituée principalement de trois languages : <br>
  - Le HTML, qui décrit à l'aide de balises ce qui se trouve sur la page, son contenu <br>
  - Le CSS, qui décrit le style des éléments (couleur, position, taille, etc) <br>
  - Le JavaScript, qui rend la page interactive à l'aide de scripts
</div>

---
src: ./pages/html.md
---

---
src: ./pages/css.md
---

---

# Ressources
<span></span>

**W3Schools**, référence simple avec tutoriels
- HTML : https://www.w3schools.com/html
- CSS : https://www.w3schools.com/css
- JavaScript : https://www.w3schools.com/js

**MDN**, référence complète et très détaillée, par la Mozilla Foundation
- HTML : https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS : https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript : https://developer.mozilla.org/en-US/docs/Web/JavaScript

Référence pour les **Flexbox CSS** : https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Référence pour les **Grid CSS** : https://css-tricks.com/snippets/css/complete-guide-grid/

Référence pour la **compatibilité des navigateurs** : https://caniuse.com/

