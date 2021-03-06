import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  boardId: DS.attr('number'),
  userId: DS.attr('number'),
  user: DS.belongsTo('user', { async: true }),
  items: DS.hasMany('item', { async: true })
});
