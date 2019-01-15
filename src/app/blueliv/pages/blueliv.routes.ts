import { RouterModule, Routes } from '@angular/router';
import { BluelivComponent } from './blueliv/blueliv.component';

const APP_ROUTE: Routes = [
    { path: '', component:  BluelivComponent},
    {path: '**', pathMatch: 'full', redirectTo: '' }
]

export const APP_ROUTING = RouterModule.forChild(APP_ROUTE);