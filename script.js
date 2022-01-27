// var xReq = new XMLHttpRequest();
// xReq.open('GET','fiche.json');
// xReq.onload = function (){
//     var xData = xReq.responseText;
//     document.write(xData);
//     console.log(xData);
// };
// xReq.send();


$(document).ready(function(){
 
let strJson  = '[ { "id": 123, "Désignation": "Apple iPhone 13 Pro Max LUX", "Catégorie": "Apple", "Prix": 1249, "Disponibilité": [ "Tanger", "Casablanca", "Rabat" ], "Fournisseur": { "raison_sociale": "Apple", "adresse": "Paris,Opéra 12 rue Halévy 75009 Paris" } }, { "id": 124, "Désignation": "LG G8 ThinQ", "Catégorie": "LG", "Prix": 1249, "Disponibilité": [ "Tanger", "Casablanca" ], "Fournisseur": { "raison_sociale": "LG", "adresse": "Ferme de Etang, 77390 Verneuil- Étang, France" } }, { "id": 125, "Désignation": "Oppo Find X3 Pro", "Catégorie": "Oppo", "Prix": 749, "Disponibilité": [ "Tanger", "Casablanca", "Rabat" ], "Fournisseur": { "raison_sociale": "Oppo", "adresse": "Bd Abdelmoumen, Casablanca 20250" } }, { "id": 126, "Désignation": "Xiaomi Redmi Note 10S", "Catégorie": "Redmi", "Prix": 249, "Disponibilité": [ "Tanger", "Casablanca", "Rabat", "Fès", "Meknès", "Témara" ], "Fournisseur": { "raison_sociale": "Xiaom", "adresse": "Av. Moulay Idriss I, Témara" } }, { "id": 127, "Désignation": "XIAOMI REDMI NOTE 9", "Catégorie": "Xiaomi", "Prix": 165, "Disponibilité": [ "Tanger", "Casablanca", "Rabat" ], "Fournisseur": { "raison_sociale": "Xiaomi", "adresse": "Av. Moulay Idriss I, Témara" } }, { "id": 128, "Désignation": "Samsung Galaxy A52s", "Catégorie": "Samsung", "Prix": 399, "Disponibilité": [ "Tanger", "Casablanca", "Rabat" ], "Fournisseur": { "raison_sociale": "Samsung", "adresse": " City Center, Mag N°005, Centre Commercial Tanger, Tangier 90000" } }, { "id": 129, "Désignation": "Galaxy Z Fold3 5G", "Catégorie": "Samsung", "Prix": 1699, "Disponibilité": [ "Tanger", "Casablanca", "Rabat" ], "Fournisseur": { "raison_sociale": "Samsung", "adresse": "Mag N°680, Souk Najd, Casablanca" } }, { "id": 130, "Désignation": "Galaxy Note20", "Catégorie": "Sumsung", "Prix": "359", "Disponibilité": [ "Tanger", "Casablanca", "Rabat", "Fès" ], "Fournisseur": { "raison_sociale": "Sumsug", "adresse": "Mag N°680, Souk Najd, Casablanca" } }, { "id": 131, "Désignation": "Huawei Nova 8i", "Catégorie": "Huawei", "Prix": "299", "Disponibilité": [ "Agadir", "Casablanca", "Fès" ], "Fournisseur": { "raison_sociale": "Huawei", "adresse": " HUAWEI TECHNOLOGIES FRANCE - 75007" } }, { "id": 132, "Désignation": "Samsung Galaxy A22", "Catégorie": "Samsung", "Prix": "214", "Disponibilité": ["Casablanca", "Rabat" ], "Fournisseur": { "raison_sociale": "Electroplanet", "adresse": "24 Av. Omar Ibn Al Khattab" } }, { "id": 133, "Désignation": "Samsung Galaxy A32", "Catégorie": "Samsung", "Prix": "2700", "Disponibilité": [ "Marakeche", "Fès", "Rabat" ], "Fournisseur": { "raison_sociale": " Marjane ", "adresse": "Arrondissement Californie, A3, Casablanca " } }, { "id": 134, "Désignation": "Akozon", "Catégorie": "Nokia", "Prix": "37,15", "Disponibilité": [ "Nador", "Méknes", "Rabat" ], "Fournisseur": { "raison_sociale": "Groupe électro", "adresse": " Av ourane 23 rue Almassira Nador" } }, { "id": 135, "Désignation": "Ulefone Note 7", "Catégorie": "Ulefone", "Prix": "749", "Disponibilité": [ "Rabat", "Kénitra"], "Fournisseur": { "raison_sociale": "PhoneMaroc", "adresse": " Derb ghelef N56 Casablanca" } }, { "id": 136, "Désignation": "Accent Nubia 33P", "Catégorie": "Accent", "Prix": "189", "Disponibilité": [ "Agadir", "Salé", "Rabat" ], "Fournisseur": { "raison_sociale": "haycours", "adresse": "36H8+W6C, Salé" } }, { "id": 137, "Désignation": "HUAWEI Y7a ", "Catégorie": "HUAWEI", "Prix": "1799", "Disponibilité": [ "Errachidia", "Meknès", "Midelte" ], "Fournisseur": { "raison_sociale": "big soft", "adresse": "Rue Saïdia, Salé" } }, { "id": 138, "Désignation": "HUAWEI nova 9", "Catégorie": "HUAWEI", "Prix": "4899", "Disponibilité": [ "Tanger", "Marakeche", "Rabat" ], "Fournisseur": { "raison_sociale": "IXCode", "adresse": "Hay Rahma-Tabriquet SECT A RES Al Boustane 7 IMM 11، Salé" } }, { "id": 139, "Désignation": "Apple iPhone 11", "Catégorie": "iPhone", "Prix": "4990", "Disponibilité": [ "Fès", "Kénitra", "oujda" ], "Fournisseur": { "raison_sociale": "Sgm2I", "adresse": " rue Al Jihane Résidence Ryad Al Otor, immeuble C, appartement n°8, Rabat 10110" } }, { "id": 140, "Désignation": "Galaxy Z Fold3", "Catégorie": "samsung", "Prix": "17490", "Disponibilité": [ "Tanger", "Casablanca", "Rabat" ], "Fournisseur": { "raison_sociale": "Microland", "adresse": "27، Av. Fal Ould Oumeir, Rabat" } }, { "id": 141, "Désignation": "OPPO Reno4", "Catégorie": "OPPO", "Prix": "2990", "Disponibilité": [ "Agadir", "Nador", "oujda" ], "Fournisseur": { "raison_sociale": "Extra It", "adresse": "Av. Al Kifah, Rabat" } }, { "id": 142, "Désignation": "Le Xiaomi Redmi Note 11S", "Catégorie": "Redmi", "Prix": "7000", "Disponibilité": [ "Témara", "Casablanca", "Rabat" ], "Fournisseur": { "raison_sociale": "HB SOLUTIONS", "adresse": " Avenue Tarik Ibn Ziad, alkhaizourane 4 ilot 1 Mag 1, Témara" } }, { "id": 143, "Désignation": "Samsung Galaxy Note 20 Ultra", "Catégorie": "Samsung", "Prix": "10090", "Disponibilité": [ "Tanger", "Casablanca", "Rabat" ], "Fournisseur": { "raison_sociale": "AGITALYS Maroc", "adresse": "23 Rue Dayatr"} } ]';
let jsn = JSON.parse(strJson);
var fiche = '';
for(let i = 0 ; i<jsn.length;i++){
    fiche += '<tr>';
    fiche += '<td>'+jsn[i].id+'</td>';
    fiche += '<td>'+jsn[i].Désignation+'</td>';
    fiche += '<td>'+jsn[i].Catégorie+'</td>';
    fiche += '<td>'+jsn[i].Prix+' DH</td>';
    fiche += '<td>'+jsn[i].Disponibilité+'</td>';
    fiche += '<td>'+jsn[i].Fournisseur.raison_sociale+ ' : ' +jsn[i].Fournisseur.adresse+'</td>';
    fiche += '</tr>';

} 
$('#fiche_table tbody').append(fiche);

$('#fiche_table').DataTable();
// pour activer DataTable 3eme lien 

});
 


// $(document).ready(function(){
//  $("button").click(function(){
// $("p").hide();
//  });
// });