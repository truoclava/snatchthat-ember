import DS from 'ember-data';

export default DS.Model.extend({
  closet: DS.belongsTo('closet', { async: true }),
  item: DS.belongsTo('item', { async: true }),
});
