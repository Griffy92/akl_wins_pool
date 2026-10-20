// The current season only needs who drafted what. Names, logos and CBS names
// come from teams.js, and wins/losses are filled in from the live standings.
const thisSeason = {
  year: '2026-2027',
  managers: [
    { managerId: 3, teams: [ // Si
      { teamId: 21, draftPosition: 1 },  // Oklahoma City Thunder
      { teamId: 29, draftPosition: 20 }, // Utah Jazz
      { teamId: 26, draftPosition: 28 }, // Sacramento Kings
    ] },
    { managerId: 6, teams: [ // Nathan
      { teamId: 27, draftPosition: 2 },  // San Antonio Spurs
      { teamId: 12, draftPosition: 14 }, // Indiana Pacers
      { teamId: 3, draftPosition: 30 },  // Brooklyn Nets
    ] },
    { managerId: 13, teams: [ // Steve
      { teamId: 20, draftPosition: 3 },  // New York Knicks
      { teamId: 28, draftPosition: 13 }, // Toronto Raptors
      { teamId: 17, draftPosition: 29 }, // Milwaukee Bucks
    ] },
    { managerId: 4, teams: [ // John
      { teamId: 2, draftPosition: 4 },   // Boston Celtics
      { teamId: 1, draftPosition: 16 },  // Atlanta Hawks
      { teamId: 5, draftPosition: 25 },  // Chicago Bulls
    ] },
    { managerId: 2, teams: [ // Martin
      { teamId: 8, draftPosition: 5 },   // Denver Nuggets
      { teamId: 14, draftPosition: 12 }, // Los Angeles Lakers
      { teamId: 15, draftPosition: 26 }, // Memphis Grizzlies
    ] },
    { managerId: 12, teams: [ // Dobbie
      { teamId: 9, draftPosition: 6 },   // Detroit Pistons
      { teamId: 22, draftPosition: 15 }, // Orlando Magic
      { teamId: 19, draftPosition: 24 }, // New Orleans Pelicans
    ] },
    { managerId: 8, teams: [ // KY
      { teamId: 23, draftPosition: 7 },  // Philadelphia 76ers
      { teamId: 18, draftPosition: 10 }, // Minnesota Timberwolves
      { teamId: 13, draftPosition: 27 }, // Los Angeles Clippers
    ] },
    { managerId: 10, teams: [ // Maz
      { teamId: 11, draftPosition: 8 },  // Houston Rockets
      { teamId: 4, draftPosition: 19 },  // Charlotte Hornets
      { teamId: 7, draftPosition: 22 },  // Dallas Mavericks
    ] },
    { managerId: 5, teams: [ // Tim
      { teamId: 6, draftPosition: 9 },   // Cleveland Cavaliers
      { teamId: 25, draftPosition: 17 }, // Portland Trail Blazers
      { teamId: 30, draftPosition: 23 }, // Washington Wizards
    ] },
    { managerId: 1, teams: [ // Dom
      { teamId: 16, draftPosition: 11 }, // Miami Heat
      { teamId: 24, draftPosition: 18 }, // Phoenix Suns
      { teamId: 10, draftPosition: 21 }, // Golden State Warriors
    ] },
  ],
};

export default thisSeason;