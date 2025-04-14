// Partie 1
const place = { "Name": "HEIG-VD", "Type": "University", "Coordinates": [2540499, 1181186], "Address" : "Route de Cheseaux 1"};
console.log("Partie 1 :")
for(const key in place){
    console.log(key + " = "  + place[key])
};



const CANTONS = [
    { "name": "Aargau", "surface": 1403702150, "abrv": "AG" }, 
    { "name": "Appenzell Ausserrhoden", "surface": 242822568, "abrv": "AR" },
    { "name": "Appenzell Innerrhoden", "surface": 172468227, "abrv": "AI" }, 
    { "name": "Basel-Stadt", "surface": 36949530, "abrv": "BS" }, 
    { "name": "Basel-Landschaft", "surface": 517628929, "abrv": "BL" }, 
    { "name": "Bern", "surface": 5958364836, "abrv": "BE" }, 
    { "name": "Fribourg", "surface": 1672392256, "abrv": "FR" }, 
    { "name": "Genève", "surface": 282442155, "abrv": "GE" }, 
    { "name": "Glarus", "surface": 685312365, "abrv": "GL" }, 
    { "name": "Graubünden", "surface": 7105058344, "abrv": "GR" }, 
    { "name": "Jura", "surface": 838469987, "abrv": "JU" }, 
    { "name": "Luzern", "surface": 1493504688, "abrv": "LU" }, 
    { "name": "Neuchâtel", "surface": 802162549, "abrv": "NE" }, 
    { "name": "Nidwalden", "surface": 275844834, "abrv": "NW" },
    { "name": "Obwalden", "surface": 490581496, "abrv": "OW" }, 
    { "name": "Schaffhausen", "surface": 298364765, "abrv": "SH" },
    { "name": "Schwyz", "surface": 907876763, "abrv": "SZ" }, 
    { "name": "Solothurn", "surface": 790424028, "abrv": "SO" }, 
    { "name": "St. Gallen", "surface": 2028128204, "abrv": "SG" }, 
    { "name": "Thurgau", "surface": 994208621, "abrv": "TG" }, 
    { "name": "Ticino", "surface": 2811770650, "abrv": "TI" },
    { "name": "Uri", "surface": 1076521049, "abrv": "UR" },
    { "name": "Valais", "surface": 5223720199, "abrv": "VS" }, 
    { "name": "Vaud", "surface": 3211848621, "abrv": "VD" }, 
    { "name": "Zug", "surface": 238729305, "abrv": "ZG" },
    { "name": "Zürich", "surface": 1728819281, "abrv": "ZU" }
];

let SupTotale = 0
let SupGeVaVasFrNeu = 0
let Plus_G_Sup = 0
let Nom_Plus_G = ""
for (const canton of CANTONS) {
    SupTotale = SupTotale + canton["surface"];
    if (canton["name"] == "Genève" || canton.name == "Neuchâtel" || canton["name"] == "Valais" || canton["name"] == "Vaud" || canton["name"] == "Fribourg") {
        SupGeVaVasFrNeu = SupGeVaVasFrNeu + canton["surface"]
        };
    if(Plus_G_Sup == 0 || Plus_G_Sup < canton["surface"]) {
        Plus_G_Sup = canton["surface"];
        Nom_Plus_G = canton["name"];
        };
    };
console.log("La superficie totale de la Suisse est de " + SupTotale + " m2")
console.log("La superficie totale des cantons Romand est de " + SupGeVaVasFrNeu + " m2")
console.log("Le plus grand canton de Suisse est " + Nom_Plus_G + " avec une superficie de " + Plus_G_Sup +" m2")
// TODO

