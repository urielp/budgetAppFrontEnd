import {Component, OnInit, ViewChild} from '@angular/core';
import Expense from '../../models/expenses.model';
import {ExpenseService} from '../expenses-service';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  @ViewChild(AddExpenseComponent) addExpModal: AddExpenseComponent ;
  expensesList: Expense[];
  expense: Expense;
  pages: any;
  total: any;
  limit: any;

  constructor(private expenseService: ExpenseService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.expenseService.getExpensesList().subscribe((expenses) => {
      if (expenses.success) {
        this.expensesList = expenses.data as Expense[];
        this.total = +expenses.total;
        this.pages = +expenses.pages;
        this.limit = +expenses.limit;
        console.log(this.total + ' ' + this.pages + ' ' + this.limit);
      } else {
        alert(expenses.message);
      }
    });
  }
  // open modal to create new expense
  Uopen() {
    this.addExpModal.open();
  }

  // TODO:add the routing part here
  newEx() {
    this.router.navigate(['add'], {relativeTo: this.activeRoute});
  }

// adding expense to DB
  onDataSubmit(expense: any) {

    this.expenseService.addExpense(expense).subscribe((res) => {
      if (res.success === true)
      {
        this.expensesList.push(res.data);
      }
      else
        alert('not created');
    });
  }

  // get sepcific page from DB
  getPage(page:number) {
    this.expenseService.getExpenseListByPage(page).subscribe((expenses) => {
      if (expenses.success) {
        this.expensesList = expenses.data;
      } else {
        alert(expenses.message);
      }
    });
  }

  getNextPage(nextpage) {

  }

  previousePage(previousPage) {

  }
}

