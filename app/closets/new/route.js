import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.createRecord('closet');
  },
  actions: {
    save: function(model){
      model.save().then(function (closet){
        this.transitionTo('users')
      })
    }
  }
});
