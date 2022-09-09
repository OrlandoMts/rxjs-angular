import { fromEvent, interval, map, mergeMap, of, range, take, takeUntil, tap } from "rxjs";

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