import { debounceTime, fromEvent, map } from "rxjs";
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList)

// streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');
input$.pipe(
    debounceTime(500),
    map( (event) => {
        const {value} = event.target as HTMLInputElement;
        return ajax.getJSON(`https://api.github.com/users/${value}`)
        // Retorna un Observable
    })
    ).subscribe({
        //Si quisiera conocer la url del usuario, tendria quehacer un map a la data emitida
        // Y se puede hacer mas dificil de mantener esta cadena de Observavbles y de sus operadores
    next: resp => resp.subscribe(console.log) 
})