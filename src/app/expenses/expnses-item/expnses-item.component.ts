import { Component, OnInit,Input } from '@angular/core';
import Expense from '../../models/expenses.model';

@Component({
  selector: 'app-expnses-item',
  templateUrl: './expnses-item.component.html',
  styleUrls: ['./expnses-item.component.css']
})
export class ExpnsesItemComponent implements OnInit {

  @Input()expenseItem: Expense;
  constructor() { }

  ngOnInit() {
  }

}
