import DS from 'ember-data';

export default DS.Model.extend({
  keyword: DS.attr('string'),
  sourceType: DS.attr('string'),
});
