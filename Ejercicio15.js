/* Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const swap = (array, indArray1, indArray2) => {
  [array[indArray1], array[indArray2]] = [array[indArray2], array[indArray1]];

  return array;
}

console.log(swap(fantasticFour, 1, 3));