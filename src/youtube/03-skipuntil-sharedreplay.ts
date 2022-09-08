import { fromEvent, interval, shareReplay, skipUntil } from "rxjs";

// Se quedo a medias
const interval$ = interval(2000);
const click$ = fromEvent(document, 'click');

const until$ = interval$.pipe(
    skipUntil(click$),
).subscribe(x => console.log('until', x));

const replay$ = interval$.pipe(
    shareReplay()
);


click$.subscribe(() => {
    replay$.subscribe(x => console.log('sharedReplay', x));
})