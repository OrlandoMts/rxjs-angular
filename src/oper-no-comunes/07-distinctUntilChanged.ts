// Emite los valores siempre y cuando la emision anterior no sea la misma,
// o sea puede emitir repetidos simpre que no sean dos seguidos

import { distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of(1,2,2,1,3,6,4,5,7,8,5,9);
numeros$.pipe(
    distinctUntilChanged()
).subscribe({
    next: console.log
});

// Como distinguir Objetos:
const personas = [
    {nombre: 'daniel', edad: 24},
    {nombre: 'ashley', edad: 19},
    {nombre: 'oliver', edad: 3},
    {nombre: 'oliver', edad: 3},
    {nombre: 'daniel', edad: 24}, // Pero si emite duplicados que no sean seguidos
];

const personas$ = from(personas);
personas$.pipe(
    distinctUntilChanged((prev, curr) => prev.nombre === curr.nombre)
).subscribe({
    next: console.log
});