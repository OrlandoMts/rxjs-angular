// Recibe como parametro un Observable, y cuando ese Obs emita un valor, el sample$
// emitira el ultimo valor emitido por el primer Observable o el source$
// Cuando se completan los Observables tambien se completa el smaple$

import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent(document, 'click');
interval$.pipe(
    sample(click$)
).subscribe(console.log)