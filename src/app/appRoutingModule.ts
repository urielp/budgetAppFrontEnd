import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {HomeCompComponent} from './home-comp/home-comp.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {NgModule} from '@angular/core';
import {ExpensesListComponent} from './expenses/expnses-list/expenses-list.component';
import {ExpensesDashBoardComponent} from './expenses/expenses-dash-board/expenses-dash-board.component';
import {AddExpenseComponent} from './expenses/expnses-list/add-expense/add-expense.component';

const applicationRouting: Routes = [
  {path: '', component: HomeCompComponent},
  {path: 'expenses', component: ExpensesComponent,
    children: [
      {path: 'expDashBoard', component: ExpensesDashBoardComponent},
      {path: 'expensesList', component: ExpensesListComponent, children: [{path: 'add', component: AddExpenseComponent}]}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(applicationRouting)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor(private route: ActivatedRoute) {
  }
}
