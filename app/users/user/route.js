import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
      debugger;
    return this.store.find('user', params.user_id);
  }
});
