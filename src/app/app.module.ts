import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { DefaultModule } from './struc/default/default.module';
import { GridsterModule } from 'angular-gridster2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PieWidComponent } from './modules/Graphs/pie-wid/pie-wid.component';
import {ChartModule} from 'angular-highcharts';
import {MatMenuModule} from '@angular/material/menu';

import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon'

import { SourceTokenInterceptorService } from './serives/source-token-interceptor.service';

import {MatInputModule} from '@angular/material/input';


import {ColorPickerModule} from 'primeng/colorpicker';






@NgModule({
  declarations: [
    AppComponent,
    
    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DefaultModule,
    GridsterModule,
    NgbModule,
    HttpClientModule,
    ChartModule,
    MatMenuModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    ColorPickerModule
   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SourceTokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
