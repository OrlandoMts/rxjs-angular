import { ajax } from "rxjs/ajax";

const url2 = 'https://httpbin.org/delay/1';

ajax.getJSON(url2, {
    'token': '19'
}).subscribe(console.log);


ajax.post(url2, {
    id: 1,
    nombre: 'orlando'
 }, {
    'token': '19'
}).subscribe(console.log);

ajax.put(url2, {
    id: 1,
    nombre: 'orlando'
 }, {
    'token': '19'
}).subscribe(console.log);