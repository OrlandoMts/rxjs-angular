import { Observable, Observer } from "rxjs";

const myObserver: Observer<any> = {
    next: (val) => !isNaN(val) ? console.log(val + 10) : console.log(`${val} no es un numero`),
    error: error => console.info(error),
    complete: () => console.log('fin del observable')
}

// El Observable ya no emite valores despues de un .complete o un .error 
const myObservable = new Observable( subs => {
    subs.next('Buenos días');
    subs.next(10);
    subs.next(20);
    subs.next('viendo un video');
    subs.error('Erro.. :('); 
});

const myObservable2 = new Observable(subs => {
    subs.complete();
});

myObservable.subscribe(myObserver);
myObservable2.subscribe(myObserver);