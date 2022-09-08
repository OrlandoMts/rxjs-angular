import { catchError, map, of } from "rxjs";

const saludos$ = of('Bienvenidos', 'como estan', 1).pipe(
    map((v:any) => {
        if(!isNaN(v)){
            throw 'Eso no es un saludo -> ' + v;
        }
        return v;
    }),
    catchError( error => {
        throw 'Error: ' + error;
    })
);

saludos$.subscribe({
    next: console.log,
    error: error => console.log(error)
});