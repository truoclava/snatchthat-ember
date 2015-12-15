import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('search');
  },
  actions: {
    search: function(model) {
      model.save()
    }
  }
});
