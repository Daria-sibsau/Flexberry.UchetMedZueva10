import {
  defineProjections,
  Model as ВреднФактПроизMixin
} from '../mixins/regenerated/models/вредные-факторы-производства';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВреднФактПроизMixin, {
});

defineProjections(Model);

export default Model;
