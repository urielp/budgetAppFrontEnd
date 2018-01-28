import {RouterModule, Routes} from '@angular/router';
import {HomeCompComponent} from './home-comp/home-comp.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {NgModule} from '@angular/core';

const applicationRouting: Routes = [
  {path: '', component: HomeCompComponent},
  {path: 'expenses', component: ExpensesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(applicationRouting)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
