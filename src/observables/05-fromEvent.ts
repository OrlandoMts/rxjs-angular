import { fromEvent, fromEventPattern, Observable } from "rxjs";

// Evento del dom

const obs1$ = fromEvent<PointerEvent>(document, 'click');
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log(val)
};

obs1$.subscribe(observer);
obs2$.subscribe(evento => console.log(evento.key));

// obs1$.subscribe({
//     next: data => obs3$.subscribe(data => console.log(data))
// });
// const obs3$ = new Observable(subs => {
//     subs.next('hola');
// });

