/**
 * Recibe como argumentos observables, emite valores hasta que todos
 * los observables internos hayan emitido almenos un valor.
 * Los valores salen en un arreglo justo como recibio los arg***
 */

 import { combineLatest, combineLatestWith, fromEvent, map } from "rxjs";

 const input1 = document.createElement('input');
 const input2 = document.createElement('input');
 
 input1.placeholder = 'email@gmail.com';
 input2.placeholder = '***************';
 input2.type = 'password';
 
 document.querySelector('body').append(input1, input2);
 
 // Helper
 // const getInputStream = ( elem: HTMLElement) => {
 //     return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
 //         map( (event) => (event.target as HTMLInputElement).value)
 //     )
 // }
 
 const input1$ = fromEvent<KeyboardEvent>(input1, 'keyup');
 const input2$ = fromEvent<KeyboardEvent>(input2, 'keyup')
 
 input1$.pipe(
     combineLatestWith(input2$),
     map( ([event1,event2]) => (event1.target as HTMLInputElement).value + ' - ' + (<HTMLInputElement>event2.target).value)
 ).subscribe(console.log)
 
 // combineLatest(
 //     getInputStream(input1),
 //     getInputStream(input2),
 // ).subscribe(console.log)