<div class="title">
    <img src="/git.svg">
</div>

---
level : 2
---

# git
<div></div>
<p>
Dans ce cours, le code et les exercices seront diffusés via git. Git est un logiciel de gestion de version (VCS). <br>
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


<div class="handout_notes">
git est un incontournable du développement logiciel. C'est un programme open source utilisé partout dans le monde.

Nous allons voir dans ce chapitre un aperçu des fondamentaux. Il existe de nombreuses fonctions que nous n'allons pas aborder.

Il existe plusieurs alternatives à git (Perforce, Mercurial, etc) mais git est le plus généralement utilisé, particulièrement dans le monde open-source.

Git gère tous les types de données textuelles, pas seulement du code. Des livres, des documentations, des configurations, des notes, etc peuvent très bien être des projets gérés par git. 
Par exemple, ces slides sont un projet git stocké sur GitHub.
En revanche git n'est pas fait pour gérer des fichiers compressés ou binaires, car ces derniers changent beaucoup d'une version à une autre.
</div>



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

<div class="handout_notes">
Quand un commit est enregistré, git attribue un identifiant unique au commit et enregistre sa différence par rapport au commit précédent.

Tout est placé de manière transparente dans le dossier .git de votre projet. 
</div>

---
level : 2
---
# git
Les commits

Dans un projet, pour indiquer à git qu'un fichier doit être *tracké* (pris en compte), la commande est :
```bash
git add <chemin_vers_le_fichier>
```

Pour faire un commit, la commande est :
```bash
git commit -am "Message"
```

Git créé alors un nouveau commit   
- L'option *-a* indique de prendre tous les fichiers trackés modifiés   
- L'option *-m* indique le message du commit. Il s'agit d'un texte décrivant ce qui a été modifié dans ce commit.   

Si l'option *-m* n'est pas précisée, git ouvrira un éditeur de texte pour entrer le message de commit

<div class="handout_notes">
Par défaut, git n'enregistre pas l'ensemble des fichiers. Il faut lui indiquer quels fichiers sont importants avec la commande <i>git add</i>
<br><br>

La commande *git status* permet de voir l'état actuel d'un projet. Elle indiquera les fichiers modifiés depuis le dernier commit, et s'ils sont trackés ou non.

