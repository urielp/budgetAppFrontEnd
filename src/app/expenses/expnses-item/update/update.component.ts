import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import Expense from '../../../models/expenses.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @ViewChild('content')  updateDetailsModal: ElementRef;
  private modalRef: NgbModalRef;
  @Input()
  expenseItem: Expense;
  private date:string;
  @Output() onFormUpdated: EventEmitter<any> = new EventEmitter<any>();
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open() {
    this.modalRef = this.modalService.open(this.updateDetailsModal);
    this.date = this.formatDate ( new Date (this.expenseItem.date ));
  }
  altOpen(expense: Expense) {
    //this.expenseItem = expense;
    this.open();
  }
   formatDate(date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

    onUpdate(id:string){

      this.onFormUpdated.emit(id) ;
      this.modalRef.close();
    }
}
