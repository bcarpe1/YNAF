import Controller from '@ember/controller';

export default Controller.extend({
  budgetCategories: [],
  currentMonth: new Date().getMonth(),
  
  init() {
    this._super(...arguments);
    this.set('budgetCategories', this.loadBudgetCategories());
  },

  loadBudgetCategories() {
    // Load budget categories from a data source or initialize with default values
    return [
      { name: 'Groceries', allocated: 500, expectedSpending: 450, remaining: 50 },
      { name: 'Utilities', allocated: 200, expectedSpending: 180, remaining: 20 },
      { name: 'Entertainment', allocated: 150, expectedSpending: 100, remaining: 50 }
    ];
  },

  actions: {
    addBudgetCategory(name, allocated, expectedSpending) {
      const newCategory = {
        name,
        allocated,
        expectedSpending,
        remaining: allocated - expectedSpending
      };
      this.budgetCategories.pushObject(newCategory);
    },

    nextMonth() {
      this.incrementProperty('currentMonth');
    },

    previousMonth() {
      this.decrementProperty('currentMonth');
    }
  }
});