// Permite obtener el ultimo valor emitido en el tiempo establecido
// sin importar cuantas emisiones pueda hacer el source$
// antes del tiempo definido

import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

/**
 * Es mas eficiente tener el sampleTime antes de cualquier 
 * calculo u operacion
 */
click$.pipe(
    sampleTime(2000),
    map(({x,y}) => ({x,y}))
).subscribe(console.log)