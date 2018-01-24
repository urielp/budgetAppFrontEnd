import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import {Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import Expense from '../models/expenses.model';


@Injectable()
export class ExpenseService {
  api_url = 'http://localhost:3000';
  expense_url = `${this.api_url}/expenses`;
  constructor(private httpClient: HttpClient) {}
  getExpensesList(): Observable<any> {
    console.log(this.expense_url);
    return this.httpClient.get(this.expense_url)
      .map((res) => {
        if (res['data'].docs) {
          const returnedData = res['data'].docs as Expense[];
          return {
            success: true,
            data: returnedData,
            message: 'Great!'
          };
        }
        else {
          return res;
        }
      });
  }
}
