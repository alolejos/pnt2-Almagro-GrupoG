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
