// ----------------Partie 1------------------------------

// function chargerProduits() {
//     console.log("Chargement en cours...");

//     setTimeout(() => {
//         console.log("succes");
//     }, 2000);
// }

// chargerProduits();

// console.log("Fin du script");

// ----------------Partie 2------------------------------

// function getProduits(callback) {
//     setTimeout(() => {
//         const produits = [
//             { id: 1, nom: "PC Portable", prix: 9000 },
//             { id: 2, nom: "Souris", prix: 150 },
//             { id: 3, nom: "Clavier", prix: 300 }
//         ];

//         callback(produits);
//     }, 2000);
// }

// getProduits(function(produits) {
//     console.log("Produits reçus :");
//     console.log(produits);
// });

// // ----------------Partie 3------------------------------

// function getProduitsPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const produits = [
//                 { id: 1, nom: "PC Portable", prix: 9000 },
//                 { id: 2, nom: "Souris", prix: 150 },
//                 { id: 3, nom: "Clavier", prix: 300 }
//             ];

//             if (Math.random() > 0.5) {
//                 resolve(produits);
//             } else {
//                 reject("Erreur serveur");
//             }

//         }, 2000);
//     });
// }

// getProduitsPromise()
//     .then(produits => {
//         console.log("Produits (Promise) :");
//         console.log(produits);
//     })
//     .catch(erreur => {
//         console.error(erreur);
//     });


// ----------------Partie 4/3 ------------------------------

// async function afficherProduits() {
//     try {
//         const produits = await getProduitsPromise();
//         console.log("Produits avec async/await :");
//         console.log(produits);
//     } catch (erreur) {
//         console.error("Erreur :", erreur);
//     }
// }

// afficherProduits();

// -------------------------------------------------------------------

function getProduitsPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const produits = [
                { id: 1, nom: "PC Portable", prix: 9000 },
                { id: 2, nom: "Souris", prix: 150 },
                { id: 3, nom: "Clavier", prix: 300 }
            ];

            if (Math.random() > 0.5) {
                resolve(produits);
            } else {
                reject("Erreur serveur");
            }

        }, 2000);
    });
}

const bouton = document.getElementById("btn");
const resultat = document.getElementById("resultat");

bouton.addEventListener("click", async function() {

    resultat.innerHTML = "Chargement...";

    try {
        const produits = await getProduitsPromise();

        resultat.innerHTML = "";

        produits.forEach(produit => {
            const p = document.createElement("p");
            p.textContent = `Nom : ${produit.nom} - Prix : ${produit.prix} DH`;
            resultat.appendChild(p);
        });

    } catch (erreur) {
        resultat.innerHTML = erreur;
    }

});









