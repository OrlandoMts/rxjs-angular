import { fromEvent, interval, map, mergeMap, of, range, take, takeUntil, concatMap, delay } from "rxjs";
import { ajax } from "rxjs/ajax";

const letras$ = of('a','b','c');

// el mergaMap se subscribe a los valores emitidos por el source$
letras$.pipe(
    mergeMap( letra => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    )) )
// ).subscribe({
//     next: val => console.log('next: ', val),
//     complete: () => console.log('Complete')
// });

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval(1000);

mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log)


/**
 * Si no me interesa el orden mergeMap me puede servir,
 * con concatMap puedo ordenar
 */


// Ejemplo *****
const source$ = of(2000,1000,4000);

const subMergeMap = source$.pipe(
    mergeMap( val => of(`valor: ${val}`).pipe(delay(val)) )
).subscribe(console.log)

// Ejemplo ********

const sourcegit$ = of(
    ajax.getJSON('https://api.github.com/users/orlandomts'),
    ajax.getJSON('https://api.github.com/users/ashley'),
)

const subMergeMapGit = sourcegit$.pipe(
    mergeMap( val => val )
).subscribe(console.log)