const seasons = [
    {
        year: "2023-2024",
        managers: [
            {
                managerId: 1, // Dom
                teams: [
                    { teamId: 10, draftPosition: 6, wins: 46 }, // Golden State Warriors
                    { teamId: 3, draftPosition: 20, wins: 32 }, // Brooklyn Nets
                    { teamId: 22, draftPosition: 22, wins: 47 } // Orlando Magic
                ],
                totalWins: 125 // Hard-coded total wins for Dom
            },
            {
                managerId: 2, // Martin
                teams: [
                    { teamId: 23, draftPosition: 7, wins: 47 }, // Philadelphia 76ers
                    { teamId: 21, draftPosition: 14, wins: 57 }, // Oklahoma City Thunder
                    { teamId: 11, draftPosition: 25, wins: 41 } // Houston Rockets
                ],
                totalWins: 145 // Hard-coded total wins for Martin
            },
            {
                managerId: 3, // Si
                teams: [
                    { teamId: 13, draftPosition: 11, wins: 51 }, // Los Angeles Clippers
                    { teamId: 20, draftPosition: 15, wins: 50 }, // New York Knicks
                    { teamId: 29, draftPosition: 23, wins: 31 } // Utah Jazz
                ],
                totalWins: 132 // Hard-coded total wins for Si
            },
            {
                managerId: 4, // John
                teams: [
                    { teamId: 8, draftPosition: 3, wins: 57 }, // Denver Nuggets
                    { teamId: 18, draftPosition: 12, wins: 56 }, // Minnesota Timberwolves
                    { teamId: 9, draftPosition: 29, wins: 14 } // Detroit Pistons
                ],
                totalWins: 127 // Hard-coded total wins for John
            },
            {
                managerId: 5, // Tim
                teams: [
                    { teamId: 2, draftPosition: 2, wins: 64 }, // Boston Celtics
                    { teamId: 14, draftPosition: 9, wins: 47 }, // Los Angeles Lakers
                    { teamId: 28, draftPosition: 30, wins: 15 } // Washington Wizards
                ],
                totalWins: 126 // Hard-coded total wins for Tim
            },
            {
                managerId: 6, // Nathan
                teams: [
                    { teamId: 26, draftPosition: 10, wins: 46 }, // Sacramento Kings
                    { teamId: 21, draftPosition: 18, wins: 36 }, // Oklahoma City Thunder
                    { teamId: 5, draftPosition: 21, wins: 39 } // Chicago Bulls
                ],
                totalWins: 121 // Hard-coded total wins for Nathan
            },
            {
                managerId: 7, // Charlie
                teams: [
                    { teamId: 24, draftPosition: 4, wins: 49 }, // Phoenix Suns
                    { teamId: 19, draftPosition: 17, wins: 49 }, // New Orleans Pelicans
                    { teamId: 27, draftPosition: 26, wins: 22 } // San Antonio Spurs
                ],
                totalWins: 120 // Hard-coded total wins for Charlie
            },
            {
                managerId: 8, // KY
                teams: [
                    { teamId: 17, draftPosition: 1, wins: 49 }, // Milwaukee Bucks
                    { teamId: 12, draftPosition: 19, wins: 47 }, // Indiana Pacers
                    { teamId: 25, draftPosition: 28, wins: 21 } // Portland Trail Blazers
                ],
                totalWins: 117 // Hard-coded total wins for KY
            },
            {
                managerId: 9, // Eric
                teams: [
                    { teamId: 6, draftPosition: 5, wins: 48 }, // Cleveland Cavaliers
                    { teamId: 16, draftPosition: 13, wins: 46 }, // Miami Heat
                    { teamId: 23, draftPosition: 27, wins: 21 } // Philadelphia 76ers
                ],
                totalWins: 115 // Hard-coded total wins for Eric
            },
            {
                managerId: 10, // Maz
                teams: [
                    { teamId: 15, draftPosition: 8, wins: 27 }, // Memphis Grizzlies
                    { teamId: 7, draftPosition: 16, wins: 50 }, // Dallas Mavericks
                    { teamId: 28, draftPosition: 24, wins: 25 } // Toronto Raptors
                ],
                totalWins: 102 // Hard-coded total wins for Maz
            }
        ]
    },
    {
        year: "2022-2023",
        managers: [
            {
                managerId: 9, // Eric
                teams: [
                    { teamId: 24, draftPosition: 7, wins: 45 }, // Suns
                    { teamId: 6, draftPosition: 11, wins: 51 }, // Cavaliers
                    { teamId: 29, draftPosition: 28, wins: 37 } // Jazz
                ],
                totalWins: 133 // Hard-coded total wins for Eric
            },
            {
                managerId: 10, // Maz
                teams: [
                    { teamId: 2, draftPosition: 4, wins: 57 }, // Celtics
                    { teamId: 21, draftPosition: 16, wins: 41 }, // Hawks
                    { teamId: 12, draftPosition: 26, wins: 35 } // Pacers
                ],
                totalWins: 133 // Hard-coded total wins for Maz
            },
            {
                managerId: 6, // Nathan
                teams: [
                    { teamId: 17, draftPosition: 1, wins: 58 }, // Bucks
                    { teamId: 5, draftPosition: 19, wins: 40 }, // Bulls
                    { teamId: 22, draftPosition: 25, wins: 34 } // Magic
                ],
                totalWins: 132 // Hard-coded total wins for Nathan
            },
            {
                managerId: 1, // Dom
                teams: [
                    { teamId: 7, draftPosition: 9, wins: 38 }, // Mavericks
                    { teamId: 14, draftPosition: 18, wins: 43 }, // Lakers
                    { teamId: 20, draftPosition: 21, wins: 47 } // Knicks
                ],
                totalWins: 128 // Hard-coded total wins for Dom
            },
            {
                managerId: 4, // John
                teams: [
                    { teamId: 13, draftPosition: 6, wins: 44 }, // Clippers
                    { teamId: 18, draftPosition: 13, wins: 42 }, // Wolves
                    { teamId: 21, draftPosition: 27, wins: 40 } // Thunder
                ],
                totalWins: 126 // Hard-coded total wins for John
            },
            {
                managerId: 5, // Tim
                teams: [
                    { teamId: 23, draftPosition: 5, wins: 54 }, // 76ers
                    { teamId: 24, draftPosition: 20, wins: 33 }, // Blazers
                    { teamId: 30, draftPosition: 22, wins: 35 } // Wizards
                ],
                totalWins: 122 // Hard-coded total wins for Tim
            },
            {
                managerId: 11, // Devon
                teams: [
                    { teamId: 3, draftPosition: 8, wins: 45 }, // Nets
                    { teamId: 26, draftPosition: 17, wins: 48 }, // Kings
                    { teamId: 4, draftPosition: 23, wins: 27 } // Hornets
                ],
                totalWins: 120 // Hard-coded total wins for Devon
            },
            {
                managerId: 7, // Charlie
                teams: [
                    { teamId: 8, draftPosition: 3, wins: 53 }, // Nuggets
                    { teamId: 16, draftPosition: 12, wins: 44 }, // Heat
                    { teamId: 11, draftPosition: 30, wins: 22 } // Rockets
                ],
                totalWins: 119 // Hard-coded total wins for Charlie
            },
            {
                managerId: 2, // Martin
                teams: [
                    { teamId: 15, draftPosition: 10, wins: 51 }, // Grizzlies
                    { teamId: 19, draftPosition: 15, wins: 42 }, // Pelicans
                    { teamId: 9, draftPosition: 24, wins: 17 } // Pistons
                ],
                totalWins: 110 // Hard-coded total wins for Martin
            },
            {
                managerId: 8, // KY
                teams: [
                    { teamId: 10, draftPosition: 2, wins: 44 }, // Warriors
                    { teamId: 28, draftPosition: 14, wins: 41 }, // Raptors
                    { teamId: 27, draftPosition: 29, wins: 22 } // Spurs
                ],
                totalWins: 107 // Hard-coded total wins for KY
            }
        ]
    },
    {
        year: "2021-2022",
        managers: [
            {
                managerId: 11, // Devon
                teams: [
                    { teamId: 16, draftPosition: 7, wins: 53 }, // Heat
                    { teamId: 15, draftPosition: 17, wins: 56 }, // Grizzlies
                    { teamId: 28, draftPosition: 22, wins: 48 } // Raptors
                ],
                totalWins: 157 // Hard-coded total wins for Devon
            },
            {
                managerId: 9, // Eric
                teams: [
                    { teamId: 10, draftPosition: 9, wins: 53 }, // Warriors
                    { teamId: 7, draftPosition: 11, wins: 52 }, // Mavericks
                    { teamId: 6, draftPosition: 26, wins: 44 } // Cavaliers
                ],
                totalWins: 149 // Hard-coded total wins for Eric
            },
            {
                managerId: 5, // Tim
                teams: [
                    { teamId: 24, draftPosition: 4, wins: 64 }, // Suns
                    { teamId: 19, draftPosition: 20, wins: 36 }, // Pelicans
                    { teamId: 18, draftPosition: 24, wins: 46 } // Wolves
                ],
                totalWins: 146 // Hard-coded total wins for Tim
            },
            {
                managerId: 1, // Dom
                teams: [
                    { teamId: 23, draftPosition: 8, wins: 51 }, // 76ers
                    { teamId: 4, draftPosition: 19, wins: 43 }, // Hornets
                    { teamId: 26, draftPosition: 21, wins: 30 } // Kings
                ],
                totalWins: 124 // Hard-coded total wins for Dom
            },
            {
                managerId: 10, // Maz
                teams: [
                    { teamId: 21, draftPosition: 10, wins: 43 }, // Hawks
                    { teamId: 5, draftPosition: 15, wins: 46 }, // Bulls
                    { teamId: 30, draftPosition: 23, wins: 35 } // Wizards
                ],
                totalWins: 124 // Hard-coded total wins for Maz
            },
            {
                managerId: 6, // Nathan
                teams: [
                    { teamId: 3, draftPosition: 3, wins: 44 }, // Nets
                    { teamId: 2, draftPosition: 12, wins: 51 }, // Celtics
                    { teamId: 21, draftPosition: 30, wins: 24 } // Thunder
                ],
                totalWins: 119 // Hard-coded total wins for Nathan
            },
            {
                managerId: 4, // John
                teams: [
                    { teamId: 8, draftPosition: 5, wins: 48 }, // Nuggets
                    { teamId: 13, draftPosition: 13, wins: 42 }, // Clippers
                    { teamId: 9, draftPosition: 27, wins: 23 } // Pistons
                ],
                totalWins: 113 // Hard-coded total wins for John
            },
            {
                managerId: 8, // KY
                teams: [
                    { teamId: 17, draftPosition: 1, wins: 51 }, // Bucks
                    { teamId: 20, draftPosition: 18, wins: 37 }, // Knicks
                    { teamId: 22, draftPosition: 28, wins: 22 } // Magic
                ],
                totalWins: 110 // Hard-coded total wins for KY
            },
            {
                managerId: 2, // Martin
                teams: [
                    { teamId: 29, draftPosition: 2, wins: 49 }, // Jazz
                    { teamId: 25, draftPosition: 14, wins: 27 }, // Blazers
                    { teamId: 11, draftPosition: 29, wins: 20 } // Rockets
                ],
                totalWins: 96 // Hard-coded total wins for Martin
            },
            {
                managerId: 7, // Charlie
                teams: [
                    { teamId: 14, draftPosition: 6, wins: 33 }, // Lakers
                    { teamId: 12, draftPosition: 16, wins: 25 }, // Pacers
                    { teamId: 27, draftPosition: 25, wins: 34 } // Spurs
                ],
                totalWins: 92 // Hard-coded total wins for Charlie
            }
        ]
    },
    {
        year: "2020-2021",
        managers: [
            {
                managerId: 9, // Eric
                teams: [
                    { teamId: 16, draftPosition: 6, wins: 40 }, // Heat
                    { teamId: 24, draftPosition: 12, wins: 51 }, // Suns
                    { teamId: 20, draftPosition: 28, wins: 41 } // Knicks
                ],
                totalWins: 132 // Hard-coded total wins for Eric
            },
            {
                managerId: 1, // Dom
                teams: [
                    { teamId: 17, draftPosition: 1, wins: 46 }, // Bucks
                    { teamId: 15, draftPosition: 20, wins: 38 }, // Grizzlies
                    { teamId: 4, draftPosition: 26, wins: 33 } // Hornets
                ],
                totalWins: 117 // Hard-coded total wins for Dom
            },
            {
                managerId: 4, // John
                teams: [
                    { teamId: 29, draftPosition: 9, wins: 52 }, // Jazz
                    { teamId: 7, draftPosition: 11, wins: 42 }, // Mavericks
                    { teamId: 9, draftPosition: 27, wins: 20 } // Pistons
                ],
                totalWins: 114 // Hard-coded total wins for John
            },
            {
                managerId: 8, // KY
                teams: [
                    { teamId: 23, draftPosition: 8, wins: 49 }, // 76ers
                    { teamId: 19, draftPosition: 18, wins: 31 }, // Pelicans
                    { teamId: 27, draftPosition: 21, wins: 33 } // Spurs
                ],
                totalWins: 113 // Hard-coded total wins for KY
            },
            {
                managerId: 11, // Devon
                teams: [
                    { teamId: 25, draftPosition: 10, wins: 42 }, // Blazers
                    { teamId: 10, draftPosition: 14, wins: 39 }, // Warriors
                    { teamId: 5, draftPosition: 24, wins: 31 } // Bulls
                ],
                totalWins: 112 // Hard-coded total wins for Devon
            },
            {
                managerId: 6, // Nathan
                teams: [
                    { teamId: 3, draftPosition: 7, wins: 48 }, // Nets
                    { teamId: 21, draftPosition: 17, wins: 41 }, // Hawks
                    { teamId: 22, draftPosition: 23, wins: 21 } // Magic
                ],
                totalWins: 110 // Hard-coded total wins for Nathan
            },
            {
                managerId: 2, // Martin
                teams: [
                    { teamId: 2, draftPosition: 4, wins: 36 }, // Celtics
                    { teamId: 30, draftPosition: 19, wins: 34 }, // Wizards
                    { teamId: 26, draftPosition: 22, wins: 31 } // Kings
                ],
                totalWins: 101 // Hard-coded total wins for Martin
            },
            {
                managerId: 5, // Tim
                teams: [
                    { teamId: 14, draftPosition: 2, wins: 42 }, // Lakers
                    { teamId: 12, draftPosition: 15, wins: 34 }, // Pacers
                    { teamId: 21, draftPosition: 29, wins: 22 } // Thunder
                ],
                totalWins: 98 // Hard-coded total wins for Tim
            },
            {
                managerId: 10, // Maz
                teams: [
                    { teamId: 13, draftPosition: 3, wins: 47 }, // Clippers
                    { teamId: 28, draftPosition: 13, wins: 27 }, // Raptors
                    { teamId: 6, draftPosition: 30, wins: 22 } // Cavaliers
                ],
                totalWins: 96 // Hard-coded total wins for Maz
            },
            {
                managerId: 7, // Charlie
                teams: [
                    { teamId: 8, draftPosition: 5, wins: 47 }, // Nuggets
                    { teamId: 11, draftPosition: 16, wins: 17 }, // Rockets
                    { teamId: 18, draftPosition: 25, wins: 23 } // Wolves
                ],
                totalWins: 87 // Hard-coded total wins for Charlie
            }
        ]
    },
];

export default seasons;