import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return {
      accounts: [],
      budgetCategories: [],
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear()
    };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('accounts', model.accounts);
    controller.set('budgetCategories', model.budgetCategories);
    controller.set('currentMonth', model.currentMonth);
    controller.set('currentYear', model.currentYear);
  }
}