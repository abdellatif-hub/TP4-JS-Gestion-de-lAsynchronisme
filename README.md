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
 ## code source:
 
<img width="2198" height="740" alt="image" src="https://github.com/user-attachments/assets/36cd920b-91cd-4be0-b786-e13367a3cd6e" />
<img width="2310" height="352" alt="image" src="https://github.com/user-attachments/assets/5ba690be-ebeb-4d1d-b2ce-a3be8cf8bfc9" />

## l'exécution : 
<img width="2451" height="427" alt="image" src="https://github.com/user-attachments/assets/21a0cf19-cd87-4902-9391-90508f640261" />




---

### 4️ async / await

 ## code source:
Écriture asynchrone plus lisible et moderne.
<img width="2214" height="516" alt="image" src="https://github.com/user-attachments/assets/4543e7c5-6cc4-43cd-9777-71f74bdf8c11" />

## l'exécution : 
<img width="2376" height="689" alt="image" src="https://github.com/user-attachments/assets/25177a50-753d-418d-b2ea-af1a3ffc8c27" />



---

### 5️ Manipulation du DOM
Création dynamique d’éléments HTML pour afficher les produits.

 ## code source:
<img width="2446" height="844" alt="image" src="https://github.com/user-attachments/assets/6ee2af56-fc42-4f81-8e40-ec8ae1441e0d" />
## l'exécution : 

### Affichage du message "Chargement..." après le clic sur le bouton, montrant l’exécution du code asynchrone.

<img width="2559" height="1252" alt="image" src="https://github.com/user-attachments/assets/415a8065-048d-4d92-a7a5-5fae66f25b38" />

### Affichage dynamique des produits après 2 secondes, confirmant le bon fonctionnement de la Promise et de la manipulation du DOM.

<img width="2558" height="1174" alt="image" src="https://github.com/user-attachments/assets/9941208c-3b5a-4fd7-9725-99690bd4f774" />

##  Cas d’erreur : 
<img width="2557" height="1164" alt="image" src="https://github.com/user-attachments/assets/b9ab174d-7089-47ab-8a34-21a607ec2ed6" />








---

## 📖 Conclusion

Ce TP m’a permis de comprendre :

- Le comportement non bloquant de JavaScript
- La différence entre Callback, Promise et async/await
- L’importance de la gestion des erreurs
- La manipulation dynamique du DOM

La programmation asynchrone est essentielle pour les applications web modernes.







