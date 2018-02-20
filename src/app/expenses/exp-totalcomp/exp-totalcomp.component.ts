import {Component, Input, OnInit} from '@angular/core';
import {ExpenseService} from '../expenses-service';
import {Monthes} from '../shared/monthes';
import {ISubscription} from 'rxjs/Subscription';


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
  private getTotalExpSubscription: ISubscription;
  private monthChangeSubscription: ISubscription;
  ngOnInit() {
    this.currentMonth = (+(new Date().getMonth())) + 1;
    this.getTotalExpensesAmount(this.currentMonth);
    this.monthChangeSubscription = this.expensesService.monthWasChanged$.subscribe((month) => {
      this.getTotalExpensesAmount(month);
      this.currentMonth = month;
    });
  }

  getTotalExpensesAmount(month) {


    this.getTotalExpSubscription = this.expensesService.getTotalExpensesAmount(month,new Date().getFullYear()).subscribe((results) => {
console.log(results);
      if (results.success ) {
        console.log(results.data[0].count);
        this.totalAmount = results.data[0].totalAmount;
        this.totalExpenses = results.data[0].count;
        this.month = Monthes[results.data[0]._id.month - 1];
        this.year = results.data[0]._id.year;
      } else {console.log('something went wrong');
        this.totalAmount = 0 ;
        this.totalExpenses = 0;
        this.month  = Monthes[month - 1];

      }
    });
  }

  @Input()
  test(month) {


}



}
