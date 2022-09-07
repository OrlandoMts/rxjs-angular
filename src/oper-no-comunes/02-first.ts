// Se completa en la primera emision del Observable, puede recbir una condición. 
// Cuando se cumpla la condicion se emitira el valor

import { first, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');
click$.pipe(
    tap<PointerEvent>(console.log),
    map(({x,y}) => ({x,y})),
    first( positions => positions.x > 50 )
).subscribe({next: val => console.log('next:', val),
complete: () => console.log('complete')});