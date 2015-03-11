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
    homeTeam: 'FC Pitaro',
    visitingTeam: 'Chur 97',
    homeScore: '3',
    visitingScore: '0'
  });

  Matches.insert({
    homeTeam: 'FC Pitaro',
    visitingTeam: 'FC Ems',
    homeScore: '0',
    visitingScore: '7'
  });

  Matches.insert({
    homeTeam: 'FC Pitaro',
    visitingTeam: 'Metallbau',
    homeScore: '1',
    visitingScore: '1'
  });

  Matches.insert({
    homeTeam: 'FC Pitaro',
    visitingTeam: 'FCB',
    homeScore: '1',
    visitingScore: '1'
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
