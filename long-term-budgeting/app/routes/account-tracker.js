import Route from '@ember/routing/route';

export default class AccountTrackerRoute extends Route {
  model() {
    return {
      accounts: this.store.findAll('account'),
      budgetCategories: this.store.findAll('budget-category'),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear()
    };
  }

  actions: {
    nextMonth() {
      let model = this.modelFor(this.routeName);
      if (model.currentMonth === 11) {
        model.currentMonth = 0;
        model.currentYear++;
      } else {
        model.currentMonth++;
      }
    },

    previousMonth() {
      let model = this.modelFor(this.routeName);
      if (model.currentMonth === 0) {
        model.currentMonth = 11;
        model.currentYear--;
      } else {
        model.currentMonth--;
      }
    }
  }
}