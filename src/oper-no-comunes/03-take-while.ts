// Completara el Obs hasta que se cumpla la condicion, mientras seguira
// emitiendo valores

import { fromEvent, map, range, takeWhile } from "rxjs";

const rango$ = range(2,10);
rango$.pipe(
    takeWhile(num => num % 2 === 0)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});



const click$ = fromEvent<MouseEvent>( document, 'click' );


click$.pipe(
    map( ({ x, y }) => ({x,y}) ),
    /**
     * El segundo parametro es para que muestre la ultima emision que hizo
     * que se detuviera
     */
    takeWhile( ({ y })=> y <= 150, true )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
});
