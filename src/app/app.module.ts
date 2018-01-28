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
import {Routes,RouterModule} from '@angular/router';
import { HomeCompComponent } from './home-comp/home-comp.component';
import {AppRoutingModule} from './appRoutingModule';
import { SidebarComponent } from './sidebar/sidebar.component';

const applicationRouting: Routes = [
  {path: '', component: HomeCompComponent},
  {path: 'expenses', component: ExpensesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpensesListComponent,
    ExpnsesItemComponent,
    NavbarComponent,
    HeaderComponent,
    HomeCompComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
