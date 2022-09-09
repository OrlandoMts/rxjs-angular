// Sirve para trabajar con Observables que internamente retornan Observables
// En caso de que source$ emita otro Observable
// EL mergeAll se suscribe y estará pendiente de las las emisiones de un nuevo observable

// El mergeAll se completa() hasta que todos los Observables a los que se suscribio se completen

import { debounceTime, fromEvent, map, mergeAll, Observable, observable, pluck } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { GithubUser, JSONgithub } from "../oper-transformacion/jsongithub.interface";

// ******** HTML
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList)
// ******** HTML FIN


const mostrarUsuarios = (usuarios: GithubUser[]) => {
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = `Visitar al usuario ${usuario.login}`;
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login, '');
        li.append(anchor);

        orderList.append(li);
    }
}

// streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup').pipe(
    debounceTime(500),
    map<KeyboardEvent, Observable<JSONgithub>>( (event) => {
        const {value} = event.target as HTMLInputElement;
        return ajax.getJSON(`https://api.github.com/search/users?q=${value}`);
        // Retorna un Observable
    }),
    mergeAll(), // Aqui ya tengo el flujo de la data que trae la peticion
    map<JSONgithub, GithubUser[]>( (sesions) => {
        const {items} = sesions;
        return items;
    })
);

input$.subscribe({
    next: mostrarUsuarios
})