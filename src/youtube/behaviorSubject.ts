import { BehaviorSubject, fromEvent, interval, map, merge, of, tap } from "rxjs";

const subject = new BehaviorSubject(0) //Valor inicial
const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
    map( ({ clientX, clientY }) => ({clientX, clientY}) )
);

const interval$ = interval(1000).pipe(
    tap( num => subject.next(num))
)

// Mezcla los valores de los obsevables y me subscribo a ambos,
// Evito hacer dos subscripciones
merge(click$, interval$).subscribe(console.log);

// click$.subscribe(console.log);
// interval$.subscribe(console.log);

