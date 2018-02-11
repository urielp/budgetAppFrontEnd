class Expense {
  private name: string;
  private title: string;
  private amount: number;
  private description: string;
  public date: Date;
  private status: string;
  public formatetdDate: string;
  private _id : string;
  private __v:number;
  constructor(name: string, title: string, amount: number, description: string, date: Date, status: string) {
    this.name = name;
    this.title = title;
    this.amount = amount;
    this.description = description;
    this.date = new Date(0);
    this.status = status;
    this.formatetdDate = this.dateFormat();
  }

  public getDate(): Date {
    return this.date;
  }
  public dateFormat(): string {

    let dd = this.date.getDate();
    let mm = this.date.getMonth() + 1;
    const yyyy = this.date.getFullYear();

    if (dd < 10) {
      dd = +`0${dd}`;
    }
    if (mm < 10) {
      mm = +`0${mm}`;
    }
    console.log(dd + '/' + mm + '/' + yyyy);
    return dd + '/' + mm + '/' + yyyy;
  }
}
export default Expense;
