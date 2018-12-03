import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { BoardReportComponent } from './board-report/board-report.component';
import { BoardGraphicComponent } from './board-graphic/board-graphic.component';
import { BoardPizzaComponent } from './board-pizza/board-pizza.component';
import { BoardWordsComponent } from './board-words/board-words.component';

import { ChartsModule } from 'ng2-charts';
import { UserdetailsComponent } from './userdetails/userdetails.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionComponent,
    BoardReportComponent,
    BoardGraphicComponent,
    BoardPizzaComponent,
    BoardWordsComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
