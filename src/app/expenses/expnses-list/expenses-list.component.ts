import {Component, OnInit, ViewChild} from '@angular/core';
import Expense from '../../models/expenses.model';
import {ExpenseService} from '../expenses-service';
import {AddExpenseComponent} from './add-expense/add-expense.component';
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  @ViewChild(AddExpenseComponent) addExpModal: AddExpenseComponent ;
    expensesList: Expense[];
  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseService.getExpensesList().subscribe((expenses) => {
      console.log("Expenses");
      console.log(expenses);
      if (expenses.success) {
        this.expensesList = expenses.data;
      } else {
        alert(expenses.message);
      }
    });
  }
  Uopen() {
    console.log('opening modal');
    console.log(this.addExpModal);
    this.addExpModal.open();
  }

}
