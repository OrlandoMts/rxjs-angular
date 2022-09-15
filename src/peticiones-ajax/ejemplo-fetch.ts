const url = 'https://api.github.com/userssss?per_page=5';

const manejaError = (resp: Response) => {
    if(!resp.ok) {
        throw new Error(resp.statusText)
    } 
    return resp;
}

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then( resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('catch error: ', err))

fetchPromesa
    .then(resp => manejaError(resp))
    .then( resp => resp.json())
    .then(data => console.log('data: ', data))
    .catch(err => console.warn('catch error: ', err))