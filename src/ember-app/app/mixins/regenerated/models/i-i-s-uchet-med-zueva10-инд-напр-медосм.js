import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number'),
  медУчреждение: DS.belongsTo('i-i-s-uchet-med-zueva10-мед-учреждение', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-uchet-med-zueva10-организации', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-uchet-med-zueva10-сотрудники', { inverse: null, async: false }),
  вреднФактПроиз: DS.hasMany('вредные-факторы-производства', { inverse: 'индНапрМедосм', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva10-инд-напр-медосм.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva10-инд-напр-медосм.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  медУчреждение: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva10-инд-напр-медосм.validations.медУчреждение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva10-инд-напр-медосм.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva10-инд-напр-медосм.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  вреднФактПроиз: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva10-инд-напр-медосм.validations.вреднФактПроиз.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИндНапрМедосмE', 'i-i-s-uchet-med-zueva10-инд-напр-медосм', {
    номер: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    организации: belongsTo('i-i-s-uchet-med-zueva10-организации', 'Организация', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    медУчреждение: belongsTo('i-i-s-uchet-med-zueva10-мед-учреждение', 'Медицинское учреждение', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' }),
    сотрудники: belongsTo('i-i-s-uchet-med-zueva10-сотрудники', 'Сотрудники', {
      номер: attr('Номер сотрудника', { index: 7 }),
      фИО: attr('ФИО', { index: 8, hidden: true }),
      должности: belongsTo('i-i-s-uchet-med-zueva10-должности', '', {
        наименование: attr('Должность', { index: 9 })
      }, { index: -1, hidden: true }),
      подразделение: belongsTo('i-i-s-uchet-med-zueva10-подразделение', '', {
        наименование: attr('Подразделение', { index: 10 })
      }, { index: -1, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' }),
    вреднФактПроиз: hasMany('вредные-факторы-производства', 'Вредные факторы производства', {
      номер: attr('Номер', { index: 0 }),
      классВредФактор: belongsTo('классификатор-вредных-факторов', 'Вредные факторы', {
        вредныйФактор: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ИндНапрМедосмL', 'i-i-s-uchet-med-zueva10-инд-напр-медосм', {
    номер: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-uchet-med-zueva10-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true }),
    медУчреждение: belongsTo('i-i-s-uchet-med-zueva10-мед-учреждение', 'Медицинское учреждение', {
      наименование: attr('Медицинское учреждение', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
