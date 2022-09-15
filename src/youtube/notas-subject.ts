import { from, Subject } from "rxjs";
// // Ejemplo 1

const subject = new Subject<number>();

// const multi$ = connectable(source$, {
    //     connector: () => subject
    // })
    
subject.subscribe({
    next: v => console.log(`observerA: ${v}`)
});
subject.subscribe({
    next: v => console.log(`observerB: ${v}`)
});

// multi$.connect();
const observable$ = from([1,2,3]) //[1,2,3,4,5]
const subs = observable$.subscribe(subject);


