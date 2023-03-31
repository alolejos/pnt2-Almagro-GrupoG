// var global = 0;

// let sumar = function (...moto) {
//   console.log(moto);

//   let variableDeFuncion = 10;
//   return (
//     variableDeFuncion +
//     moto.reduce((acumulador, vuelta) => (acumulador += vuelta))
//   );
// };

// sumar(10, 15, 75);

// let concatenar = function (palabra1 = "", palabra2 = "Dos", ...moto) {
//   return moto;
// };

// console.log(
//   concatenar("Algo", "otra cosa", 1, 2, 3, 4, 5, "caballo", {
//     nombre: "pedro",
//     apellido: "Rodriguez",
//   })
// );

// //listadoGastos.reduce();
// let comparador = 0;
// listadoGastos.forEach(function (valorQueHayEnCadaPosicion, indice) {
//   //console.log(valorQueHayEnCadaPosicion);
//   if (indice == 0 || comparador < valorQueHayEnCadaPosicion) {
//     comparador = valorQueHayEnCadaPosicion;
//   }
// });

// // FOR QUE RECORRE EL ARRAY Y GENERA UNO NUEVO CON LOS REGISTROS IGUALES A 4

// let filter = function (array, numero) {
//   const resultado = [];
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] == numero) resultado.push(array[index]);
//   }
//   return resultado;
// };

//console.log(filter(listadoGastos, 3));

//let nuevoListado = listadoGastos.filter((datoVuelta) => datoVuelta == 4);

//let nuevoResultado = listadoGastos.filter((vuelta) => vuelta == 3);

let listadoProductos = [
  { nombre: "Jabón", precio: 1000 },
  { nombre: "Shampoo", precio: 100 },
  { nombre: "Desodorante", precio: 350 },
  { nombre: "Enjuague", precio: 235 },
];

listadoProductos.sort((a, b) => {
  const nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
  const nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});

listadoProductos.sort((a, b) => a.precio - b.precio);

console.log(listadoProductos);

const numeros = [10, 10, 34];
let rta = numeros.reduce(
  (acumulador, valorVuelta) => acumulador * valorVuelta,
  10
);
console.log("Primer Reduce:");
console.log(rta);

console.log("Precio sumatoria productos:");
rta =
  listadoProductos.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  ) / listadoProductos.length;
console.log(rta);

const lista = [3, 4, 5, 23, 34];

const listaSumada = lista.map((o1) => {
  let retorno = 0;
  if (o1 > 20) {
    retorno = o1 + 1000;
  } else {
    retorno = o1 + 1;
  }
  return retorno;
});

console.log(lista);
console.log(listaSumada);

function nombre(parametros1, parametro2, ...spreadOperato) {
  return algo;
}

let variable = function (parametros1, parametro2, ...spreadOperato) {
  let variableInterna = 100;
  return variableInterna;
};

let funcionFlecha = (variable1, variable2) => variable1 + variable2;

console.log(funcionFlecha(1, 3));
