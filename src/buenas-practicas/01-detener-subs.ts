import { fromEvent, interval, Subject, takeUntil } from "rxjs";

// // Streams
const stop$ = new Subject<void>();
const trainer$ = interval(2000);
const pokemon$ = interval(1000);

trainer$.pipe(
    takeUntil(stop$)
).subscribe(trainer => console.log('trainer ', trainer));

pokemon$.pipe(
    takeUntil(stop$)
).subscribe(pokemon => console.log('pokemon ', pokemon));


function stopObservables() {
    stop$.next();
    stop$.complete();
}

//Podria llamarla en el onDestroy
setTimeout(() =>{
    stopObservables(); 
},5000)


// **** https://www.youtube.com/watch?v=giPbcKcytiA