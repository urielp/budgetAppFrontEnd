import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  defaultPagination: number;
  advancedPagination: number;
  @Input()
  paginationSize: number;
  @Input()
  total: number;
  page: any;
  @Output() requierdPage: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

    console.log('Total: ' +this.total);
    console.log('paginationSize: ' +this.paginationSize);
  }
  loadPage(page: number) {
  console.log(page);
    this.requierdPage.emit(page);
}
}
