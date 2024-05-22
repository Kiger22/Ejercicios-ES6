/*  Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos. */


//? Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

//?  Mi array:
const marvelCharacters = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Spider-Man",
  "Black Widow",
  "Wolverine",
  "Storm",
  "Deadpool",
  "Black Panther",
  "Captain Marvel",
  "Doctor Strange",
  "Scarlet Witch",
  "Vision",
  "Ant-Man",
  "Wasp",
  "Falcon",
  "Winter Soldier",
  "Groot",
  "Rocket Raccoon"
];

//?  Sugerencia de función:

function findArrayIndex(array, text) {
  let posicion = 0
  for (const i of array) {
    if (i === text) {
      return posicion;
    }
    posicion++;
  }
  return "No Esta";
}

/* const findArrayIndex = (array, text) => {
  return array.indexOf(text);
} */
//! El metodod indexOf no lo hemos visto hasta el momento, lo he estado viendo en documentacion y otros medtodos paralelos pero en el bootcamp no le hemos repasado

console.log(findArrayIndex(marvelCharacters, "Spider-man"));




