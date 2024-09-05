//  Recordando los objetivos

const pais = {
    nombre: "Perú",
    gastronomia: "Juane",
    año: 10,
    es_super_rico: true,
    lugar: "Selva",
    ingredientes:  ["arroz", "huevo", "pollo"],
    selva:  [
        {
            nombre: "Loreto",
            gastronomia: "Tacacho con cecina",
        },
        {
            nombre: "Amazona",
            gastronomia: "Patarashca",
        },
    ],

};
console.log(pais.lugar);
console.log(pais ["es_super_rico"] );
console.log(pais.ingredientes);
console.log(pais.ingredientes [2] );
console.log(pais.selva);
console.log(pais.selva [0].gastronomia );

pais.año = 4;
console.log(pais.año);
pais.selva [1]  ["gastronomia"]  = "Patarashca";
console.log(pais);

pais.sabor ="rico";
pais.selva [0].sabor = "sabroso";
console.log(pais);




