import { range, of } from "rxjs";

const src0$ = of(1,2,3,4,5,6,7,8,9,10); 
/**
 * El range emite valores, 
 * el primer valor declarado es de donde va a inicar la emision (1), por defecto es 0
 * y el segundo es la cantidad de valores que va a emitir, no hasta donde va a llegar
 */
const src$ = range(1,10);

src$.subscribe(console.log)