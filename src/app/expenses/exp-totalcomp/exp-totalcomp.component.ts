import {Component, Input, OnInit} from '@angular/core';
import {ExpenseService} from '../expenses-service';
import {Monthes} from '../shared/monthes';


@Component({
  selector: 'app-exp-totalcomp',
  templateUrl: './exp-totalcomp.component.html',
  styleUrls: ['./exp-totalcomp.component.css']
})
export class ExpTotalcompComponent implements OnInit {

  constructor(private expensesService: ExpenseService) { }
  totalAmount: number;
  totalExpenses: number;
  month: string;
  year: string;
  currentMonth: number;
  ngOnInit() {
    this.currentMonth = (+(new Date().getMonth())) + 1;
    this.getTotalExpensesAmount(this.currentMonth);
    this.expensesService.monthWasChanged$.subscribe((month) => {
      this.getTotalExpensesAmount(month);
      this.currentMonth = month;
      console.log(this.currentMonth);
    });
  }

  getTotalExpensesAmount(month) {


    this.expensesService.getTotalExpensesAmount(month).subscribe((results) => {

      if (results.success) {
        this.totalAmount = results.data[0].totalAmount;
        this.totalExpenses = results.data[0].count;
        this.month = Monthes[results.data[0]._id.month - 1];
        this.year = results.data[0]._id.year;
      } else {console.log('something went wrong'); }
    });
  }

  @Input()
  test(month) {
  console.log('emmiting');
  console.log(month);
}



}
