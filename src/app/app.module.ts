import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesListComponent } from './expenses/expnses-list/expenses-list.component';
import { ExpnsesItemComponent } from './expenses/expnses-item/expnses-item.component';
import {ExpenseService} from './expenses/expenses-service';
import { HeaderComponent } from './header/header.component';
import {Routes,RouterModule} from '@angular/router';
import { HomeCompComponent } from './home-comp/home-comp.component';
import {AppRoutingModule} from './appRoutingModule';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExpensesDashBoardComponent } from './expenses/expenses-dash-board/expenses-dash-board.component';
import {SideNavBarComponent} from './side-nav-bar/side-nav-bar.component';
import { AddExpenseComponent } from './expenses/expnses-list/add-expense/add-expense.component'
import {FormsModule} from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { ExtendedDetailsModalComponent } from './expenses/expnses-item/extended-details-modal/extended-details-modal.component';
import { EpenseGraphComponent } from './expenses/epense-graph/epense-graph.component';
import { ChartsModule } from 'ng2-charts';
import { ExpTotalcompComponent } from './expenses/exp-totalcomp/exp-totalcomp.component';
import { BankInfoComponent } from './banks/bank-info/bank-info.component';
import { UpdateComponent } from './expenses/expnses-item/update/update.component';

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
    HeaderComponent,
    HomeCompComponent,
    SidebarComponent,
    ExpensesDashBoardComponent,
    SideNavBarComponent,
    AddExpenseComponent,
    PaginationComponent,
    ExtendedDetailsModalComponent,
    EpenseGraphComponent,
    ExpTotalcompComponent,
    BankInfoComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ChartsModule
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
