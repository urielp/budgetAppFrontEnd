import {Component, OnInit, Input, ViewChild, AfterContentInit, Output, EventEmitter} from '@angular/core';
import Expense from '../../models/expenses.model';
import {AddExpenseComponent} from '../expnses-list/add-expense/add-expense.component';
import {ExtendedDetailsModalComponent} from './extended-details-modal/extended-details-modal.component';
import {UpdateComponent} from './update/update.component';
import {ISubscription} from 'rxjs/Subscription';
import {ExpenseService} from '../expenses-service';

@Component({
  selector: 'app-expnses-item',
  templateUrl: './expnses-item.component.html',
  styleUrls: ['./expnses-item.component.css']
})
export class ExpnsesItemComponent implements OnInit, AfterContentInit {

  @Input()expenseItem: Expense;
  @Input() testItem: any;
  @ViewChild(ExtendedDetailsModalComponent) extendedDetails: ExtendedDetailsModalComponent ;
  @ViewChild(UpdateComponent) updateExpModal: UpdateComponent;
  private  updateExpenseSubscription: ISubscription;
  private deleteExpenseSubscreption: ISubscription;
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  date: string;
  myTest: Date;
  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    if (this.expenseItem.date) {
      this.date = new Date(this.expenseItem.date).toDateString();
    }
    this.myTest = new Date('2018-02-28T22:00:00.000Z');
  }

  ngAfterContentInit() {

  }

  openExtendedDetailsModal(expense: Expense) {
    this.extendedDetails.altOpen(expense);
  }
  formatDate() {
  let dd = this.testItem.day;//this.date.getDay();
  let mm =this.testItem.month;//this.date.getMonth() ;
  const yyyy = this.testItem.year;//this.date.getFullYear();
   if (dd < 10) {
     dd =  +`0${dd}`;
   }
  if (mm < 10) {
     mm = +`0${mm}`;
   }
   //console.log(dd + '/' + mm + '/' + yyyy);
   return dd + '/' + mm + '/' + yyyy;
}

  update(expense: Expense) {
    console.log('trying to update');
    this.updateExpModal.altOpen(expense);
  }

  onUpdateSubmit(id: string) {
    this.updateExpenseSubscription = this.expenseService.updateExpense(id,this.expenseItem).subscribe((res) => {
      if (res.success === true) {
      } else {alert('not updated'); } });
  }
  onDeleteRequest(id: string) {
    var txt = ''
    if (confirm("Press a button!")) {
     console.log('Deleted');
     this.onDelete.emit(this.expenseItem);
    } else {
      console.log('No Deleted');
    }
    //this.onDelete.emit(id);
  }
}
