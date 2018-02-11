import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../expenses-service';
import {Monthes} from '../shared/monthes';


@Component({
  selector: 'app-exp-totalcomp',
  templateUrl: './exp-totalcomp.component.html',
  styleUrls: ['./exp-totalcomp.component.css']
})
export class ExpTotalcompComponent implements OnInit {

  constructor(private expensesService: ExpenseService) { }
  totalAmount:number;
  totalExpenses:number;
  month:string;
  year:string;
  ngOnInit() {
    this.getTotalExpensesAmount();

  }

  getTotalExpensesAmount() {

    this.expensesService.getTotalExpensesAmount().subscribe((results) => {
      if (results.success) {
        console.log('total');
        console.log(results);
     //   this.totalExpenses = results.data.length;
        for (let i = 0 ; i < results.data.length ; i++) {
          if ((results.data[i]._id.month - 1) === new Date().getMonth()) {
            this.totalAmount = results.data[i].totalAmount;
            this.totalExpenses = results.data[i].count;
            this.month = Monthes[results.data[i]._id.month - 1];
            this.year = results.data[i]._id.year;
          }
        }
      }
      else {
        console.log('something went wrong');
      }
    });
  }


}
