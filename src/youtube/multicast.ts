import { connectable, from, interval, Subject, tap } from "rxjs";
/**
 * Permite que un Observable que ya completo se pueda conectar a un Subject
 */
// Ejemplo 1
const source$ = from([1,2]); //[1,2,3,4,5]
const subject = new Subject();

const multi$ = connectable(source$, {
    connector: () => subject
})

multi$.subscribe({
    next: v => console.log(`observerA: ${v}`)
});
multi$.subscribe({
    next: v => console.log(`observerB: ${v}`)
});

multi$.connect();

// Ejemplo 2

const source2$ = interval(3000)
    .pipe(
        tap( n => console.log('ID: ', n) )
    );

const multi2$ = connectable(source2$, {
    connector: () => new Subject() //Este es otro subject
})

const xxd = multi2$.subscribe( v => console.log('localhost:3000/' + v));
multi2$.subscribe( v => console.log('localhost:3000/' + (v+1)));
multi2$.connect()

// export {xxd};