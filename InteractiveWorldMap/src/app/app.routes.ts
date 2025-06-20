import { Routes } from '@angular/router';
import { App } from './app';    

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'App',
      pathMatch: 'full',
    },
    {
      path: 'App',
      component: App       
    }
];
