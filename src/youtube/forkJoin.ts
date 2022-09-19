/**
 * Operador de combinacion
 */

/**
 * Recibe observables y tienen que ser finitos; sino el forkJoin no emitirá nada.
 * Emite el ultimo valor de cada observable en un arreglo (pero puodria ser un objeto) que es un Observable
 */

 import { forkJoin } from "rxjs";
 import { ajax } from "rxjs/ajax";
 
 
 const src$ = forkJoin(
     {
         google: ajax.getJSON('https://api.github.com/users/google'),
         microsoft: ajax.getJSON('https://api.github.com/users/microsoft')
     }
 ); // Creara un solo objeto con ambas colecciones de datos
 
 src$.subscribe(console.log);


//EJEMPLO #2
const getGihub = (user: string) => {
    const gh = ajax.getJSON('https://api.github.com/users/' + user);
    return gh;
}

// Ejecucion de manera secuencial
forkJoin(
    [getGihub('orlando'),
    getGihub('daniel'),
    getGihub('angular')]
).subscribe(console.log) // Devuelve un solo array [] con las respuestas
