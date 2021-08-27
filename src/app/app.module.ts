import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableauModule } from 'ngx-tableau';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { TableauChartComponent } from './components/tableau/tableau-chart/tableau-chart.component';
import { AddChartComponent } from './components/tableau/add-chart/add-chart.component';
import { TableauTableComponent } from './components/tableau/tableau-table/tableau-table.component';
import { TableauTableMaterialComponent } from './components/tableau/tableau-table-material/tableau-table-material.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TableauComponent,
    TableauChartComponent,
    AddChartComponent,
    TableauTableComponent,
    TableauTableMaterialComponent
  ],
  imports: [
    BrowserModule,
    TableauModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
