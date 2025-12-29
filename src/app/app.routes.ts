import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout';
import { AddBranchComponent } from './features/branch/add-branch/add-branch';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'add-branch',
                component: AddBranchComponent
            },
            {
                path: '',
                redirectTo: 'add-branch',
                pathMatch: 'full'
            }
        ]
    }
];
