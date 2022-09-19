/**
 * Es una FUNCION
 * Recibe observables, y los emite de manera secuencial.
 * Hasta que se complete el obs anterior se ejecutará el siguiente
 */

 import { concat, interval, of, take } from "rxjs";

 const interval$ = interval(1000);
 concat(
     interval$.pipe(take(4)),
     interval$.pipe(take(2)),
     of(10)
 ).subscribe(console.log)