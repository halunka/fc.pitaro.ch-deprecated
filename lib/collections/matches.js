Matches = new Mongo.Collection('matches');

Matches.attachSchema(new SimpleSchema({
  teams: {
    type: Object
  },

  "teams.home": {
    type: String,
    label: "Heimteam",
    max: 15
  },

  "teams.visiting": {
    type: String,
    label: "Ausw&auml;rtsteam",
    max: 15
  },

  scores: {
    type: Object
  },

  "scores.home": {
    type: Number,
    label: "Punkte Heimteam"
  },

  "scores.visiting": {
    type: Number,
    label: "Punkte Ausw&auml;rtsteam"
  },

  date: {
    type: Date,
    label: "Spieldatum",
    autoValue: function() {
      if(this.value) return this.value;
      return new Date();
    }
  }
}));
