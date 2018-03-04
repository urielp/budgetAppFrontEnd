import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  @Output() onFormSubmitted: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('content') private modalContent: ElementRef;
  private modalRef: NgbModalRef;


  closeResults: string;
  expense = {
    name: '',
    amount: '',
    description: '',
    date: '',
    status: ''
  }
  constructor(private modalService: NgbModal) { }


onSubmit(expForm: NgForm) {



     this.expense.name = expForm.value.expenseData.expName;
     this.expense.amount = expForm.value.expenseData.expAmount;
     this.expense.description = expForm.value.expenseData.expDescription;
     this.expense.date = expForm.value.expenseData.expDate;
     this.expense.status = expForm.value.expenseData.expStatus;
     this.onFormSubmitted.emit(this.expense) ;
     this.modalRef.close();
}

  open() {
    this.modalRef =  this.modalService.open(this.modalContent);/*.result.then((results) => {
      this.closeResults =  `Closed with: ${{ results }}`;
      console.log("Results");
      console.log( results);
    } , ( reason ) => {
      console.log(reason);
    });*/
  }


}
