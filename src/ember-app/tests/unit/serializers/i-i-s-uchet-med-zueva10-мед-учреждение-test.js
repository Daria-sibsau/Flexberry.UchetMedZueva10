import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-uchet-med-zueva10-мед-учреждение', 'Unit | Serializer | i-i-s-uchet-med-zueva10-мед-учреждение', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-uchet-med-zueva10-мед-учреждение',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-uchet-med-zueva10-период-мед',
    'transform:i-i-s-uchet-med-zueva10-пол-сотрудника',

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
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
