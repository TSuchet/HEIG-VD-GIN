// Partie 1
console.log("1. Somme des nombres de 1 à 100 :");

var sum = 0;
for(var i=1; i<=100; i++){
    sum += i; // L'opérateur x += y est équivalent à x = x + y
}
console.log(sum);


// Partie 2
console.log("2. Somme des nombres de 1 à 1000 qui ne divisent pas par 13 :");

var sum = 0;
for(var i=1; i<=1000; i++){
    if(i/13 != parseInt(i/13)){
        sum += i;
    }
}
console.log(sum);


// Partie 3
const START_NUMBER = 1000; // Vous pouvez changer ce nombre
console.log(`3. Nombre d'étapes de la conjecture de Syracuse, en partant de ${START_NUMBER}, avant d'atteindre 1 : `);

var current_number = START_NUMBER;
var counter = 0;
while(current_number != 1){
    counter++;
    if(current_number % 2 == 0){
        current_number /= 2; // L'opérateur x /= y est équivalent à x = x / y
    }else{
        current_number = current_number*3 + 1;
    }
}
console.log(counter);

/** Note : on aurait également pu écrire la boucle de la manière suivante, avec une ternaire :
 *  while(current_number != 1){
 *      counter++;
 *      current_number = current_number % 2 == 0 ? current_number / 2 : current_number*3 + 1
 *  }
 */


// Partie 4
console.log(`4. Suite de Syracuse partant de ${START_NUMBER} : `);

var current_number = START_NUMBER;
var numbers = [];
while(current_number != 1){
    numbers.push(current_number)
    if(current_number % 2 == 0){
        current_number /= 2; // L'opérateur x /= y est équivalent à x = x / y
    }else{
        current_number = current_number*3 + 1;
    }
}
console.log(numbers);