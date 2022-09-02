import { Observer, range } from "rxjs";
import { map } from 'rxjs/operators';

console.log('Index');

/** MAP
 * Tansforma lo que emite el Observable en algo que yo necesite
 * 1.- Extraer informacion
 * 2.- Transformar la información
 * 3.- O devolver algo totalmente diferente
 */

const obs: Observer<number> = {
    next: (val) => console.log(val),
    error: (error) => console.log(error),
    complete: () => console.warn('completed')
}

const range$ = range(1,10);

const numTo2 = range$.pipe( map( num => num * 10) );
numTo2.subscribe(obs);

/**
 * Aqui lo hice sintetizado 
 */ 
range(1,5).pipe(
    map<number,number>(num => num * 10) // Recibe el valor del operador anterior
).subscribe(obs);

setTimeout(()=> {
    // subscription.unsubscribe();
}, 10000)
        