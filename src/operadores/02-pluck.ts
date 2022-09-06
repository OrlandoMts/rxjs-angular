// Es util para extraer un valor del objeto recibido yq eu puede ser emitido

import { fromEvent, map, Observer, pluck } from "rxjs";

const obs: Observer<any> = {
    next: (val) => console.log(val),
    error: (error) => console.log(error),
    complete: () => console.warn('completed')
}

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupPluck$  = keyup$.pipe(
    map<KeyboardEvent, String>(x => (x.target as HTMLInputElement).baseURI)
    //pluck('target', 'baseURI') //Esta por ser por ser removida del api
);

keyupPluck$.subscribe(obs);
