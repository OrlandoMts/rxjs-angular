import { interval, timer } from "rxjs";


const observer = {
    next: val => console.log(val),
    complete: () =>console.log('completod')
}

/**
 * Los interval y los timer son asincronos y su primer valor es cero
 */
const interval$ = interval(2000);

// const timer$ = timer(2000); 
// const timer$ = timer(2000,1000); // Es como crear un interval que inicia a los dos segundos y emite data cada 1s
const fechaFutura = new Date();
fechaFutura.setSeconds( fechaFutura.getSeconds() + 5);
const timer$ = timer(fechaFutura); // Recibe un tiempo para saber cuando emitir el observable

console.log('inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');

// En este ejemplo el timer si ejecuta el complete del observer pero el interval no porque nunaca (en este ejemplo) se detiene 
// Aunque tenga cancele la subscripcion