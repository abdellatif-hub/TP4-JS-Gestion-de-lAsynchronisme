#  TP – Manipulation des Fonctions Asynchrones en JavaScript

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/Status-Terminé-success)
![License](https://img.shields.io/badge/License-Educational-blue)

---

## 📚 Description

Ce TP a pour objectif de comprendre et maîtriser la programmation asynchrone en JavaScript à travers :

- setTimeout
- Les Callbacks
- Les Promises
- async / await
- La manipulation du DOM

Nous avons simulé un système de chargement de produits depuis un serveur distant avec un délai de 2 secondes.

---

## 🎯 Objectifs pédagogiques

✔ Comprendre le fonctionnement de l’asynchrone en JavaScript  
✔ Utiliser setTimeout  
✔ Créer et consommer une Promise  
✔ Utiliser async / await  
✔ Gérer les erreurs avec try / catch  
✔ Manipuler le DOM dynamiquement  

---

## 🏗️ Architecture du projet

```
TP4/
│
├── index.html
├── script.js
```

<img width="1954" height="852" alt="image" src="https://github.com/user-attachments/assets/efb5b2c3-79e5-4a84-87d8-c94ac07c022d" />

---



## ⚙️ Fonctionnement

1. L’utilisateur clique sur le bouton **"Charger les produits"**
2. Le message **"Chargement..."** s’affiche
3. Après 2 secondes :
   - Les produits s'affichent
   - Ou un message **"Erreur serveur"** apparaît (cas aléatoire)

---

##  Concepts utilisés

### 1 setTimeout


 ## code source: 
 <img width="2378" height="617" alt="image" src="https://github.com/user-attachments/assets/9ff27bc7-1385-4c05-a858-ce0f393ab533" />

## l'exécution : 

### Simulation d’un délai serveur de 2 secondes.
<img width="2452" height="959" alt="image" src="https://github.com/user-attachments/assets/c07e60ce-e31f-43ab-8ce0-c39a13220517" />

<img width="2464" height="832" alt="image" src="https://github.com/user-attachments/assets/4d9c566f-7949-4ea7-a67f-add5359fc505" />

---

### 2 Callback
Récupération des données via une fonction de rappel.
 ## code source:
 <img width="2323" height="748" alt="image" src="https://github.com/user-attachments/assets/34821837-febe-4a9f-8857-e7c8814933fc" />


## l'exécution : 
<img width="2462" height="807" alt="image" src="https://github.com/user-attachments/assets/144486fd-806f-4d25-b7ca-8b5eb191f4b8" />



---



### 3️ Promise
Utilisation de resolve() et reject().


---

### 4️ async / await
Écriture asynchrone plus lisible et moderne.

---

### 5️ Manipulation du DOM
Création dynamique d’éléments HTML pour afficher les produits.

---







## 📌 Interface initiale

> (Insérer ici la capture d’écran de la page avant clic)

![Interface Initiale](images/interface.png)

---

## 📌 Message de chargement

> (Insérer ici la capture avec "Chargement...")

![Chargement](images/loading.png)

---

## 📌 Affichage des produits

> (Insérer ici la capture avec les produits affichés)

![Produits](images/produits.png)

---

## 📌 Cas d’erreur

> (Insérer ici la capture avec "Erreur serveur")

![Erreur](images/erreur.png)

---

## 🧪 Exemple de résultat attendu




