import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-uchet-med-zueva10-инд-напр-медосм-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'вредные-факторы-производства+классВредФактор':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'классВредФактор',
            projection: 'КлассВредФакторL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
