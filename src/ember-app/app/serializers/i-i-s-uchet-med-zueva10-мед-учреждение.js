import { Serializer as МедУчреждениеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-мед-учреждение';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МедУчреждениеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
