/**
 * CatchError es como el catch del try-catch. 
 * Puede retornar un mensaje o bien un nuevo Observable que emita cualquier cosa.
 * Si emite un Observable, el catchError se va a completar cuando ese Observable se complete
 */

 import { catchError, map, of } from 'rxjs';
 import { ajax } from 'rxjs/ajax'
 
 const url = 'https://api.github.com/userssss?per_page=5';
 
 
 // Diferencia ente el fetch y el ajax de rxjs (ver ejemplo-fetch.ts)
 ajax(url).pipe(
     map( ({response}) => response ),
     catchError(err => {
         console.log('error en: ', err);
         return of([]); // SOLO PUEDE RETORNAR OBSERVABLES
         // El return es lo que enviará al subscribe
     })
 ).subscribe( usuarios => console.log('usuarios: ', usuarios) )
 
 