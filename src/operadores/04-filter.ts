// Filtra las emiciones que emite un observable

import { from, fromEvent, Observable, of, range } from "rxjs";
import {filter, map} from 'rxjs/operators'

interface Heroe {
    tipo: string,
    nombre: string
}

// EJEMPLO #1
const pares$ = range(1,10).pipe(
    filter(value => value % 2 === 0)
);

pares$.subscribe({
    next: console.log
});

// EJEMPLO 2
const personajes: Heroe[] = [
    {tipo: 'heroe', nombre: 'batman'},
    {tipo: 'heroe', nombre: 'robin'},
    {tipo: 'villano', nombre: 'joker'},
];

const villanos$: Observable<Heroe> = from(personajes).pipe(
    filter(per => per.tipo === 'villano')
);

villanos$.subscribe({
    next: console.log
});

// EJEMPLO #3 - ENCADENAMIENTO
const keyup$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
    map( event => event.code), // <KeyboardEvent, string> (parametro recibido, parametro emitido al siguiente operador)
    filter(data => data === 'Enter')
);

keyup$.subscribe({next: console.log})