Les messages de commit doivent être courts et le plus descriptif possible.<br>
Mauvaise exemple : "<i>J'ai modifié plusieurs fichiers de la configuration globale pour la prochaine mise à jour, et corrigé plusieurs bug divers mais pas très importants</i>" (C'est long et très peu précis)<br>
Bon exemple : "<i>Ajoute la couche bâtiments de OpenStreetMap</i>" (Court et précis)

Il est également possible de ne commit que certains fichiers modifiés, quand on ne précise pas l'option *-a*, mais ceci sort du cadre de ce cours.
</div>


---
level : 2
---
# git
Le clonage

Pour travailler sur un projet existant, il faut d'abord le copier en local sur sa machine. On appelle cela le *clonage*.
La commande est :
```bash
git clone <url_du_projet_distant>
```

Git créé alors un dossier contenant tout le projet.

Les projets sont stockés dans un dépôt (*repository*) distant. Il existe plusieurs fournisseurs de stockage : [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), ou des stockages auto-hébergés tels que [Gitea](https://about.gitea.com/).

<p style="display:flex;justify-content:center;">
<img src="/git/git03.png" width="60%">
</p>

<div class="handout_notes">

On confond souvent <i>git</i> et <i>GitHub</i>, mais GitHub n'est "que" un système de dépôt pour projets git. Le logiciel est bel et bien <b>git</b>.

Aujourd'hui les fournisseurs de stockage proposent de nombreuses options en plus du simple stockage. GitHub permet d'executer des actions sur le code (déploiements, compilations, etc), de faire des analyses de sécurité, de tenir une liste des tâches, et bien d'autres fonctions.

GitHub affichera, sous la liste des fichiers et dossiers, le contenu du fichier "README.md" du dossier courant. C'est particulièrement pratique pour créer une page d'accueil de votre projet.

</div>

---
level : 2
---
# git
Workflow de base

Le workflow est donc le suivant :

<br><br>

<p style="display:flex;justify-content:center;">
<img src="/git/git02.svg" width="80%">
</p>

<div class="handout_notes">
Pour travailler sur un projet, on procède généralement de la manière suivante :<br>
1. On clone un repository existant, contenant le code sur lequel on se base<br>
2. On y apporte des modifications <br>
3. On fait petit à petit des commits pour chaque modification apportée<br>

A noter que les commits sont pour le moment stockés en local sur la machine où le projet à été cloné.
Jusqu'ici il n'y a pas de synchronisation avec le repository.
</div>

---
level : 2
---
# git
Push & Pull

Après plusieurs commits, il est possible d'envoyer (*push*) les changements au repository distant:

```bash
git push
```

Cela enverra tous les commits sur le repository distant. Ce qui n'a pas été commit ne sera pas pris en compte.
Pour faire un ```git push``` , il faut avoir le droit de push sur le repository distant.

<br><br>

Pour récupérer (*pull*) la dernière version du code en ligne, si celui-ci a été modifié par quelqu'un d'autre:

```bash
git pull
```


<textBubble type="info">
Faites toujours un commit de vos changements avant un pull
</textBubble>

<div class="handout_notes">
Il est important de toujours <i>commit</i> avant un <i>pull</i>, sinon git se retrouvera avec votre version du code non sauvegardée, et une nouvelle version venue du repository distant. Si les modifications se chevauchent, Git ne saura pas quoi faire et refusera de <i>pull</i>.

Git est bien conçu et n'effacera/n'écrasera <b>jamais</b> de travail non sauvegardé, sauf lors de l'utilisation de commandes très explicites. Il en va de même pour les commits. Une fois un code commité, git n'effacera jamais le commit, sauf lors de l'utilisation de commandes très particulières.
</div>

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

<div class="handout_notes">
On retrouve ici les 4 commandes les plus utilisées avec git : <br>
1. git clone <br>
2. git commit <br>
3. git push <br>
4. git pull
</div>


---
level : 2
---
# git
En groupe

<br><br>

<p style="display:flex;justify-content:center;">
<img src="/git/git05.svg" width="100%">
</p>

<div class="handout_notes">
Les personnes travaillant sur un projet on chacune un clone du code et de l’historique des commits. Cela permet à tout le monde de travailler de son côté, le repository servant de point de synchronisation.

A ce stade, concernant les trois problèmes évoqués au début du cours : 
- Stocker le code en lieu sûr : Il s'agit du repository distant, problème résolu
- Avoir un historique du code : Il s'agit des commits : problème résolu
- Travailler à plusieurs sur le même code : On comprends le principe, mais que se passe-t-il si la Personne 1 et la Personne 2 font des modifications chacune de leur côté en même temps ?
</div>

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

<v-click>
```
! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/...'
```

Alice ne peut pas push, car elle ne possède pas la dernière version du code
</v-click>

<div class="handout_notes">
Au moment d'executer le point 5, git effectue un push.
Mais le code présent sur le repository est plus récent que le code que possède Alice (car le code du repository contient le commit de Bob). <br>
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

1. Les modifications ne sont pas contradictoires, git parvient à faire automatiquement le merge

    - Alice possède alors une version du code mélangée
    - Il lui suffit de faire un ```git commit``` et un ```git push``` pour push sa nouvelle version.


<div class="handout_notes">
git travaille par différence entre les fichiers. Si deux fichiers différents ont été modifiés, alors les modifications de chacun seront fusionnées. Si le même fichier a été modifié, et qu'il s'agit de lignes différentes, là aussi il y a fusion.

En revanche, si la même ligne d'un même fichier a été modifiée, alors les modifications sont "contradictoires", et git ne sait pas quelle version choisir.
</div>

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
            Lors du pull Alice recevra le message :
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
            Les conflits sont indiqués sous la forme :
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

Alice devra alors résoudre les conflits manuellement, puis ```git commit```et ```git push```

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
Il est possible d'utiliser des expressions génériques. Par exemple ```*.txt``` empêchera tous les fichiers avec l'extension ```.txt``` d'être trackés.
<br><br>

<textBubble type="info">
Ce chapitre est une introduction à git, il existe de nombreuses autres fonctions qui n'ont pas été mentionnées et que vous découvriez au travers des exercices et de la pratique.
</textBubble>


---
level : 1
---

<div class="title"><h2>Git en pratique</h2></div>

---
level : 2
---
# git en pratique
Démarrer une ligne de commande git

Une fois git installé, sur Windows, vous avez deux solutions :

1. Clic droit dans l'explorateur Windows, puis "Show more options" et "Open Git Bash Here"
<table>
<tr>
<td><img src="/git_practical_0.png" width="150px"></td>
<td><img src="/git_practical_1.png" width="250px"></td>
</tr>
</table>
L'option "Open Git GUI here" ouvre l'interface utilisateur. Nous ne l'utiliserons pas dans ce cours.

2. Cherchez "git Bash" dans la liste de vos applications
<img src="/git_practical_2.png" width="350px">


---
level : 2
---
# git en pratique
Naviguer dans le terminal

Une fois le terminal ouvert, vous verrez son interface :

```bash
user@desktop MINGW64 /c
$
```

vous pouvez naviguer dans vos fichier à l'aide de la commande `cd`

```bash
user@desktop MINGW64 /c
$ cd C:/repertoire/de/votre/projet
```

le terminal vous affiche alors que vous vous trouvez dans un repository avec le `(main)` :

```bash
user@desktop MINGW64 /c/repertoire/de/votre/projet (main)
$ 
```

Vous pouvez alors utiliser toutes les commandes vues précédemment

<textBubble type="info">
Quand vous clonez un repository, il vous faudra d'abord vous déplacer à l'intérieur du dossier créé par git
</textBubble>


---
level : 2
---
# git en pratique
Git avec Visual Studio Code

Visual Studio Code (comme beaucoup d'éditeurs) intègre directement git s'il est installé sur votre machine.

Pour cela, démarrez VS Code, et ouvrez un projet avec le menu "File" -> "Open Folder"

Sur la barre à gauche, vous avez l'onglet "git"
<img src="/git_practical_3.png" width="300px">

Cet onglet affichera vos fichiers modifiés. Vous pouvez créer un commit en entrant un message et en cliquant sur "Commit". Le bouton devient alors "Push" qui vous permet de push vos modifications.

<div class="handout_notes">
Même si l'interface de VS Code est plus pratique que le terminal, il est nécessaire connaître les commandes et de savoir utiliser le terminal. Vous ne travaillerez pas toujours avec VS Code, et pour utiliser git correctement il faut comprendre ce que chacune des actions fait et pouvoir utiliser le terminal au cas-où. 

De plus, si vous utilisez une machine à distance (par exemple, un serveur fonctionne sur Linux), il y a rarement des interfaces graphiques et les lignes de commandes très pratiques.
</div>

---
level : 2
---
# git en pratique
Fork un repository

Un fork est une copie d'un repository distant qui ne vous appartient pas, vers votre compte en ligne. Cela vous permet de créer un repository à vous sur lequel vous pourrez push.

Pour fork un repository, il vous suffit d'aller sur la page GitHub du projet, ici https://github.com/Dolpic/HEIG-VD-GIN et de cliquer sur le bouton "fork" en haut à droite.
<img src="/git_practical_4.png" width="300px">
Sur la page suivante sélectionner votre compte, puis "Create fork". 
<img src="/git_practical_5.png" width="300px">
Vous arrivez ensuite sur un nouveau repository, identique à l'original, mais stocké sur votre compte.

---
level : 2
---
# git en pratique
Synchroniser un fork

Quand de nouveaux commits sont fait sur le repository d'origine, vous pouvez mettre à jour votre fork avec le bouton suivant, présent sur la page web de votre repository :
<img src="/git_practical_6.png" width="100px">