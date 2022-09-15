/**
 * Permite compartir la observable entre dos o mas subscriptores
 */

 import { map, Observable, share, tap, timer } from "rxjs";


 const time$: Observable<number> = timer(1000);
 
 const obs = time$.pipe(
     tap( ()=> console.log('Tap: ')),
     map( ()=> console.log('END OBS'))
 );
 
 // obs.subscribe(console.log);
 // obs.subscribe(console.log);
 
 // Solo ejecuta una vez el obs y las emisiones las comparte por igual una sola vez
 // a sus subscriptores
 const shareObs$ = obs.pipe(share()); 
 
 const subs01 = shareObs$.subscribe(console.log);
 const subs02 = shareObs$.subscribe(console.log);