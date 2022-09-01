import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next: (value) => console.log('next ',value),
    error:(error) => console.warn(error),
    complete: ()=> console.log('completed')

}
// console.log('Hola!');

const obs$ = new Observable<string>(subs => {
    subs.next('Holaa');
    // subs.unsubscribe();
    subs.next('Holaaa');
    subs.complete();
});

obs$.subscribe(observer);

