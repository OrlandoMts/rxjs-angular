import { of } from "rxjs";


// const obs$ = of(1,2,3,4,5,6);

const obs$ = of( [1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

obs$.subscribe({
    next: (data) => console.log('next', data),
    error: null,
    complete: () => console.log('Fin de la secuencia')
});