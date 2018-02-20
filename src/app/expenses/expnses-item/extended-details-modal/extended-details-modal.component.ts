import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import Expense from '../../../models/expenses.model';

@Component({
  selector: 'app-extended-details-modal',
  templateUrl: './extended-details-modal.component.html',
  styleUrls: ['./extended-details-modal.component.css']
})
export class ExtendedDetailsModalComponent implements OnInit {
  @ViewChild('content')  extendedDetailsModal: ElementRef;
  private modalRef: NgbModalRef;
  //@Input()
  expenseItem: Expense;
  date : string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }
  open() {
    this.modalRef = this.modalService.open(this.extendedDetailsModal);
  }
  altOpen(expense: Expense) {
    this.expenseItem = expense;
    this.date = new Date( this.expenseItem.date ).toDateString();
    this.open();
  }
}
