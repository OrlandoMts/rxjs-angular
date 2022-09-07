// emite por defecto el primer valor del source$ Observable, pero la siguiente emision la hará
// en el tiempo establecido, sin importar si el source$ envio más emisiones
// Puede imitar el comportamiento del debounceTime

import { fromEvent, interval, throttleTime } from "rxjs";


const click$ = fromEvent(document, 'click');
click$.pipe(
    throttleTime(2000)
).subscribe({
    next: console.log
});


const interval$ = interval(1000);
interval$.pipe(
    throttleTime(2000)
).subscribe({
    next: console.log
});