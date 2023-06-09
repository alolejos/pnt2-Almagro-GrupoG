let cliente = {};
cliente.nombre = "Rosana";
cliente.apellido = "Perez";
cliente.productosAdquiridos = ["jabon", "shampoo", "cepillo"];
cliente.domicilio = {};
cliente.domicilio.calle = "Santa Fe";
cliente.domicilio.altura = 3254;

console.log(
  cliente.productosAdquiridos.forEach((registro) => console.log(registro))
);

// Crear el objeto carro con los atributos largo y velocidad
const carro = {
  largo: 5,
  velocidad: 0,
  marca: "",
  modelo: "",
  // Crear la función avanzar que modifica la velocidad según el aumento de velocidad
  avanzar: function aumentoVelocidad(v) {
    this.velocidad += v;
  },
  frenar: (freno) => (carro.velocidad -= freno),
  recorrido: [],
  agregarLugar: function (lugar) {
    this.recorrido.push(lugar);
  },
};
const fordMondeo = { ...carro };
fordMondeo.marca = "Ford";
fordMondeo.modelo = "Mondeo";
fordMondeo.agregarLugar("Chivilcoy");

console.log("Mondeo");
console.log(fordMondeo);

console.log("Carro");
console.log(carro);

console.log("Cronos");
const fiatCronos = { ...carro };

console.log(fiatCronos);

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arreglo1 = ["1", "2", "3", "4", "5", "6", 7, 8, 9];

// Imprimir la velocidad actual del carro
console.log("La velocidad actual del carro es: " + fordMondeo.velocidad);
// let perro = "soy una variable"

// console.log(typeof(perroDelVecino))

// perro = null

// console.log(typeof(perro));

// perro = 1
// console.log(typeof perro);
// {
//   let perro = "soy un perro del scope"
//   console.log(perro);
// }

// const CONSTANTE = 12

// // Strings, Numbers, Booleans, Null, undefined, NaN

// let cadena = "comiilas dobles"
// cadena += " \n otro texto"
// cadena += " \n otro mas";
// let cadena1 = "había una vez un perro sentado en la pueta de la escuela esperando la carroza"
// console.log(cadena);
// let stringTemplates = `Esto es un
//                       string template ${perro}
//                       con varias lineas
//                       y más
//                       y más
//                       y más`
// console.log(stringTemplates);

// cadenaMayusculas = cadena1.toUpperCase()

// console.log(cadenaMayusculas);

// console.log(cadena1.includes("una"));

// console.log(cadena1.length);

// let arrayPalabras = cadena1.split(' ')

// // arrayPalabras.forEach((pedritorodriguez, indice) =>
// //       console.log(pedritorodriguez + "vuelta: "+indice)
// //       );
// arrayPalabras.push("palabra nueva")
// arrayPalabras.pop()

// const array = [1, 2]
// array.push(3)
// array[0] = "acá arrancamos"
// console.log(array);

// const arrayUnidimensional = []
// const arrayBidimensionales = [[]]
// arrayBidimensionales[0][0] = 1
// console.log(arrayBidimensionales);

// const otroArray = Array.of(1, 2, 3)
// const unoMas = Array(100).fill("x")
// console.log(unoMas);

// console.log(arrayPalabras);
// arrayPalabras.fill("nada")
// console.log(arrayPalabras);
// console.log(arrayPalabras[arrayPalabras.length - 1]);

// // for (let index = 0; index < arrayPalabras.length; index++) {
// //   console.log(arrayPalabras[index]);

// // }

// // console.log("HOla perri");
// /* const arreglo = [];
// arreglo[0] = "perri";
// arreglo.push("gato");
// arreglo.push("canario");
// console.log(arreglo);
// console.log(`El valor es ${arreglo[0]}`);
// arreglo.forEach((x, i) => console.log(`<li id="${i}">${x}</li>`));
// */

let otroArreglo = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 5, 6, 7, 8, 9];

let a = function (valorVuelta, index) {
  if (valorVuelta == 4) return valorVuelta;
};

function funcionDeFiltro(valorVuelta, index) {
  if (valorVuelta == 4) return valorVuelta;
}

let resultado = otroArreglo.filter(funcionDeFiltro);

console.log(resultado);
