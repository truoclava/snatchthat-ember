import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  closets: DS.hasMany('closet', { async: true }),
  activities: DS.hasMany('activity', { async: true}),
  test: Ember.computed(function(){return "Beef"})
});
