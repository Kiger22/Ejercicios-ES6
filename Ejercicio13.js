/* Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente. */

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

const findArrayIndex = (array, text) => {
  return array.indexOf(text);
}

/* function removeItem(array, text) {
  array.splice(findArrayIndex(array, text), 1);
} */

const removeItem = (array, text) => {
  if (findArrayIndex(array, text) !== -1) {
    array.splice(findArrayIndex(array, text), 1);
  }
}

removeItem(marvelCharacters, "Storm");
removeItem(marvelCharacters, "vision");
removeItem(marvelCharacters, "Iron Man");

console.log(marvelCharacters);