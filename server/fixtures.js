if (Pages.find().count() === 0) {
  Pages.insert({
    title: 'Home',
    uri: '/',
    layout: 'layout',
    template: 'home'
  });
}

if (Scores.find().count() === 0) {
  Scores.insert({
    homeTeam: 'FC Pitaro Fotografie',
    visitingTeam: 'Chur 97',
    homeScore: '3',
    visitingScore: '0'
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
