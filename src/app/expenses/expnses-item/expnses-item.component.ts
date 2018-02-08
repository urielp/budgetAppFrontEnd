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

  constructor() { }

  ngOnInit() {
  }

  openExtendedDetailsModal(expense: Expense) {

    this.extendedDetails.altOpen(expense);
  }

}
