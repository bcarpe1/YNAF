export default class BudgetCategory {
  constructor(name, allocatedAmount, expectedSpending, remainingAmount) {
    this.name = name;
    this.allocatedAmount = allocatedAmount;
    this.expectedSpending = expectedSpending;
    this.remainingAmount = remainingAmount;
  }
}