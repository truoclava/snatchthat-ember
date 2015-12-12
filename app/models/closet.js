import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  // closets: DS.hasMany('closet', { async: true }),
});
