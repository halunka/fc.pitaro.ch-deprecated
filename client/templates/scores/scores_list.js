Template.scoresList.helpers({
  scores: function() {
    return Matches.find();
  }
});

