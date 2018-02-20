import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import {Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import Bank from '../models/banks.model';


@Injectable()
export class BankService {
  api_url = 'http://localhost:3000';
  banks_url = `${this.api_url}/banks`;

  constructor(private httpClient: HttpClient) {}

  getBanks(): Observable<any> {
    return this.httpClient.get(this.banks_url)
      .map((res) => {
        if (res['data'].docs) {
          const returnedData = res['data'].docs as Bank[];
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
}
