import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

@ViewChild('content')
  private modalContent: ElementRef;
  closeResults: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    this.modalService.open(this.modalContent).result.then((results) => {
      this.closeResults =  `Closed with: ${{ results }}`;
      console.log("Results");
      console.log( results);
    } , ( reason ) => {
      console.log(reason);
    });
  }
}
