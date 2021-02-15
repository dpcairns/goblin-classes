class BankAccount {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }

    showBalance() {
        console.log(`Account ${this.id} has $${this.balance}`);
    }

    withdraw(howMuch) {
        if (howMuch > this.balance) {
            console.log('insufficient funds!');

            return;
        }

        this.balance -= howMuch;
        
        this.showBalance();
    }

    deposit(howMuch) {
        this.balance += howMuch;

        this.showBalance();
    }
}

const account = new BankAccount(42, 109);

account.deposit(40);
account.withdraw(4);
account.withdraw(33334);