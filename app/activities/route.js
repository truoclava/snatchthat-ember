import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('activity');

  },
});

// export default Ember.reopenClass({
//   function(){
//     console.log('hello');
//   } 
// });