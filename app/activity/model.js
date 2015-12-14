import DS from 'ember-data';

export default DS.Model.extend({
  action: DS.attr('string'),
  trackable_id: DS.attr('number'),
  trackable_type: DS.attr('string'),
  trackable_name: DS.attr('string'),
  trackable_source: DS.attr('string'),
  userId: DS.attr('number'),
  user: DS.belongsTo('user', { async: true}),


  title: Ember.computed("activity", function(){
    var action = this.get('action')
    var type = this.get('trackable_type')
    var trackedName = this.get('trackable_name')
    var userID = this.get('userId')
     debugger;
    var phrase = ""
      if(action === "create" && type === "User"){
        phrase = "Followed" + " " + trackedName
      } else if(action === "destroy" && type === "User"){
        phrase = "Unfollowed" + " " + trackedName
      } else if(action === "create" && type === "Closet"){
        phrase = "Created closet" + " " + trackedName
      } else if(action === "destroy" && type === "Closet"){
        phrase = "Deleted closet" + " " + trackedName
      }
    // debugger;
    // this.get('action') = "destroy"
    return phrase
  })

  


});
