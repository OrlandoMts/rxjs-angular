/**
 * Concatena el valor emitido por el source$ al ultimo valor que emitio el concatMap 
 * emitió.
 * Si un observable a un no se completa y llega otro, lo pone en una cola.
 * Los ira ejecutando en secuencia
 */

 import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";

 const interval$ = interval(1000).pipe(take(3));
 const click$ = fromEvent(document, 'click');
 
 click$.pipe(
     // switchMap( () => interval$)
     concatMap( () => interval$),
 ).subscribe(console.log);