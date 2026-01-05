import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout';
import { AddBranchComponent } from './features/branch/add-branch/add-branch';
import { VisitorsListComponent } from './features/vistors/visitors-list/visitors-list';

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
                path: 'visitors-list',
                component: VisitorsListComponent
            },
            {
                path: '',
                redirectTo: 'add-branch',
                pathMatch: 'full'
            }
        ]
    }
];
