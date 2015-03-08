Template.scoresList.helpers({
  scores: function() {
    return Scores.find();
  }
});

Meteor.subscribe('scores');
