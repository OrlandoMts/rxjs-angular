// Es util para limitar la cantidad de emiciones que un observable puede tener
// Hace que el Obsserver se complete, alguno lo suelen usar para cancelar una subs http - "take(1)"

import { of, take } from "rxjs";

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    take(4)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})