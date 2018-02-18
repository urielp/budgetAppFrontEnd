import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {HomeCompComponent} from './home-comp/home-comp.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {NgModule} from '@angular/core';
import {ExpensesListComponent} from './expenses/expnses-list/expenses-list.component';
import {ExpensesDashBoardComponent} from './expenses/expenses-dash-board/expenses-dash-board.component';
import {AddExpenseComponent} from './expenses/expnses-list/add-expense/add-expense.component';
import {EpenseGraphComponent} from './expenses/epense-graph/epense-graph.component';

const applicationRouting: Routes = [
  {path: '',
    component: HomeCompComponent,
  children: [
    {path: 'expenses', component: ExpensesComponent,
      children: [
        {path: 'expDashBoard', component: ExpensesDashBoardComponent},
        {path: 'expensesList', component: ExpensesListComponent,
                                children: [{path: 'add', component: AddExpenseComponent}]},
        {path: 'expensesList/:month', component: ExpensesListComponent,
                                children: [{path: 'add', component: AddExpenseComponent}]},
        {path: 'expGraph', component: EpenseGraphComponent}
      ]
    }
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
