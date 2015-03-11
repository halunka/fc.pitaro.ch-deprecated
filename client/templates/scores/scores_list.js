Template.scoresList.helpers({
  scores: function() {
    return Matches.find();
  }
});

Meteor.subscribe('matches');
