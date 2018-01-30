import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {HomeCompComponent} from './home-comp/home-comp.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {NgModule} from '@angular/core';
import {ExpensesListComponent} from './expenses/expnses-list/expenses-list.component';

const applicationRouting: Routes = [
  {path: '', component: HomeCompComponent},
  {path: 'expenses', component: ExpensesComponent,
    children: [
      {path: 'expensesList', component: ExpensesListComponent}
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
