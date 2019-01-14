import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrimeserverComponent } from './pages/crimeserver/crimeserver.component';
import { CrimeServerDetailsComponent } from './pages/crimeserver/crime-server-details/crime-server-details.component';

// Routes
import { APP_ROUTING } from './pages/app.routes';

// Chart
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent,
    CrimeserverComponent,
    CrimeServerDetailsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
