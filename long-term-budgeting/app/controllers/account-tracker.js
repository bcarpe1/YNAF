import Controller from '@ember/controller';

export default class AccountTrackerController extends Controller {
  accounts = [];
  budgetCategories = [];
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();

  addAccount(name, balance) {
    this.accounts.pushObject({ name, balance });
  }

  addBudgetCategory(name, allocatedAmount, expectedSpending) {
    this.budgetCategories.pushObject({
      name,
      allocatedAmount,
      expectedSpending,
      remainingAmount: allocatedAmount - expectedSpending,
    });
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
  }

  previousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }
}