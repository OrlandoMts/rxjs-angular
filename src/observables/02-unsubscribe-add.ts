import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
    next: (value) => console.log('next ',value),
    error:(error) => console.warn(error),
    complete: ()=> console.log('completed')

}

const intervalo$ = new Observable<number>( subs => {
    let contador = 0;

    const interval = setInterval( () => {
        contador += 1;
        subs.next(contador);

        console.log("count's value from interval ", contador); // ejemplo para ver que aunque haga unsubscribe se seguira ejecutando, a menos que haga un return 
    }, 1000);

    // setTimeout(()=> {
    //     subs.complete();
    // }, 2500);

    // This stops the observable when an unsubscribe is call
    return () => {
        clearInterval(interval);
        console.log('fin del obsevable')
    }

});

const countSubscription = intervalo$.subscribe(observer);
const countSubscription2 = intervalo$.subscribe(observer); 
// Cuando me subscribo a un observable se crea otra instancia
// y ejecuta todo el codigo de nuevo del observable

countSubscription.add(countSubscription2); // puedo agregar mas .add con 'Susbcriptions'

setTimeout( ()=> {
    countSubscription.unsubscribe();
    // countSubscription2.unsubscribe();

    console.log("end settimeout");
},3000)

// Nota: el complete del subs (Subscriber) no es lo mismo que el unsubscribe
// El complete ejecutara el codigo que este en el complete (ver linea 6) 
// mientras que el unsubscribe ejecuta directamente el return 