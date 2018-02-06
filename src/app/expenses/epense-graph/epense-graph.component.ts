import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../expenses-service';
import Expense from '../../models/expenses.model';


@Component({
  selector: 'app-epense-graph',
  templateUrl: './epense-graph.component.html',
  styleUrls: ['./epense-graph.component.css']
})
export class EpenseGraphComponent implements OnInit {

  monthes = ['ינואר', 'פברואר' , 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר'  , 'נובמבר', 'דצמבר' ];
  mylist: Array<any> = [];
  currentMonth;
  currentMonthIndex;
  nextAvilable = true;
  prevAvilable = true;
  public lineChartData : Array<any> = [
    {data: this.mylist, label: 'הוצאות'}
  ];

  public lineChartLabels : Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July','dd','uu','ll'];
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

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    //this.getExpensesData();
    this.currentMonth = this.getHebMonth(new Date().getMonth());
    this.currentMonthIndex = this.monthes.indexOf(this.currentMonth);
    this.getExpensesDataByMonth(this.monthes.indexOf(this.currentMonth) +1)
    if (this.monthes.indexOf(this.currentMonth) === 0 ) {
      this.prevAvilable = false;
    }
    else if (this.monthes.indexOf(this.currentMonth) === 11) {
      this.nextAvilable = false;
    }
    console.log(this.monthes.indexOf(this.currentMonth));
  }

  getHebMonth(month) {
    return this.monthes[month];
  }

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
      this.lineChartLabels = Array<any> (expenses.data.length) ;
      for (let i = 0; i < expenses.data.length; i++) {
        this.mylist.push( expenses.data[i].amount);
       // this.lineChartLabels.push(expenses.data[i].date);
      }
      //this.lineChartData.push({data:this.mylist,label:'Test'});
    } else {
      alert(expenses.message);
    }
  });
}
  getExpensesDataByMonth(month) {
   // let month2 = new Date().getMonth() + 1;
    console.log(month);
    if (month) {
      const results = this.expenseService.getExpensesByMonth(month).subscribe((expensesByMonth) => {
    if (expensesByMonth.success) {
        console.log('printing results');
        console.log(expensesByMonth);
        this.populateGraphData(expensesByMonth.data);
    }
    else{
      console.log('something went wrong');
    }
  });
    }
  else {alert('need to provide a valid moth'); }
}
  public myTest(d: any){

  }

  //getting the graph oe expenses for the previous month
  prevMonth() {

    this.nextAvilable = true;
    this.currentMonth = this.monthes[this.monthes.indexOf(this.currentMonth) -1];
    console.log(this.monthes.indexOf(this.currentMonth));
    this.getExpensesDataByMonth(this.monthes.indexOf(this.currentMonth) + 1 );
    //console.log(this.currentMonth );
    if (this.monthes.indexOf(this.currentMonth) === 0 ) {
      this.prevAvilable = false;
    }
  }

  //getting graph for the next month
  //TODO:should considere make this avilable only if we already viewing the previous month.
  nextMonth() {
    this.prevAvilable = true;
    this.currentMonth = this.monthes[this.monthes.indexOf(this.currentMonth) +1];
    this.getExpensesDataByMonth(this.monthes.indexOf(this.currentMonth) + 1 );
    console.log(this.monthes.indexOf(this.currentMonth));
    //console.log(this.currentMonth );
    if (this.monthes.indexOf(this.currentMonth) === 11 ) {
      this.nextAvilable = false;
    }
  }

  //populating the data for the graph

  populateGraphData(expenses: Array<any>) {
    const graphData = [];
    let _lineChartData : Array<any> = new Array(1);
    _lineChartData[0] = {data : new Array(expenses.length), label: this.currentMonth};
    for (let i = 0 ; i < expenses.length ; i++) {
      graphData.push(expenses[i].doc.amount);
      _lineChartData[0].data[i] = expenses[i].doc.amount;
    }
    this.lineChartData = _lineChartData;
  }
}
