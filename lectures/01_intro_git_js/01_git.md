<div class="title">
    <img src="/git.svg">
</div>

---
level : 2
---

# git
<div></div>
<p>
Git est un logiciel de gestion de version (VCS). <br>
Il apporte les fonctionnalités suivantes lorsqu'un groupe travaille sur un même projet :
</p>

1. Synchroniser le travail entre les personnes qui programment
2. Enregistrer l'évolution du code au cours du temps
3. Stocker le code en lieu sûr

Git stocke ses données dans le répertoire de votre projet, dans le dossier *.git*, de manière indépendante pour chaque projet.   
Git se contrôle par ligne de commande, le contenu de *.git* n'est jamais modifié manuellement.
<br><br>

Références :

- Site officiel : https://git-scm.com/
- Téléchargement : https://git-scm.com/downloads
- Livre : https://git-scm.com/book/en/v2

---
level : 2
---

# git
Les commits

La notion fondamentale dans git est le *commit*.  
Il s'agit d'un instantané de votre projet, un "point de sauvegarde" qui enregistre son état.   
Git permet de revenir, de comparer, de mélanger différents commits.   
Ce qui se passe entre les commit n'est pas sauvegardé.

<br><br>

<img src="/git/git01.svg" width="80%">


---
level : 2
---
# git
Les commits

Dans un projet, pour indiquer à git qu'un fichier doit être *tracké* (pris en compte), utiliser la commande :
```
git add <chemin_vers_le_fichier>
```

Un commit est fait avec la commande :
```
git commit -am "Message"
```

Git créé alors un nouveau commit   
- L'option *-a* prends tous les fichiers trackés modifiés   
- L'option *-m* indique le message du commit. Il s'agit d'un texte décrivant ce qui a été modifié dans ce commit.   

Si l'option *-m* n'est pas précisée, git ouvrira un éditeur de texte pour entrer le message de commit

---
level : 2
---
# git
Le clonage

Pour travailler sur un projet existant, il faut d'abord le copier en local sur sa machine. On appelle cela le *clonage*.
La commande est :
```
git clone <url_du_projet_distant>
```

Git créé alors un dossier contenant tout le projet.

Le projets sont stockés dans un dépôt (*repository*) distant. Il existe plusieurs fournisseurs de stockage : GitHub, GitLab, ou des stockages auto-hébergés tels que Gitea.

<p style="display:flex;justify-content:center;">
<img src="/git/git03.png" width="60%">
</p>

---
level : 2
---
# git
Les commits

Le workflow est donc le suivant :

<br><br>

<p style="display:flex;justify-content:center;">
<img src="/git/git02.svg" width="80%">
</p>

---
level : 2
---
# git
Push & Pull

Après plusieurs commits, il est possible d'envoyer (*push*) les changements au repository :
```
git push
```
Cela enverra tous les commits sur le repository. Ce qui n'a pas été commit ne sera pas pris en compte.

<br><br>

Pour récupérer (*pull*) la dernière version du code en ligne, si celui-ci a été modifié par quelqu'un d'autre:
```
git pull
```


<textBubble type="info">
Vous devez d'abord commit vos changements locaux avant un pull
</textBubble>

---
level : 2
---
# git
clone & commit & push & pull

Le workflow est donc le suivant :

<br><br>

<p style="display:flex;justify-content:center;">
<img src="/git/git04.svg" width="80%">
</p>



---
level : 2
---
# git
En groupe

<br><br>

<p style="display:flex;justify-content:center;">
<img src="/git/git05.svg" width="100%">
</p>

---
level : 2
---
# git
Les conflits

<style>
    .shiki span{
        color:#FF0000 !important;
    }
</style>

Supposons :
1. Alice et Bob clonent leur projet, chacun de son côté
2. Alice écrit ```div{ color:blue; }```, puis fait un commit
3. Bob écrit ```div{ color:green; }```, puis fait un commit
4. Bob push son code avec ```git push```
5. Alice push son code avec ```git push```

Que se passe-t-il chez Alice ?

```
! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/...'
```

Alice ne peux pas push, car elle ne possède pas la dernière version du code


<div class="handout_notes">
Au moment d'executer le point 5, git effectue un push.
Mais le code présent sur le repository est plus récent que le code que possède Alice (car le code du repository contient le commit de Bob).
Git ne va jamais écraser un changement, ce serait beaucoup trop dangereux, git refuse alors de faire le push.
En pratique git indique toujours dans le message d'erreur ce qu'il est conseillé de faire. Voir slide suivante...
</div>


---
level : 2
---
# git
Les conflits

La solution : Alice doit d'abord faire un ```git pull``` pour récupérer la dernière version du code.
A ce moment, git va mélanger (*merge*) les deux versions du code, celle d'Alice et celle de Bob.

Deux cas peuvent se produire :

1. Les modification ne sont pas contradictoires, git parvient à faire automatiquement le merge

    - Alice possède alors une version du code mélangée
    - Il lui suffit de faire un ```git commit``` et un ```git push``` pour push sa nouvelle version.


---
level : 2
---
# git
Les conflits

<style>
pre{font-size:12px;}
</style>

La solution : Alice doit d'abord faire un ```git pull``` pour récupérer la dernière version du code.
A ce moment, git va mélanger (merge) les deux versions du code, celle d'Alice et celle de Bob.

Deux cas peuvent se produire :

2. Il y a conflit

<table>
    <tr>
        <td>
            Lors du pull Alice recevra un message disant :
        </td>
        <td>
            <pre>
Auto-merging style.css
CONFLICT (content): Merge conflict in style.css
Automatic merge failed; fix conflicts and then commit the result.
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            Git indique les endroit de conflits sous la forme :
        </td>
        <td>
            <pre>
 <<<<<<< HEAD
 div{ color:blue; }
 =======
 div{ color: green; }
 >>>>>>> b6eeeaef7d4c17e8b7ad2b90968e2d17720ba319
            </pre>
        </td>
    </tr>
</table>

Alice devra alors résoudre le conflits manuellement, puis ```git commit```et ```git push```

<div class="handout_notes">
Git indique les conflit en commençant par la version distante du code ("incomming change") et ensuite la version locale du code ("current change").
HEAD indique quelle est la version distante. Dans ce cas il s'agit du tout dernier commit effectué dans le repository, appelé "HEAD".
"b6eeeaef7d4c17e8b7ad2b90968e2d17720ba319" indique le hash du commit. Chaque commit dans git possède un identifiant unique appelé son hash.
Ici il y a donc un conflit entre le HEAD et le commit b6eeeaef... 
</div>


---
level : 2
---
# git
Astuces

La commande ```git log``` permet de voir l'historique des commits
<br><br>

La commande ```git status``` permet de voir la liste des fichiers modifiés depuis le dernier commit
<br><br>

Si un fichier nommé ```.gitignore``` est placé à la racine d'un projet, les dossier et fichiers listés à l'intérieur ne seront jamais trackés. Cela est très pratique pour directement exclure des fichiers et des dossiers entiers qu'on ne souhaite pas synchroniser.
Il est possible d'utiliser des expressions génériques, par exemple ```*.txt``` empêchera tous les fichiers avec l'extension ```.txt``` d'être trackés.
<br><br>

<textBubble type="info">
Ce chapitre est une introduction à git, il existe de nombreuses autres fonctions qui n'ont pas été mentionnées
</textBubble>
