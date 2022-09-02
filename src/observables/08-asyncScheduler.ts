// ****** Crea una subscripcion y no un observable **********
// Puedo hacer la funcion de setTimeout y setInterval

import { asyncScheduler } from "rxjs";

const saludar = () => console.log('hoola');
const saludar2 = nombre => console.log(`hola ${nombre}`);
const saludar3 = (nombre: string, apellido: string) => console.log(`hola ${nombre} ${apellido}`);

/**
 * Primer argumento: funcion que quiero ejecutar. Se envia la funcion sin (), o en un su defecto una () => {}
 * Segundo argumento: es un delay, la cantidad de tiempo que quiero que pase para que luego se ejecute la funcion
 * Tercer argunemento: state. Es el estado de lo que hara el scheduler pero solo recibe un argumento
 */

// PARA SETTIMEOUT
asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(() => saludar2('daniel'), 3000); // Otra manera sin usar el state, de lo contrario usaria el state con el arg 'daniel
// asyncScheduler.schedule(saludar3, 4000, {nombre: 'orlando', apellido: 'montes'});

// PARA SETINTERVAL (no usar funciones de flecha, solo normales)
// el tercer argumento es el estado inicial
const subs = asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule(state + 1, 1000);
},4000, 2);

setTimeout(() =>{
    subs.unsubscribe()
}, 6000); //Solo imprimirá dos porque empezo en 4s