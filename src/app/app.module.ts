import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableauModule } from 'ngx-tableau';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { TableauChartComponent } from './components/tableau/tableau-chart/tableau-chart.component';
import { AddChartComponent } from './components/tableau/add-chart/add-chart.component';
import { TableauTableComponent } from './components/tableau/tableau-table/tableau-table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TableauComponent,
    TableauChartComponent,
    AddChartComponent,
    TableauTableComponent
  ],
  imports: [
    BrowserModule,
    TableauModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
