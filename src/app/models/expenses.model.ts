class Expense {
  private title: string;
  private amount: number;
  private description: string;
  private date: Date;
  private status: string;
  constructor(title: string, amount: number, description: string, date: Date, status: string) {
    this.title = title;
    this.amount = amount;
    this.description = description;
    this.date = new Date(0);
    this.status = status;

  }
}
export default Expense;
