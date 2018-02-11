class Bank {

  private name: string;
  private balance: number;
  private description: string;
  private code: string;

  constructor(name: string, balance: number, description: string , code: string) {
    this.name = name;
    this.balance = balance;
    this.description = description;
    this.code = code;
  }

}

export default Bank;
