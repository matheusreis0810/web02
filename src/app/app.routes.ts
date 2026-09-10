import { Routes } from '@angular/router';
import { Sobre } from './sobre/sobre';

export const routes: Routes = [
    {path: "sobre", component:Sobre},
    {path: "sobre-minha-loja", component:Sobre},
    {path: "", component:Sobre}
];
