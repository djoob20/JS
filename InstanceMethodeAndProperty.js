class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    static sayWelcome(){
        console.log("Welcome to our bank");
    }

    showBalance(){
        console.log("Solde: " + this.balance + " EUR");
    }

    deposit(amount){
        console.log("Dépôt de " + amount + " EUR");
        this.balance += amount;
        this.showBalance();
    }

    withdrow(amount){
        console.log("Retrait de "+ amount + " EUR");
        if(this.balance >= amount){
            this.balance -= amount;
            this.showBalance();
        }else{
            console.log("Retrait refusé!!");
        }
    }
}

BankAccount.sayWelcome();
const newAccount = new BankAccount("Will Alexander", 500);
newAccount.showBalance(); // imprime "Solde: 500 EUR" à la console
newAccount.deposit(500);