// Es similar al reduce pero este emite sus valores conforme van ingresando

import { from, map, reduce, scan, tap } from "rxjs";

const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, cur) => {
    return acc + cur;
}

// Reduce
from(numeros).pipe(
    reduce(totalAcumulador)
).subscribe(console.log)

// Scan
from(numeros).pipe(
    scan(totalAcumulador)
).subscribe(console.log)

// Ejemplo de patron Redux
interface Persona {
    id?: number,
    nombre?: string,
    autenticado?: boolean,
    token?: string
};

const personas: Persona[] = [
    {nombre: 'daniel', autenticado: false, token: null},
    {nombre: 'daniel', autenticado: true, token: 'qwe'},
    {nombre: 'daniel', autenticado: false, token: null},
];

const state$ = from(personas).pipe(
    scan((acc, cur) =>{
        return {...acc, ...cur}
    }, {id: 1}),
    
    map(state => state),
);

state$.subscribe(console.log);