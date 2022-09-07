// takeUnitl: Recibe como argumento un Observable. Hasta que el Obs como argumento emita
// su primer valor dejara de emitir valores

// skip: slata u omite la cantidad de emisiones iniciales; en los encadenamientos detiene
// todo despues del skip cuando la condicion se cumple. Es como si cortara o detuviera el flujo de info

import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append( boton );

const click$ = fromEvent<PointerEvent>(boton, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(2),
    tap(() => console.log('tap después de skip'))
);

const interval$ = interval(1000);
interval$.pipe(
   takeUntil(click$) 
).subscribe({
    next: console.log,
    complete: () => console.log('se detuvo')
})