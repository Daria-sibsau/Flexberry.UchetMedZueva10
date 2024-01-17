import { Serializer as КлассВредФакторSerializer } from
  '../mixins/regenerated/serializers/классификатор-вредных-факторов';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КлассВредФакторSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
