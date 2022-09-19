
/**
 * Caso de uso más comun
 */

 import { forkJoin } from "rxjs";
 import { ajax } from "rxjs/ajax";
 
 const GITHUB_API_URL = 'https://api.github.com/users';
 const GITHUB_USER = 'orlandomts';
 
 forkJoin({
     usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
     repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
 }).subscribe(console.log)
 
 
 forkJoin([
     ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
     ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
 ]).subscribe(console.log)