import { BehaviorSubject, of } from "rxjs";
/**
 * BehaviorSubject emite el ultimo valor guardardado
 */
const saludo$ = new BehaviorSubject(0); //Pide un valor inicial y emite valores en base al tipo de dato inicial

of(1,2,3,4,5,6,7,8,9).subscribe({
    next: v => saludo$.next(v)
});

//Comportamiento esperado del behaviorSubject
saludo$.subscribe(x => console.log('valor final: ', x))