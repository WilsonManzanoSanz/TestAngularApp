import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BluelivComponent } from './pages/blueliv/blueliv.component';
import { BluelivService } from './services/blueliv.service';
import { APP_ROUTING } from './pages/blueliv.routes';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../intercerptor/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING,
    HttpClientModule,
  ],
  providers:[
    BluelivService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  declarations: [BluelivComponent]
})
export class BluelivModule { }
