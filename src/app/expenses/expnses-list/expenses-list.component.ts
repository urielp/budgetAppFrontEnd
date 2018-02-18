import {Component, Input, OnInit, ViewChild} from '@angular/core';
import Expense from '../../models/expenses.model';
import {ExpenseService} from '../expenses-service';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Monthes} from '../shared/monthes';
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
  filtterdArray: Expense[];
  showPaginition: boolean;
  currentHebMonth: string;
  private sub: any;
  @Input()
  requestedMonth: number;
  constructor(private expenseService: ExpenseService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pages = 4;
    this.filterExpensesByMonth(new Date().getMonth() + 1);
    this.sub = this.activeRoute.params.subscribe( params => {
      this.requestedMonth = +params['month'];
      this.filterExpensesByMonth(this.requestedMonth);
      this.currentHebMonth = Monthes[+this.requestedMonth - 1];
      this.getFullExpensesLit(params['month']);
    });


  }

  getFullExpensesLit(month) {

    this.expenseService.getExpensesList(month).subscribe((expenses) => {
      if (expenses.success) {
        this.expensesList = expenses.data  as Expense[];
        this.total = +expenses.total;
        this.pages = +expenses.pages;
        this.limit = +expenses.limit;
        console.log(this.pages);
       console.log(this.expensesList);
      } else {
        alert(expenses.message);
      }
    });
  }

  filterExpensesByMonth(month) {
    //this.filtterdArray = this.expensesList.filter(this.filterByMonth);
    //this.expensesList = testArray;
    this.showPaginition = true;
    this.expenseService.getExpensesByMonth(month).subscribe((results) => {
      if (results.success) {
        this.filtterdArray = results.data;
        this.total = results.data.length;

      }
    } );
  }

  filterByMonth(item) {

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
  getPage(page: number) {
    this.expenseService.getExpenseListByPage(this.requestedMonth, page).subscribe((expenses) => {
      if (expenses.success) {
        console.log(expenses);
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

