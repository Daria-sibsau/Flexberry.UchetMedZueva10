import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-uchet-med-zueva10-список-на-медосм', 'Unit | Model | i-i-s-uchet-med-zueva10-список-на-медосм', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-uchet-med-zueva10-вредн-факт-произ',
    'model:i-i-s-uchet-med-zueva10-должности',
    'model:i-i-s-uchet-med-zueva10-инд-напр-медосм',
    'model:i-i-s-uchet-med-zueva10-класс-вред-фактор',
    'model:i-i-s-uchet-med-zueva10-контингент-сотр',
    'model:i-i-s-uchet-med-zueva10-мед-учреждение',
    'model:i-i-s-uchet-med-zueva10-организации',
    'model:i-i-s-uchet-med-zueva10-подразделение',
    'model:i-i-s-uchet-med-zueva10-приказ-м-з-р',
    'model:i-i-s-uchet-med-zueva10-сотрудники',
    'model:i-i-s-uchet-med-zueva10-список-на-медосм',
    'model:вредные-факторы-производства',
    'model:классификатор-вредных-факторов',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
