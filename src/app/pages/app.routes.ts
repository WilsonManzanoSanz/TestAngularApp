import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CrimeserverComponent } from './crimeserver/crimeserver.component';
import { CrimeServerDetailsComponent } from './crimeserver/crime-server-details/crime-server-details.component';
import { BluelivModule } from './../blueliv/blueliv.module';

const APP_ROUTE: Routes = [
    { path: 'dashboard', component:  DashboardComponent},
    { path: 'crimeserver', component: CrimeserverComponent},
    { path: 'crimeserver/:id', component: CrimeServerDetailsComponent},
    { path: 'blueliv', loadChildren: () => BluelivModule},
    {path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);