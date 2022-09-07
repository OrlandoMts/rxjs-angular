// No emite objetos DUPLICADOS basados en una propiedad

import { distinctUntilKeyChanged, from, pipe } from "rxjs";

interface Auto {
    nombre: string;
}

const autos: Auto[] = [
    {
        nombre: 'bmw'
    },
    {
        nombre: 'bmw'
    },
    {
        nombre: 'rav 4'
    },
    {
        nombre: 'Suburban'
    },
    {
        nombre: 'mazda 3'
    },
    {
        nombre: 'mazda 3'
    },
    {
        nombre: 'rav 4'
    },
];

from(autos).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe({
    next: console.log
})