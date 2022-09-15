import { of, ReplaySubject } from "rxjs";

// Emite los ultimos valores dependiendo de la canitdadestablecida
// Creo que primero son los next y despues los subscribe para tener el comportamineto esperado
const subject = new ReplaySubject(2); 


subject.next(1);
subject.next(2);

subject.subscribe((v) =>console.log(`primer subj: ${v}`));

subject.next(3);
subject.next(4);

subject.subscribe((v) =>console.log(`segundo subj: ${v}`));


const saludo$ = new ReplaySubject(2); 
saludo$.subscribe(x => console.log('valor: ', x));

of(1,2,3,4,5,6,7,8,9).subscribe({
    next: v => saludo$.next(v)
});

//Comportamiento esperado del behaviorSubject
saludo$.subscribe(x => console.log('valor esperado: ', x))