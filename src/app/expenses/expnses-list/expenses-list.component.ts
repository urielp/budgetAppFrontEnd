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
  filtterdArray : Expense[];
  showPaginition : boolean;
  constructor(private expenseService: ExpenseService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.filterExpensesByMonth();
  }

  getFullExpensesLit() {
    this.expenseService.getExpensesList().subscribe((expenses) => {
      if (expenses.success) {

        this.expensesList = expenses.data  as Expense[];
        this.total = +expenses.total;
        this.pages = +expenses.pages;
        this.limit = +expenses.limit;
        this.filterExpensesByMonth();
      } else {
        alert(expenses.message);
      }
    });
  }

  filterExpensesByMonth() {

    //this.filtterdArray = this.expensesList.filter(this.filterByMonth);
    //this.expensesList = testArray;

    this.showPaginition = false;
    this.expenseService.getExpensesByMonth(new Date().getMonth() + 1).subscribe((results) => {
      if (results.success) {
        console.log(results);
        this.filtterdArray = results.data;
        this.total = results.data.length;
      }
    } );
  }

  filterByMonth(item) {
    console.log(item);
    let d = new Date(item.date);
      if (d.getMonth() === new Date().getMonth() + 1) {
        return true;
      }
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

