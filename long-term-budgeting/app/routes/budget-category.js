import Route from '@ember/routing/route';

export default class BudgetCategoryRoute extends Route {
  model() {
    return {
      categories: [],
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
    };
  }

  actions: {
    addCategory(category) {
      this.model.categories.push(category);
    },

    nextMonth() {
      if (this.model.currentMonth === 11) {
        this.model.currentMonth = 0;
        this.model.currentYear++;
      } else {
        this.model.currentMonth++;
      }
    },

    previousMonth() {
      if (this.model.currentMonth === 0) {
        this.model.currentMonth = 11;
        this.model.currentYear--;
      } else {
        this.model.currentMonth--;
      }
    },
  }
}