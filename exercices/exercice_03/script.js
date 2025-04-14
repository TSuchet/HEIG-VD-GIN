// Partie 1
console.log("1. Produit matriciel :");
const MATRIX_1 = [
    [3,8,5],
    [1,9,0],
    [2,4,6]
];

const MATRIX_2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log("Matrice 1 : ");
console.log(MATRIX_1);
console.log("Matrice 2 : ");
console.log(MATRIX_2);

console.log("Produit des matrices (MATRIX_1 * MATRIX_2) : ");
MATRIX_3 = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

for (j=0; j < 3; j++) {
    for (i=0; i < 3; i++) {
        for (k = 0; k < 3; k++) {  
            MATRIX_3 [j][i] = MATRIX_3 [j][i] + MATRIX_1[j][k] * MATRIX_2[k][i];
        };
    };
};
  
console.log(MATRIX_3);
// TODO


//------------------------------------------------------------------------------
// Partie 2
console.log("2. Découpage d'une zone en tuiles :");
const AREA_BBOX = [2540221, 1180952, 2540834, 1181442];
const TILE_SIZE = 50;

const minX = AREA_BBOX[0];
const minY = AREA_BBOX[1];
const maxX = AREA_BBOX[2];
const maxY = AREA_BBOX[3];

let tiles = [];
let tileId = 0;

for (let x = minX; x < maxX; x += TILE_SIZE) {
  for (let y = minY; y < maxY; y += TILE_SIZE) {
    const tile = {
      id: tileId++,
      bbox: [x, y, x + TILE_SIZE, y + TILE_SIZE]
    };
    tiles.push(tile);
  }
}

console.log(`Nombre de tuiles générées : ${tiles.length}`);
console.log("Exemple de tuiles générées :");
console.table(tiles.slice(0, 5)); // Affiche les 5 premières tuiles

// TODO


//------------------------------------------------------------------------------
// Partie 3
console.log(`3. Statistiques sur ensemble de coordonnées : `);
const COORDS = [
    [2539280, 1181558],
    [2539654, 1181471],
    [2539066, 1181385],
    [2539867, 1180971],
    [2539412, 1181753],
    [2538737, 1181054],
];

const COORDS_2 = [ // Deuxième ensemble de coordonnées, pour servir de test
    [2539602, 1181927],
    [2539563, 1181857],
    [2539479, 1181703],
    [2539395, 1181549],
    [2539329, 1181430],
    [2539274, 1181330]
]
let P_dist = 0;
let G_dist = 0;
let Addcoord = 0;
let nbcoord = 0;
for (const coord in COORDS) {
    let dist = Math.sqrt(Math.pow(COORDS [coord] [0] - COORDS [coord] [1],2))
    if(P_dist == 0 || P_dist > dist) {
        P_dist = dist;
    };
    if(G_dist == 0 || G_dist < dist) {
        G_dist = dist;
    };
    Addcoord = Addcoord + COORDS [coord] [0] + COORDS [coord] [1]
    nbcoord = nbcoord + 2

};

function distancePointToLine(p, a, b) {
    // Distance du point p à la ligne passant par a et b
    const [px, py] = p;
    const [ax, ay] = a;
    const [bx, by] = b;
  
    const num = Math.abs((by - ay) * px - (bx - ax) * py + bx * ay - by * ax);
    const den = Math.sqrt((by - ay) ** 2 + (bx - ax) ** 2);
  
    return den === 0 ? 0 : num / den;
  };
  
  function arePointsAligned(coords, tolerance = 1e-6) {
    if (coords.length <= 2) return true; // 2 points = toujours alignés
  
    const a = coords[0];
    const b = coords[1];
  
    for (let i = 2; i < coords.length; i++) {
      const dist = distancePointToLine(coords[i], a, b);
      if (dist > tolerance) {
        return false;
      }
    }
  
    return true;
  };
  

const tolerance = 0.001;

  
let Centre = Addcoord / nbcoord
// TODO

console.log("Plus petite distance : ",P_dist);
// TODO
console.log("Plus grande distance : ",G_dist);
// TODO
console.log("Coordonnées du centre : ",Centre.toFixed(4));
// TODO
console.log("Coordonnées sur une même ligne ? : ",arePointsAligned(COORDS,tolerance));
// TODO