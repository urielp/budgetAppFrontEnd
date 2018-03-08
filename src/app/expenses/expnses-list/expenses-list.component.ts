import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import Expense from '../../models/expenses.model';
import {ExpenseService} from '../expenses-service';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Monthes} from '../shared/monthes';
import {ISubscription} from 'rxjs/Subscription';
import {UpdateComponent} from '../expnses-item/update/update.component';
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit, OnDestroy {

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
  private routeSubscription: ISubscription;
  private expensesListSubscription: ISubscription;
  private  expensesByMonthSubscription: ISubscription;
  private  addExpenseSubscription: ISubscription;
  private  updateExpenseSubscription: ISubscription;
  @Input()
  requestedMonth: number;
  constructor(private expenseService: ExpenseService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

      this.filterExpensesByMonth(new Date().getMonth() + 1);
      this.routeSubscription = this.sub = this.activeRoute.params.subscribe( params => {
      this.requestedMonth = +params['month'];
      this.filterExpensesByMonth(this.requestedMonth);
      this.currentHebMonth = Monthes[+this.requestedMonth - 1];
      this.getFullExpensesLit(params['month']);
    });


  }

  getFullExpensesLit(month) {

    this.expensesListSubscription = this.expenseService.getExpensesList(month).subscribe((expenses) => {
      if (expenses.success) {
        this.expensesList = expenses.data  as Expense[];
        this.total = +expenses.total;
        console.log(+expenses.total);
        this.pages = +expenses.pages;
        this.limit = +expenses.limit;
         } else {
        alert(expenses.message);
      }
    });
  }

  filterExpensesByMonth(month) {
    //this.filtterdArray = this.expensesList.filter(this.filterByMonth);
    //this.expensesList = testArray;
    this.showPaginition = true;
    this.expensesByMonthSubscription = this.expenseService.getExpensesByMonth(month).subscribe((results) => {
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
    this.addExpenseSubscription = this.expenseService.addExpense(expense).subscribe((res) => {
      if (res.success === true)
      {
        this.expensesList.push(res.data);
        this.addExpenseSubscription.unsubscribe();
      }
      else
        alert('not created');
    });
  }
  onUpdateSubmit(expense: any) {
    this.updateExpenseSubscription = this.expenseService.updateExpense(expense._id, expense).subscribe((res) => {
      if (res.success === true) {
        this.expensesList.push(res.data);
        this.addExpenseSubscription.unsubscribe();
      }
      else
        alert('not created');
    });
  }
  //get sepcific page from DB
  getPage(page: number) {
    this.expenseService.getExpenseListByPage(this.requestedMonth, page).subscribe((expenses) => {
      if (expenses.success) {
        this.expensesList = expenses.data;
      } else {
        alert(expenses.message);
      }
    });
  }
  onDelete(expense) {

    console.log(expense);
   this.expenseService.deleteExpense(expense._id).subscribe((res) =>{
     if (res.success === true) {
       this.expensesList.splice(this.expensesList.indexOf(expense), 1);} else {alert('Unable to Delete Expense'); }
   });
  }
  ngOnDestroy() {
this.expensesListSubscription.unsubscribe();
this.routeSubscription.unsubscribe();
//this.addExpenseSubscription.unsubscribe();
this.expensesByMonthSubscription.unsubscribe();
  }

}

