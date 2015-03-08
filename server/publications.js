Meteor.publish('pages',
    function() {
      return Pages.find();
});

Meteor.publish('scores',
    function() {
      return Scores.find();
});

Meteor.publish('shortcuts',
    function() {
      return Shortcuts.find();
});
