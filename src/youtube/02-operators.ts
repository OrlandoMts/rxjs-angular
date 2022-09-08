import { Observable, Observer } from "rxjs";
import { map } from "rxjs/operators";

const myObserver: Observer<any> = {
    next: (val) => console.log(val),
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

// {
//     if(!isNaN){
//         return val
//     }
//     return `${val} no es un numero`;
// }

myObservable.pipe(
    map<any,any>((val) => !isNaN(val) ? val+10 : `${val} no es un numero`)
).subscribe(myObserver);
myObservable2.subscribe(myObserver);