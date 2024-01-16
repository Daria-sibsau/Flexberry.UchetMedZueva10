import { Serializer as ПодразделениеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-подразделение';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПодразделениеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
