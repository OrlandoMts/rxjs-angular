// debounceTime: emite el ultimo valor del Obs inicial/anterior despues del tiempo establecido,
// asi restringue la cantidad de emisiones
import { debounceTime, distinctUntilChanged, filter, fromEvent, map } from "rxjs";

const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$.pipe(
    debounceTime(500),
    map( ({target}) => (target as HTMLInputElement).value),
    filter(value => value.trim() !== ""), // Bonus: evito enviar cadenas vacias
    distinctUntilChanged(), // Me aseguro de no hacer la misma peticion dos veces
).subscribe(console.log)