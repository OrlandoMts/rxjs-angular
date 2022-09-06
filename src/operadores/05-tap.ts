// Su principal uso es disparar efectos secundarios,
// Suele usarse para depuración
// Aunque tenga un return implicito no lo retornará

import { map, of, range, tap } from "rxjs";

of(Math.random()).pipe(
    tap(console.log),
    map(n => n > 0.5 ? 'big' : 'small')
).subscribe(console.log);

const numeros$ = range(1,5);
numeros$.pipe(
    tap(x => {console.log('antes', x); return 100;}),
    map( ele => ele * 4),
    tap({
        next: valor => console.log('despues: ', valor),
        complete: () => console.log('se Completo el observable')
    })
).subscribe({ next: ele => console.log('subs', ele)}); //Quitar el subscribe para ver el ejemplo de abajo

// ESTO SOLO MOSTRARÁ LOS RETURN DEL MAP**
// numeros$.subscribe({
//     next: ele => console.log('subs', ele)
// });


const source = of(1, 2, 3, 4, 5);

source.pipe(
  tap(n => {
    if (n > 3) {
      throw new TypeError(`Value ${ n } is greater than 3`);
    }
  })
)
.subscribe({ next: console.log, error: err => console.log(err.message) });