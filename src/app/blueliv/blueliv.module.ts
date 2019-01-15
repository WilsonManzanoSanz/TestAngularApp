import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BluelivComponent } from './pages/blueliv/blueliv.component';
import { BluelivService } from './services/blueliv.service';
import { APP_ROUTING } from './pages/blueliv.routes';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING,
  ],
  providers:[
    BluelivService
  ],
  declarations: [BluelivComponent]
})
export class BluelivModule { }
