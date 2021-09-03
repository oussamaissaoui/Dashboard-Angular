import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatDividerModule} from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu'
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';

import {ChartModule} from 'angular-highcharts'

//import { ChartOptions } from '../modules/Graphs/pie-wid/Chartoptions';

import {MatTabsModule} from '@angular/material/tabs';

import {MatTooltipModule} from '@angular/material/tooltip';

import {MatExpansionModule} from '@angular/material/expansion';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {ColorPickerModule} from 'primeng/colorpicker';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';













@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatStepperModule,
    MatCardModule,
    ChartModule,
    MatTabsModule,
    MatTooltipModule,
    MatExpansionModule,

    FormsModule,
    ReactiveFormsModule,

    MatSlideToggleModule,
    ColorPickerModule

    
    

    
    
    
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
