// Es una funcion acumuladora que emite su resultado cuando se completa el Observable

import { interval, reduce, take } from "rxjs";

const totalReducer = (acc: number, curr: number) =>{
    return acc + curr;
}

interval(1000).pipe(
    take(3),
    reduce( totalReducer, 2 )
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: ()=> console.log('Completado')
});