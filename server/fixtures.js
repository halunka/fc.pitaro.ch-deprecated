if (Pages.find().count() === 0) {
  Pages.insert({
    title: 'Home',
    uri: '/',
    layout: 'layout',
    template: 'home'
  });
}

if (Matches.find().count() === 0) {
  Matches.insert({
    teams: {
      home: 'FC Pitaro',
      visiting: 'Chur 97'
    },
    scores: {
      home: 3,
      visiting: 0
    }
  });

  Matches.insert({
    teams: {
      home: 'FC Pitaro',
      visiting: 'FC Ems'
    },
    scores: {
      home: 0,
      visiting: 7
    }
  });

  Matches.insert({
    teams: {
      home: 'FC Pitaro',
      visiting: 'Metallbau'
    },
    scores: {
      home: 1,
      visiting: 1
    }
  });

  Matches.insert({
    teams: {
      home: 'FC Pitaro',
      visiting: 'FCB'
    },
    scores: {
      home: 1,
      visiting: 1
    }
  });
}

if (Shortcuts.find().count() === 0) {
  Shortcuts.insert({
    title: 'Club',
    uri: '/club'
  });

  Shortcuts.insert({
    title: 'Spieler',
    uri: '/spieler'
  });

  Shortcuts.insert({
    title: 'Gallerie',
    uri: '/gallerie'
  });
}
