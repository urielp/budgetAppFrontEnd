import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../expenses-service';
import Expense from '../../models/expenses.model';


@Component({
  selector: 'app-epense-graph',
  templateUrl: './epense-graph.component.html',
  styleUrls: ['./epense-graph.component.css']
})
export class EpenseGraphComponent implements OnInit {

  mylist: Array<any> = [];
  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.getExpensesData();
  }
  public lineChartData : Array<any> = [
    {data: this.mylist, label: 'הוצאות'}
  ];
  public lineChartLabels : Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions : any = {
    responsive: true
  };
  public lineChartColors : Array<any> = [
    { // grey
      backgroundColor: 'rgba(220,53,69,0.2)',
      borderColor: 'rgba(220,53,69,1)',
      pointBackgroundColor: 'rgba(0,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,0,0,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
private getExpensesData() {
  this.expenseService.getExpensesList().subscribe((expenses) => {
    if (expenses.success) {
      for (let i = 0; i < expenses.data.length; i++) {
        this.mylist.push( expenses.data[i].amount);
      }
      console.log(this.mylist);
      //this.lineChartData.push({data:this.mylist,label:'Test'});
    } else {
      alert(expenses.message);
    }
  });
}
public myTest(d: any){

  }

}
