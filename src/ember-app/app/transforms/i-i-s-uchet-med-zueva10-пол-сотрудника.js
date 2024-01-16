import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолСотрудникаEnum from '../enums/i-i-s-uchet-med-zueva10-пол-сотрудника';

export default FlexberryEnum.extend({
  enum: ПолСотрудникаEnum,
  sourceType: 'IIS.UchetMedZueva10.ПолСотрудника'
});
