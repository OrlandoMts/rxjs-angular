import { ajax } from "rxjs/ajax";

const httpurl = 'https://httpbin.org/delay/1';
// const httpurl = 'https://api.github.com/users?per_page=5';

const obs$ = ajax.getJSON(httpurl, {
    'Content-type': 'application/json',
    'mi-token': '19'
}); // El segundo argumento debe ser un {} para enviar datos en el header

obs$.subscribe(data => console.log(data));