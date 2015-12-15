import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  sourceId: DS.attr('string'),
  sourceType: DS.attr('string'),
  image_url: DS.attr('string'),
  closets: DS.hasMany('closet', { async: true }),
});
