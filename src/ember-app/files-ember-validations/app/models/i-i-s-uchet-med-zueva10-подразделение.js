import {
  defineNamespace,
  defineProjections,
  Model as ПодразделениеMixin
} from '../mixins/regenerated/models/i-i-s-uchet-med-zueva10-подразделение';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПодразделениеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
