import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesListComponent } from './expenses/expnses-list/expenses-list.component';
import { ExpnsesItemComponent } from './expenses/expnses-item/expnses-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ExpenseService} from './expenses/expenses-service';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpensesListComponent,
    ExpnsesItemComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
