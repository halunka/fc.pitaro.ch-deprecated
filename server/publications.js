Meteor.publish('pages',
    function() {
      return Pages.find();
});

Meteor.publish('matches',
    function() {
      return Matches.find();
});

Meteor.publish('shortcuts',
    function() {
      return Shortcuts.find();
});
