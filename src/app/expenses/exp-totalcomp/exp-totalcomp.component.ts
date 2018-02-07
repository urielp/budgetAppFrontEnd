import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../expenses-service';
import {Monthes} from '../shared/monthes';
import jsonPath = require('jsonpath');

@Component({
  selector: 'app-exp-totalcomp',
  templateUrl: './exp-totalcomp.component.html',
  styleUrls: ['./exp-totalcomp.component.css']
})
export class ExpTotalcompComponent implements OnInit {

  constructor(private expensesService: ExpenseService) { }
totalAmount:number;
  ngOnInit() {
    this.getTotalExpensesAmount();
  }

  getTotalExpensesAmount() {
    this.expensesService.getTotalExpensesAmount().subscribe((results) => {
      if (results.success) {
        console.log('printing results');
        console.log(results);
        console.log(Monthes[new Date().getMonth()]);
        for (let i = 0 ; i < results.data.length ; i++) {
          if ((results.data[i]._id.month - 1) === new Date().getMonth()) {
            console.log(results.data[i].totalAmount);
            this.totalAmount = results.data[i].totalAmount;
          }
        }
      }
      else {
        console.log('something went wrong');
      }
    });
  }
}
