import { Routes } from '@angular/router';

export const rutas: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modulos/inicio/inicio')
        .then(m => m.Inicio)
  }
];
