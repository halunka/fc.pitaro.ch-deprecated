Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home', 
  waitOn: function() {
    return Meteor.subscribe('matches')
  }
});

Router.route('/match/create', {
  name: 'matchCreate'
});

Router.route('/match/:_id/update', {
  name: 'matchUpdate', 
  waitOn: function() {
    return Meteor.subscribe('getMatchById', this.params._id);
  },
  data: function() {
    return Matches.findOne({_id: this.params._id});
  }
});
