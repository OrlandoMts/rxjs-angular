import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

/**
 * Al manejar el error con el catchError, <el obs$ se completará> porque en ligar de recibir el error
 * recibira el objeto creado con el of.
 * 
 * Si no manejo el error así, el subscribe emitira el 'error' de su definición
 * 
 * NOTA: probar quitando el operador del pipe y poner una url no valida
 */

const httpurl = 'https://httpin.org/delay/1';

const manejaError = ( resp: AjaxError ) => {
    console.warn('error emitido desde la func manejaError: ', resp.message)
    return of({
        ok: false,
        usuarios: []
    })
};

const obs$ = ajax.getJSON(httpurl)
    .pipe(
        catchError((data) => manejaError(data))    
    ).subscribe({
        next: val => console.log('next: ', val),
        error: err => console.warn('error desde el subs: ', err),
        complete: () => console.log('complete')
    });
