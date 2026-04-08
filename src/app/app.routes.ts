import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout-component/layout-component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./features/home/home').then(m => m.Home),
                title: 'Home'
            }
        ]
    }
];
