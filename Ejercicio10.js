/* Dado el siguiente javascript usa forof y forin para hacer la media del 
volumen de todos los sonidos favoritos que tienen los usuarios. */

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let totalVolume = 0;
let soundCount = 0;

for (const user of users) {
  for (const sound of Object.values(user.favoritesSounds)) {
    totalVolume += sound.volume;
    soundCount++;
  }
}

const mediaVolumeSound = totalVolume / soundCount;
console.log(mediaVolumeSound);

//!Entiendo que puedo hacerlo con dos ForOf anidados, ya que no me acostumbro a usar ForIn, el problema que tengo que el objeto favouritesSounds no es interable, que se soluciona obteniendo el valor del objeto

/*

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    totalVolume += user.favoritesSounds[sound].volume;
    soundCount++;
  }
}
const mediaVolumeSound = totalVolume/soundCount;
console.log(mediaVolumeSound);

 */

//? No obtante intentare practicar mas sobre ForIn para mejorar en ese campo
