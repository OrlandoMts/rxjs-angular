import { filter, from, reduce } from "rxjs";

const numeros: any = [1,2,'x',3,5,6,'y',7,8];
const reducer = (prev, curr) => {
    return prev + curr;
}

from(numeros).pipe(
    filter<any>(num => !isNaN(num)),
    reduce( reducer )
).subscribe(console.log);