// Emite ls valores que NO han sido emitidos previamente por el Obs

import { distinct, from, of } from "rxjs";

const numeros$ = of(1,2,2,1,3,6,4,5,7,8,5,9);
numeros$.pipe(
    distinct()
).subscribe({
    next: console.log
});

// Como distinguir Objetos:
const personas = [
    {nombre: 'daniel', edad: 24},
    {nombre: 'ashley', edad: 19},
    {nombre: 'oliver', edad: 3},
    {nombre: 'oliver', edad: 3},
];

const personas$ = from(personas);
personas$.pipe(
    distinct((persona) => persona.nombre)
).subscribe({
    next: console.log
});