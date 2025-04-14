// Partie 1
console.log("1. Somme des nombres de 1 à 100 :");
let a = 0
for (i = 0; i <=100; i++) {
    a = a + i;
}
console.log(a);
// TODO



// Partie 2
console.log("2. Somme des nombres de 1 à 1000 qui ne divisent pas par 13 :");
a = 0
for (i = 0; i <=1000; i++) {
    if (i % 13 == 0) {
        continue;
    }
    a = a + i;
}
console.log(a);
// TODO



// Partie 3
const START_NUMBER = 1513; // Vous pouvez changer ce nombre
console.log(`3. Nombre d'étapes de la conjecture de Syracuse, en partant de ${START_NUMBER}, avant d'atteindre 1 : `);
let nb = START_NUMBER;
let nbetape = 0
while (nb != 1) {
    if (nb % 2 == 0) {
        nb = nb / 2;
    }else{
        nb = (nb * 3) + 1;
    }
    nbetape = nbetape + 1;
}
console.log(nbetape)
// TODO



// Partie 4
console.log(`4. Suite de Syracuse partant de ${START_NUMBER} : `);
nb = START_NUMBER;
let suite = []
while (nb != 1) {
    if (nb % 2 == 0) {
        nb = nb / 2;
        suite.push(nb)
    }else{
        nb = (nb * 3) + 1;
        suite.push(nb)
    }
}
console.log(suite)