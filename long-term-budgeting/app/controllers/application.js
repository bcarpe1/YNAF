import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  currentMonth = new Date().getMonth();
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  nextMonth() {
    this.set('currentMonth', (this.currentMonth + 1) % 12);
  }

  previousMonth() {
    this.set('currentMonth', (this.currentMonth - 1 + 12) % 12);
  }
}