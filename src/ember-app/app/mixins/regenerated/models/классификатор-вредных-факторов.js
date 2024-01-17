import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вредныйФактор: DS.attr('string'),
  подразделение: DS.belongsTo('i-i-s-uchet-med-zueva10-подразделение', { inverse: null, async: false })
});

export let ValidationRules = {
  вредныйФактор: {
    descriptionKey: 'models.классификатор-вредных-факторов.validations.вредныйФактор.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подразделение: {
    descriptionKey: 'models.классификатор-вредных-факторов.validations.подразделение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлассВредФакторE', 'классификатор-вредных-факторов', {
    вредныйФактор: attr('Вредный фактор', { index: 0 }),
    подразделение: belongsTo('i-i-s-uchet-med-zueva10-подразделение', 'Подразделение', {
      наименование: attr('Подразделение', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('КлассВредФакторL', 'классификатор-вредных-факторов', {
    вредныйФактор: attr('Вредный фактор', { index: 0 }),
    подразделение: belongsTo('i-i-s-uchet-med-zueva10-подразделение', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
