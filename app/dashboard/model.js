import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', { async: true }),
  userId: DS.attr('number'),
  items: DS.hasMany('item', { async: true }),
  closets: DS.hasMany('closet', {async: true}),
  closetItems: DS.hasMany('item', { async: true })
});
