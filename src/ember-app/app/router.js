import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-uchet-med-zueva10-должности-l');
  this.route('i-i-s-uchet-med-zueva10-должности-e',
  { path: 'i-i-s-uchet-med-zueva10-должности-e/:id' });
  this.route('i-i-s-uchet-med-zueva10-должности-e.new',
  { path: 'i-i-s-uchet-med-zueva10-должности-e/new' });
  this.route('i-i-s-uchet-med-zueva10-инд-напр-медосм-l');
  this.route('i-i-s-uchet-med-zueva10-инд-напр-медосм-e',
  { path: 'i-i-s-uchet-med-zueva10-инд-напр-медосм-e/:id' });
  this.route('i-i-s-uchet-med-zueva10-инд-напр-медосм-e.new',
  { path: 'i-i-s-uchet-med-zueva10-инд-напр-медосм-e/new' });
  this.route('i-i-s-uchet-med-zueva10-класс-вред-фактор-l');
  this.route('i-i-s-uchet-med-zueva10-класс-вред-фактор-e',
  { path: 'i-i-s-uchet-med-zueva10-класс-вред-фактор-e/:id' });
  this.route('i-i-s-uchet-med-zueva10-класс-вред-фактор-e.new',
  { path: 'i-i-s-uchet-med-zueva10-класс-вред-фактор-e/new' });
  this.route('i-i-s-uchet-med-zueva10-мед-учреждение-l');
  this.route('i-i-s-uchet-med-zueva10-мед-учреждение-e',
  { path: 'i-i-s-uchet-med-zueva10-мед-учреждение-e/:id' });
  this.route('i-i-s-uchet-med-zueva10-мед-учреждение-e.new',
  { path: 'i-i-s-uchet-med-zueva10-мед-учреждение-e/new' });
  this.route('i-i-s-uchet-med-zueva10-организации-l');
  this.route('i-i-s-uchet-med-zueva10-организации-e',
  { path: 'i-i-s-uchet-med-zueva10-организации-e/:id' });
  this.route('i-i-s-uchet-med-zueva10-организации-e.new',
  { path: 'i-i-s-uchet-med-zueva10-организации-e/new' });
  this.route('i-i-s-uchet-med-zueva10-подразделение-l');
  this.route('i-i-s-uchet-med-zueva10-подразделение-e',
  { path: 'i-i-s-uchet-med-zueva10-подразделение-e/:id' });
  this.route('i-i-s-uchet-med-zueva10-подразделение-e.new',
  { path: 'i-i-s-uchet-med-zueva10-подразделение-e/new' });
  this.route('i-i-s-uchet-med-zueva10-приказ-м-з-р-l');
  this.route('i-i-s-uchet-med-zueva10-приказ-м-з-р-e',
  { path: 'i-i-s-uchet-med-zueva10-приказ-м-з-р-e/:id' });
  this.route('i-i-s-uchet-med-zueva10-приказ-м-з-р-e.new',
  { path: 'i-i-s-uchet-med-zueva10-приказ-м-з-р-e/new' });
  this.route('i-i-s-uchet-med-zueva10-сотрудники-l');
  this.route('i-i-s-uchet-med-zueva10-сотрудники-e',
  { path: 'i-i-s-uchet-med-zueva10-сотрудники-e/:id' });
  this.route('i-i-s-uchet-med-zueva10-сотрудники-e.new',
  { path: 'i-i-s-uchet-med-zueva10-сотрудники-e/new' });
  this.route('i-i-s-uchet-med-zueva10-список-на-медосм-l');
  this.route('i-i-s-uchet-med-zueva10-список-на-медосм-e',
  { path: 'i-i-s-uchet-med-zueva10-список-на-медосм-e/:id' });
  this.route('i-i-s-uchet-med-zueva10-список-на-медосм-e.new',
  { path: 'i-i-s-uchet-med-zueva10-список-на-медосм-e/new' });
});

export default Router;
