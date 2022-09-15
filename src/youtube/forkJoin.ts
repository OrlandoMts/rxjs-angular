/**
 * Operador de combinacion
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
