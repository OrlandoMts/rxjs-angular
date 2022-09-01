import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
    next: (value) => console.log('next ',value),
    error:(error) => console.warn(error),
    complete: ()=> console.log('completed')

}

const intervalo$ = new Observable<number>( subs => {

    const intervalR = setInterval(()=>{
        subs.next(Math.random())
    }, 1000);

    return () => {
        clearInterval(intervalR);
        console.log('fin del intervalo');
    };
});

/**
 * 1-Casteo multiple
 * 2.-Tambien es un observer
 * 3- Puede manjera el NExt, error y complete
 */
const subject$ = new Subject<number>();
const subscription = intervalo$.subscribe(subject$); // la emision del Observable(intervalo$) es emitida por el Observer(Subject) a sus Subscriptores


// const subscrition1 = intervalo$.subscribe(numRND => console.log('subs1', numRND));
// const subscrition2 = intervalo$.subscribe(numRND => console.log('subs2', numRND));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(numRND => console.log('subs2', numRND));

setTimeout(()=>{
    subject$.complete();
    subscription.unsubscribe();
}, 3500)
