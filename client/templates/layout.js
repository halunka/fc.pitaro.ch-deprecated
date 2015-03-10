Template.pagesList.helpers({
  pages: function() {
    return Pages.find();
  }
});

Meteor.subscribe('pages');

