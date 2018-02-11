import {Component, OnInit, Input, ViewChild} from '@angular/core';
import Expense from '../../models/expenses.model';
import {AddExpenseComponent} from '../expnses-list/add-expense/add-expense.component';
import {ExtendedDetailsModalComponent} from './extended-details-modal/extended-details-modal.component';

@Component({
  selector: 'app-expnses-item',
  templateUrl: './expnses-item.component.html',
  styleUrls: ['./expnses-item.component.css']
})
export class ExpnsesItemComponent implements OnInit {

  @Input()expenseItem: Expense;
  @ViewChild(ExtendedDetailsModalComponent) extendedDetails: ExtendedDetailsModalComponent ;
  date:Date;
  myTest : Date;
  constructor() { }

  ngOnInit() {
    if (this.expenseItem.date){
      this.date = new Date(this.expenseItem.date);
      //console.log(this.formatDate());
    }
    this.myTest = new Date('2018-02-28T22:00:00.000Z');
    console.log(this.myTest);
  }


  openExtendedDetailsModal(expense: Expense) {

    this.extendedDetails.altOpen(expense);
  }
formatDate() {
  let dd = this.date.getDay();
  let mm = this.date.getMonth() ;
  const yyyy = this.date.getFullYear();
   if (dd < 10) {
     dd =  +`0${dd}`;
   }
  if (mm < 10) {
     mm = +`0${mm}`;
   }
   //console.log(dd + '/' + mm + '/' + yyyy);
   return dd + '/' + mm + '/' + yyyy;
}
}
