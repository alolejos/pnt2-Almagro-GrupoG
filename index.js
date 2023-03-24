console.log("HOla perri");
const arreglo = [];
arreglo[0] = "perri";
arreglo.push("gato");
arreglo.push("canario");
console.log(arreglo);
console.log(`El valor es ${arreglo[0]}`);
arreglo.forEach((x, i) => console.log(`<li id="${i}">${x}</li>`));
