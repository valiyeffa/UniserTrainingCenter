import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout-component/layout-component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./features/home/home').then(m => m.Home),
                title: 'Home'
            }
        ]
    }
];
