import {
  defineNamespace,
  defineProjections,
  Model as МедУчреждениеMixin
} from '../mixins/regenerated/models/i-i-s-uchet-med-zueva10-мед-учреждение';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МедУчреждениеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
