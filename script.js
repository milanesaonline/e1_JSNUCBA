// ---------------------------------------------------------------------------------------------------

// 1 - Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const esPar = (a = 0) => console.log (a % 2 == 0 ? "Es par" : "Es impar");

console.log(esPar(7));  // "Es impar"
console.log(esPar(10)); // "Es par"

// ---------------------------------------------------------------------------------------------------

// 2 - Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function esMayor (a = 0, b = 0) {
    if (a > b) return (a + "es mayor que" + b); 
    if (b > a) return (b + "es mayor que" + a);
    if (b === a) return ("son el mismo número");
    }

// ---------------------------------------------------------------------------------------------------

// 3 - Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const esMultiplo = (a = 0) => console.log(a % 5 == 0 ? "Es multiplo de 5" : "No es multiplo de 5");

// ---------------------------------------------------------------------------------------------------

// 4 - Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function contarHasta(a = 1) {
      for (let inicio = 0; inicio <= a; inicio++) {
        console.log("Inicio:", inicio);
      }
    }

// ---------------------------------------------------------------------------------------------------

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente
//  al número indicado.

function imprimirHasta(veces = 1, palabra="") {
      for (let inicio = 0; inicio <= veces; inicio++) {
        console.log(palabra);
      }
    }

// ---------------------------------------------------------------------------------------------------

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function imprimirArray(array) {
    for (let inicio = 0; inicio < array.length; i++) {
        console.log(array[inicio]);
    }
}

// ---------------------------------------------------------------------------------------------------

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function saltandoElQuinto(numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      for (let position = 0; position < numeros.length; position++) {
        if (position == 5) {
          continue;
        }
        console.log(numeros[position]);
      }
    }

// ---------------------------------------------------------------------------------------------------

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array
//  multiplicado por el número pasado por parámetro.

function multiplicandoNumeros(numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9], numero = 1){
    for (let position = 0; position < numeros.length; position++) {
        console.log (numeros[position] * numero);
    }
}
// ---------------------------------------------------------------------------------------------------
