import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from '../config/environment';

export default function startApp(attrs) {
  let application;

  let attributes = Object.assign({}, config.APP, attrs);

  application = Application.create(attributes);
  application.setupForTesting();
  application.injectTestHelpers();

  loadInitializers(application, config.modulePrefix);

  return application;
}