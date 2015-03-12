Meteor.publish('pages',
  function() {
    return Pages.find();
});

Meteor.publish('matches',
  function() {
    return Matches.find();
});

Meteor.publish('getMatchById',
  function(_id) {
    return Matches.findOne(_id);
});

Meteor.publish('shortcuts',
  function() {
    return Shortcuts.find();
});
