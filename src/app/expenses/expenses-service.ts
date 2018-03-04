import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import {Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import Expense from '../models/expenses.model';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class ExpenseService {
  api_url = 'http://localhost:3000';
  expense_url = `${this.api_url}/expenses`;
  private monthChangedSource = new Subject<number>();

  monthWasChanged$ = this.monthChangedSource.asObservable();

  constructor(private httpClient: HttpClient) {}
  getExpensesList(month): Observable<any> {

    return this.httpClient.get(this.expense_url+'/expensesList/'+month)
      .map((res) => {
        if (res['data'].docs) {

          // const returnedData = Array<any>();
          // for (let i = 0 ; i < res['data'].docs.length ; i++) {
          //   returnedData.push(new Expense(
          //     res['data'].docs[i].name,
          //     res['data'].docs[i].title,
          //     res['data'].docs[i].amount,
          //     res['data'].docs[i].description,
          //     res['data'].docs[i].date,
          //     res['data'].docs[i].status));
          //   console.log(res['data'].docs[i].date);
          // }

          const returnedData = res['data'].docs as Expense[];

          return {
            success: true,
            data: returnedData,
            total: res['data'].total,
            pages: res['data'].pages,
            limit: res['data'].limit,
            message: 'Great!'
          };
        } else {
          return res;
        }
      });
  }
  getExpenseListByPage(month, p): Observable<any> {
    return this.httpClient.get(`${this.expense_url}/expensesList/${month}`, { params: { page: p}})
      .map((res) => {
        if (res['data'].docs) {
          const returnedData = res['data'].docs as Expense[];
          return {
            success: true,
            data: returnedData,
            message: 'Great!'
          };
        } else {
          return res;
        }
      });
  }
  addExpense(expense: Expense): Observable<any> {
    return this.httpClient.post(`${this.expense_url}`, expense);
  }
  updateExpense(id:string, expense: Expense): Observable <any> {
    return this.httpClient.put(`${this.expense_url}/update/${id}`, expense);
  }
  getExpensesByMonth(month): Observable<any> {
    return this.httpClient.get(`${this.expense_url}/month/${month}` )
      .map((res) => {
        if (res['data']) {
          return {
            success: true,
            data: res['data'],
            message: 'Expenses by ' + month + ' returned successfully'
          };
        } else {return {
          success: false,
          data: {},
          message: 'Expenses by ' + month + ' was not returned'
        }}
      });
  }
  getTotalExpensesAmount(month, year): Observable <any> {
    return this.httpClient.get(`${this.expense_url}/total/${month}`, { params: { year: year }})
      .map((res) => {

        if (res['data'] && res['success']) {
          return {
            success: true,
            data: res['data'],
            message: 'total expenses amount returned'
          } ;
        }
        else {
          return {
            success: false,
            data: {},
            message: 'no results'
          };
        }
      });
}
  monthChanged(month: number) {

    this.monthChangedSource.next(month);
}

}
