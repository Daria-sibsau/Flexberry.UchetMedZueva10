import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ИндНапрМедосмMixin
} from '../mixins/regenerated/models/i-i-s-uchet-med-zueva10-инд-напр-медосм';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ИндНапрМедосмMixin, Validations, {
});

defineProjections(Model);

export default Model;
