import { ReplaySubject, of } from "rxjs";
/**
 * ReplaySubject reemplaza desde el primer valor obtenido
 * Creo que primero son los next y despues los subscribe para tener el comportamineto esperado
 */
const saludo$ = new ReplaySubject(); 
saludo$.subscribe(x => console.log('valor: ', x));

of(1,2,3,4,5,6,7,8,9).subscribe({
    next: v => saludo$.next(` ${v}`)
});

//Comportamiento esperado del behaviorSubject
saludo$.subscribe(x => console.log('valor esperado: ', x))