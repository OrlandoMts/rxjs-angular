import { of, from } from "rxjs";

/**
 * of: crea una secuencia (obsevable) en base a los argumentos
 * from: crea un Obseravble en base a un arreglo, objeto, promise, iterable*, observable
 */


const observser = ({
    next: val => console.log(val),
    complete: () => console.log('completado...')
});

const source$ = from([1,2,3,4,5]); 
source$.subscribe(observser); //Imprime valores internos


const source2$ = of([1,2,3,4,5]);   //...[1,2,3,4,5] Saca elemento por elemento
source2$.subscribe(observser); //Imprime el arreglo completo porque es un solo elemento para el of

// const source3$ = from( fetch('https://api.github.com/user/OrlandoMts') );
// source3$.subscribe( async(resp) => {
//     const datResp = await resp.json();
//     console.log(datResp);
// } )