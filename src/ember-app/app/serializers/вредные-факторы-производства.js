import { Serializer as ВреднФактПроизSerializer } from
  '../mixins/regenerated/serializers/вредные-факторы-производства';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВреднФактПроизSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
