/**
 * SwitchMap emite Observable y
 * A diferencia del mergeMap, cuando el source$ emite un valor, si ya habia emitido otro anterior; 
 * el switchMap completa la emision anterior, en pocas palabras solo emite el ultimo valor generado
 * por el source$
 * 
 * 
 * Solo mantiene un subscripcion activa mientras que el mergeMap mantiene todas las que yo quiera activas
 */

 import { EMPTY, fromEvent, interval, map, merge, scan, switchMap, takeWhile, tap } from "rxjs";

 let status: boolean = false;
 
 const interval$ = interval(1000);
 
 const click$ = fromEvent(document, 'click')
     .pipe( 
         map( ()=> status = !status), //Retornará true o false
         switchMap( (status)=> (status ? interval$ : EMPTY)), //cuando sea false, Empty vacia el observable interval$. 
         scan( (acc, curr) => (curr ? curr + acc : acc), 10),
         takeWhile( value => value <= 17)
     ); 
 
 click$.subscribe(console.log)