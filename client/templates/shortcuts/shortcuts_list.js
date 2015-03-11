Template.shortcutsList.helpers({
  shortcuts: function() {
    return Shortcuts.find();
  }
});

Meteor.subscribe('shortcuts');
