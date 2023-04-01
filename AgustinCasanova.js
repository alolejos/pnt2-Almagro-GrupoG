//Map ejercicio 1
console.log("--------------------------------------------------------------------------------------------")
const numeros = [1,2,3,4,5];

const copiaNumeros = [];

copiaNumeros.push(numeros.map(e=>e*5 ));

console.log(copiaNumeros)


// Map ejercicio 2
console.log("--------------------------------------------------------------------------------------------")
const precios =  [100,120,300,230,320];
const copiaPrecios = [];

copiaPrecios.push(precios.map(e => e*1.21));

console.log(copiaPrecios);


// map ejercicio 3
console.log("--------------------------------------------------------------------------------------------")
let Comrpobantes = [
    {id:100,descripcion:"prov1",precio:1000},
    {id:102,descripcion:"prov2",precio:1300}]

    let copiaComprobantes = [];

    copiaComprobantes.push(Comrpobantes.map(b => { return {id:b.id,descripcion:b.descripcion,precio:b.precio*1.21}}));

    console.log(copiaComprobantes)


    // filter ejercicio 1
// nose si este esta bien xq no entendi el enunciado
console.log("--------------------------------------------------------------------------------------------") 
const listaNumeros = [1,2,3,4,5]

    const nuevosNumeros = []

    nuevosNumeros.push(listaNumeros.filter(e => e > 2));

    console.log(nuevosNumeros)


    //filter ejercicio 2
    console.log("--------------------------------------------------------------------------------------------")
    const ncs = [{id:100,descripcion:"prov1",precio:1000},
 {id:102,descripcion:"prov2",precio:1300},
 {id:103,descripcion:"prov3",precio:600}]

 const nuevoNcs = [];

 nuevoNcs.push(ncs.filter(e => e.precio<1000))

 console.log(nuevoNcs)

//reduce ejercicio 1
console.log("--------------------------------------------------------------------------------------------")
const numerosRed =  [ 4,3,-2,5,8,-12,10];

const copiaNumRed = numerosRed.reduce((a,b ) => a+b,100)

console.log(copiaNumRed)


//reduce ejercicio 2
console.log("--------------------------------------------------------------------------------------------")



const recibos = [
    {numero: 1000, importe: 1500},
    {numero: 1001, importe: 2300},
    {numero: 1002, importe: 2100}
    ]
    
    const copiaRecibos = recibos.reduce((a,c) => a+c.importe, 0)
    console.log(copiaRecibos)

    console.log("--------------------------------------------------------------------------------------------")

    //Combinando map, filter y reduce

   const preciosSinIva = [2300,2500,5000,10000,1300]

   const preciosConIva = preciosSinIva.map(a => a*1.21).filter(e => e > 3000).reduce((a,c) => a+c,0)

   console.log(preciosConIva)


   console.log("--------------------------------------------------------------------------------------------")
   //Ejercicio integrador

   const recibosInt = [ {numero: 1000, importe: 1500, fecha: 20230320},
    {numero: 1001, importe: 2300, fecha: 20230319},
    {numero: 1002, importe: 2100, fecha: 20230318} ]

    
   const listaOrdenada = recibosInt;
     listaOrdenada.sort((a,b) => a.fecha-b.fecha)
     console.log(listaOrdenada)

     console.log("--------------------------------------------------------------------------------------------")

     const listaImport = recibosInt.filter(e => e.importe > 2100);
     console.log(listaImport)

     console.log("--------------------------------------------------------------------------------------------")

     const lista30 = recibosInt.map(e => {return {numero:e.numero, importe:e.importe*1.30, fecha:e.fecha}});
     console.log(lista30)

     console.log("--------------------------------------------------------------------------------------------")

     let sumaTotal = recibosInt.reduce((a,c) => a+c.importe,0)
     console.log(sumaTotal)

     console.log("--------------------------------------------------------------------------------------------")

     let sumaConCond = recibosInt.filter(e => e.importe < 2500).map(e => e.importe* 0.80).reduce((a, c) => a + c, 0);
     console.log(sumaConCond)

     console.log("-------------------------------------------------------------------------------------------")