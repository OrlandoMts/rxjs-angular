import { map, Observable, Subject, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

/**
* Primero son las subscripciones y despues las observables 
*/

interface PaisResp {
    args?:    {};
    data?:    string;
    files?:   {};
    form?:    {};
    headers?: Headers;
    origin?:  string;
    url?:     string;
}

const httpurl = 'https://httpbin.org/delay/1';

const peticionajax$ = ajax.getJSON(httpurl); //.subscribe(console.log)


const subject$ = new Subject<PaisResp>();

const subs1 = subject$.subscribe({
        next: (data) => console.log('subs1: ', data),
        complete: () => console.log('Complete') 
    });
    
const subs2 = subject$.subscribe({
    next: (data) => console.log('subs2: ', data),
    complete: () => console.log('Complete') 
});

const subscription = peticionajax$.subscribe(subject$)
    
    // subscription.unsubscribe(); usar con un setTimeOut
    

// Ejemplo *************
// subject$.subscribe({
//     next: (val) => console.log(`ObsA: ${val}`),
//     error: err => console.log(err),
//     complete: () => console.log('Complete') 
// });

// subject$.subscribe({
//     next: (val) => console.log(`ObsB: ${val}`),
//     error: err => console.log(err),
//     complete: () => console.log('Complete') 
// });

// subject$.next(1);
// subject$.next(2);


