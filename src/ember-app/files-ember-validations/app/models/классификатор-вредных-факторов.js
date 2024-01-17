import {
  defineProjections,
  Model as КлассВредФакторMixin
} from '../mixins/regenerated/models/классификатор-вредных-факторов';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлассВредФакторMixin, {
});

defineProjections(Model);

export default Model;
