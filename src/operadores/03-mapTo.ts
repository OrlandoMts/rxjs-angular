// Es util para extraer un valor del objeto recibido y que puede ser emitido

import { fromEvent, map, mapTo, Observer, pluck } from "rxjs";

const obs: Observer<any> = {
    next: (val) => console.log(val),
    error: (error) => console.log(error),
    complete: () => console.warn('completed')
}

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupMapTo$ = keyup$.pipe(
    // map( x => 2)
    mapTo(2)
)

keyupMapTo$.subscribe(obs);
