import { fromEvent, Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';

const div = document.createElement('div');
div.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim metus pharetra metus elementum porttitor. Cras malesuada augue vitae tellus consequat aliquam. Ut id blandit erat. Suspendisse consequat neque consequat lectus pellentesque, ut fermentum risus lobortis. Mauris ultrices dui sed justo pharetra, a convallis nisi mattis. Fusce gravida, lorem ac viverra suscipit, nisl est ullamcorper ante, eget vestibulum metus arcu at eros. Vivamus sed libero orci. In mollis pharetra sodales. Vivamus a tempor sem, eu bibendum mi. Nam vehicula nunc id ligula tristique iaculis.
<br/><br/>
Pellentesque sed interdum lorem. Ut viverra erat nec sapien lacinia, eu rutrum elit interdum. Morbi tristique lectus ut venenatis consectetur. Curabitur at faucibus nulla, vitae finibus leo. Donec nibh mauris, dignissim a sapien sit amet, rhoncus accumsan purus. Nulla consectetur vestibulum dui ac finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet sapien orci. Sed ipsum felis, varius nec tellus et, faucibus congue odio. Maecenas vulputate tincidunt diam nec feugiat. Phasellus enim ante, aliquam non eros rutrum, vestibulum ullamcorper eros. Phasellus eu metus at ligula aliquet mollis.
<br/><br/>
Pellentesque interdum tincidunt viverra. Mauris at metus non lectus cursus fermentum vitae ut massa. Sed vitae diam vitae odio pellentesque mattis sit amet auctor libero. Sed est dolor, congue ut justo eget, aliquet molestie risus. Donec lobortis ut quam vel sollicitudin. Aenean elementum elementum elit ullamcorper imperdiet. Duis eu venenatis sapien. Curabitur suscipit pellentesque est, vitae accumsan tortor gravida rhoncus. Vivamus et rhoncus lorem, id congue metus. Sed venenatis ex quis est efficitur cursus. Praesent felis enim, hendrerit et ante id, euismod posuere ligula. Mauris bibendum nibh sit amet suscipit placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br/><br/>
Phasellus faucibus turpis felis, id faucibus risus mollis et. Morbi tellus odio, cursus vitae dolor vel, varius laoreet justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, est aliquet varius varius, purus mi sodales eros, a dignissim velit sem non justo. Proin id fringilla mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tristique nisi ut libero gravida, dapibus pharetra magna pharetra. Nunc ac leo quis nulla egestas egestas ac id orci. Aenean nunc leo, imperdiet et sodales eu, tristique a libero. Quisque suscipit sed elit at pellentesque. Praesent malesuada nunc vitae libero cursus pharetra. Sed scelerisque arcu ut nunc suscipit varius. Vestibulum ac tortor ut mauris bibendum tristique. Morbi malesuada sem quis lorem suscipit, imperdiet venenatis ipsum molestie. Ut lectus nibh, scelerisque nec dolor sed, pharetra ullamcorper metus.
<br/><br/>
Quisque a lacus et nisl dictum mattis eu ac leo. Aenean commodo erat lectus, nec elementum dui mattis vitae. Suspendisse tempor mauris id sapien molestie sodales rutrum eget libero. Sed eu augue enim. Nullam laoreet tellus non nisi interdum, sed vestibulum nunc molestie. Donec fermentum venenatis bibendum. Nam auctor ante nisl, eu tincidunt nibh lacinia sed.
`;

const body = document.querySelector('body');
body.append(div);

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar' );
body.append(progressBar);

/**
 * Funcion para calcular el scroll
 */
const calcularPorcentajeScroll = (event: Event): number => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = (event.target as Document).documentElement;

    return ( scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = fromEvent(document, 'scroll');
const progress$: Observable<Event> = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event)), //El map retorna lo que retornará la funcion
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
    if (Number(porcentaje) > 50) {
        progressBar.style.backgroundColor = 'red';
    } else {
        progressBar.style.backgroundColor = '#9034AA';
    }
});
