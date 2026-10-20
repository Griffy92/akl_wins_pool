// Past seasons, newest first.
// totalWins is no longer stored: it is computed from each team's wins.
const seasons = [
    {
        year: "2025-2026",
        managers: [
            {
                managerId: 2, // Martin
                teams: [
                    { teamId: 18, draftPosition: 6, wins: 49 }, // Timberwolves
                    { teamId: 2, draftPosition: 19, wins: 56 }, // Celtics
                    { teamId: 16, draftPosition: 23, wins: 43 } // Heat
                ]
            },
            {
                managerId: 8, // KY
                teams: [
                    { teamId: 13, draftPosition: 8, wins: 42 }, // Clippers
                    { teamId: 27, draftPosition: 13, wins: 62 }, // Spurs
                    { teamId: 25, draftPosition: 25, wins: 42 } // Trail Blazers
                ]
            },
            {
                managerId: 5, // Tim
                teams: [
                    { teamId: 21, draftPosition: 1, wins: 64 }, // Thunder
                    { teamId: 9, draftPosition: 15, wins: 60 }, // Pistons
                    { teamId: 3, draftPosition: 30, wins: 20 } // Nets
                ]
            },
            {
                managerId: 4, // John
                teams: [
                    { teamId: 22, draftPosition: 7, wins: 45 }, // Magic
                    { teamId: 23, draftPosition: 16, wins: 45 }, // 76ers
                    { teamId: 24, draftPosition: 24, wins: 45 } // Suns
                ]
            },
            {
                managerId: 13, // Steve
                teams: [
                    { teamId: 14, draftPosition: 11, wins: 53 }, // Lakers
                    { teamId: 5, draftPosition: 18, wins: 31 }, // Bulls
                    { teamId: 28, draftPosition: 22, wins: 46 } // Raptors
                ]
            },
            {
                managerId: 12, // Dobbie
                teams: [
                    { teamId: 11, draftPosition: 5, wins: 52 }, // Rockets
                    { teamId: 15, draftPosition: 12, wins: 25 }, // Grizzlies
                    { teamId: 4, draftPosition: 27, wins: 44 } // Hornets
                ]
            },
            {
                managerId: 1, // Dom
                teams: [
                    { teamId: 6, draftPosition: 2, wins: 52 }, // Cavaliers
                    { teamId: 1, draftPosition: 14, wins: 46 }, // Hawks
                    { teamId: 29, draftPosition: 28, wins: 22 } // Jazz
                ]
            },
            {
                managerId: 3, // Si
                teams: [
                    { teamId: 20, draftPosition: 4, wins: 53 }, // Knicks
                    { teamId: 17, draftPosition: 17, wins: 32 }, // Bucks
                    { teamId: 19, draftPosition: 26, wins: 26 } // Pelicans
                ]
            },
            {
                managerId: 6, // Nathan
                teams: [
                    { teamId: 8, draftPosition: 3, wins: 54 }, // Nuggets
                    { teamId: 7, draftPosition: 10, wins: 26 }, // Mavericks
                    { teamId: 30, draftPosition: 29, wins: 17 } // Wizards
                ]
            },
            {
                managerId: 10, // Maz
                teams: [
                    { teamId: 10, draftPosition: 9, wins: 37 }, // Warriors
                    { teamId: 12, draftPosition: 20, wins: 26 }, // Pacers
                    { teamId: 26, draftPosition: 21, wins: 17 } // Kings
                ]
            }
        ]
    },
    {
        year: "2024-2025",
        managers: [
            {
                managerId: 3, // Si
                teams: [
                    { teamId: 20, draftPosition: 5, wins: 51 }, // Knicks
                    { teamId: 10, draftPosition: 15, wins: 48 }, // Warriors
                    { teamId: 9, draftPosition: 26, wins: 44 } // Pistons
                ]
            },
            {
                managerId: 1, // Dom
                teams: [
                    { teamId: 2, draftPosition: 1, wins: 61 }, // Celtics
                    { teamId: 14, draftPosition: 16, wins: 50 }, // Lakers
                    { teamId: 3, draftPosition: 30, wins: 26 } // Nets
                ]
            },
            {
                managerId: 5, // Tim
                teams: [
                    { teamId: 17, draftPosition: 7, wins: 48 }, // Bucks
                    { teamId: 15, draftPosition: 18, wins: 48 }, // Grizzlies
                    { teamId: 5, draftPosition: 24, wins: 39 } // Bulls
                ]
            },
            {
                managerId: 4, // John
                teams: [
                    { teamId: 6, draftPosition: 10, wins: 64 }, // Cavaliers
                    { teamId: 16, draftPosition: 17, wins: 37 }, // Heat
                    { teamId: 28, draftPosition: 23, wins: 30 } // Raptors
                ]
            },
            {
                managerId: 2, // Martin
                teams: [
                    { teamId: 21, draftPosition: 2, wins: 68 }, // Thunder
                    { teamId: 26, draftPosition: 14, wins: 40 }, // Kings
                    { teamId: 30, draftPosition: 29, wins: 18 } // Wizards
                ]
            },
            {
                managerId: 13, // Steve
                teams: [
                    { teamId: 7, draftPosition: 6, wins: 39 }, // Mavericks
                    { teamId: 27, draftPosition: 20, wins: 34 }, // Spurs
                    { teamId: 13, draftPosition: 22, wins: 50 } // Clippers
                ]
            },
            {
                managerId: 8, // KY
                teams: [
                    { teamId: 23, draftPosition: 8, wins: 24 }, // 76ers
                    { teamId: 11, draftPosition: 19, wins: 52 }, // Rockets
                    { teamId: 1, draftPosition: 21, wins: 40 } // Hawks
                ]
            },
            {
                managerId: 10, // Maz
                teams: [
                    { teamId: 12, draftPosition: 9, wins: 50 }, // Pacers
                    { teamId: 22, draftPosition: 11, wins: 41 }, // Magic
                    { teamId: 4, draftPosition: 25, wins: 19 } // Hornets
                ]
            },
            {
                managerId: 6, // Nathan
                teams: [
                    { teamId: 18, draftPosition: 3, wins: 49 }, // Timberwolves
                    { teamId: 19, draftPosition: 13, wins: 21 }, // Pelicans
                    { teamId: 25, draftPosition: 28, wins: 36 } // Trail Blazers
                ]
            },
            {
                managerId: 12, // Dobbie
                teams: [
                    { teamId: 8, draftPosition: 4, wins: 50 }, // Nuggets
                    { teamId: 24, draftPosition: 12, wins: 36 }, // Suns
                    { teamId: 29, draftPosition: 27, wins: 17 } // Jazz
                ]
            }
        ]
    },
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
            },
            {
                managerId: 2, // Martin
                teams: [
                    { teamId: 23, draftPosition: 7, wins: 47 }, // Philadelphia 76ers
                    { teamId: 21, draftPosition: 14, wins: 57 }, // Oklahoma City Thunder
                    { teamId: 11, draftPosition: 25, wins: 41 } // Houston Rockets
                ],
            },
            {
                managerId: 3, // Si
                teams: [
                    { teamId: 13, draftPosition: 11, wins: 51 }, // Los Angeles Clippers
                    { teamId: 20, draftPosition: 15, wins: 50 }, // New York Knicks
                    { teamId: 29, draftPosition: 23, wins: 31 } // Utah Jazz
                ],
            },
            {
                managerId: 4, // John
                teams: [
                    { teamId: 8, draftPosition: 3, wins: 57 }, // Denver Nuggets
                    { teamId: 18, draftPosition: 12, wins: 56 }, // Minnesota Timberwolves
                    { teamId: 9, draftPosition: 29, wins: 14 } // Detroit Pistons
                ],
            },
            {
                managerId: 5, // Tim
                teams: [
                    { teamId: 2, draftPosition: 2, wins: 64 }, // Boston Celtics
                    { teamId: 14, draftPosition: 9, wins: 47 }, // Los Angeles Lakers
                    { teamId: 30, draftPosition: 30, wins: 15 } // Washington Wizards (teamId corrected)
                ],
            },
            {
                managerId: 6, // Nathan
                teams: [
                    { teamId: 26, draftPosition: 10, wins: 46 }, // Sacramento Kings
                    { teamId: 1, draftPosition: 18, wins: 36 }, // Atlanta Hawks (teamId corrected)
                    { teamId: 5, draftPosition: 21, wins: 39 } // Chicago Bulls
                ],
            },
            {
                managerId: 7, // Charlie
                teams: [
                    { teamId: 24, draftPosition: 4, wins: 49 }, // Phoenix Suns
                    { teamId: 19, draftPosition: 17, wins: 49 }, // New Orleans Pelicans
                    { teamId: 27, draftPosition: 26, wins: 22 } // San Antonio Spurs
                ],
            },
            {
                managerId: 8, // KY
                teams: [
                    { teamId: 17, draftPosition: 1, wins: 49 }, // Milwaukee Bucks
                    { teamId: 12, draftPosition: 19, wins: 47 }, // Indiana Pacers
                    { teamId: 25, draftPosition: 28, wins: 21 } // Portland Trail Blazers
                ],
            },
            {
                managerId: 9, // Eric
                teams: [
                    { teamId: 6, draftPosition: 5, wins: 48 }, // Cleveland Cavaliers
                    { teamId: 16, draftPosition: 13, wins: 46 }, // Miami Heat
                    { teamId: 4, draftPosition: 27, wins: 21 } // Charlotte Hornets (teamId corrected)
                ],
            },
            {
                managerId: 10, // Maz
                teams: [
                    { teamId: 15, draftPosition: 8, wins: 27 }, // Memphis Grizzlies
                    { teamId: 7, draftPosition: 16, wins: 50 }, // Dallas Mavericks
                    { teamId: 28, draftPosition: 24, wins: 25 } // Toronto Raptors
                ],
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
            },
            {
                managerId: 10, // Maz
                teams: [
                    { teamId: 2, draftPosition: 4, wins: 57 }, // Celtics
                    { teamId: 1, draftPosition: 16, wins: 41 }, // Hawks (teamId corrected)
                    { teamId: 12, draftPosition: 26, wins: 35 } // Pacers
                ],
            },
            {
                managerId: 6, // Nathan
                teams: [
                    { teamId: 17, draftPosition: 1, wins: 58 }, // Bucks
                    { teamId: 5, draftPosition: 19, wins: 40 }, // Bulls
                    { teamId: 22, draftPosition: 25, wins: 34 } // Magic
                ],
            },
            {
                managerId: 1, // Dom
                teams: [
                    { teamId: 7, draftPosition: 9, wins: 38 }, // Mavericks
                    { teamId: 14, draftPosition: 18, wins: 43 }, // Lakers
                    { teamId: 20, draftPosition: 21, wins: 47 } // Knicks
                ],
            },
            {
                managerId: 4, // John
                teams: [
                    { teamId: 13, draftPosition: 6, wins: 44 }, // Clippers
                    { teamId: 18, draftPosition: 13, wins: 42 }, // Wolves
                    { teamId: 21, draftPosition: 27, wins: 40 } // Thunder
                ],
            },
            {
                managerId: 5, // Tim
                teams: [
                    { teamId: 23, draftPosition: 5, wins: 54 }, // 76ers
                    { teamId: 25, draftPosition: 20, wins: 33 }, // Blazers (teamId corrected)
                    { teamId: 30, draftPosition: 22, wins: 35 } // Wizards
                ],
            },
            {
                managerId: 11, // Devon
                teams: [
                    { teamId: 3, draftPosition: 8, wins: 45 }, // Nets
                    { teamId: 26, draftPosition: 17, wins: 48 }, // Kings
                    { teamId: 4, draftPosition: 23, wins: 27 } // Hornets
                ],
            },
            {
                managerId: 7, // Charlie
                teams: [
                    { teamId: 8, draftPosition: 3, wins: 53 }, // Nuggets
                    { teamId: 16, draftPosition: 12, wins: 44 }, // Heat
                    { teamId: 11, draftPosition: 30, wins: 22 } // Rockets
                ],
            },
            {
                managerId: 2, // Martin
                teams: [
                    { teamId: 15, draftPosition: 10, wins: 51 }, // Grizzlies
                    { teamId: 19, draftPosition: 15, wins: 42 }, // Pelicans
                    { teamId: 9, draftPosition: 24, wins: 17 } // Pistons
                ],
            },
            {
                managerId: 8, // KY
                teams: [
                    { teamId: 10, draftPosition: 2, wins: 44 }, // Warriors
                    { teamId: 28, draftPosition: 14, wins: 41 }, // Raptors
                    { teamId: 27, draftPosition: 29, wins: 22 } // Spurs
                ],
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
            },
            {
                managerId: 9, // Eric
                teams: [
                    { teamId: 10, draftPosition: 9, wins: 53 }, // Warriors
                    { teamId: 7, draftPosition: 11, wins: 52 }, // Mavericks
                    { teamId: 6, draftPosition: 26, wins: 44 } // Cavaliers
                ],
            },
            {
                managerId: 5, // Tim
                teams: [
                    { teamId: 24, draftPosition: 4, wins: 64 }, // Suns
                    { teamId: 19, draftPosition: 20, wins: 36 }, // Pelicans
                    { teamId: 18, draftPosition: 24, wins: 46 } // Wolves
                ],
            },
            {
                managerId: 1, // Dom
                teams: [
                    { teamId: 23, draftPosition: 8, wins: 51 }, // 76ers
                    { teamId: 4, draftPosition: 19, wins: 43 }, // Hornets
                    { teamId: 26, draftPosition: 21, wins: 30 } // Kings
                ],
            },
            {
                managerId: 10, // Maz
                teams: [
                    { teamId: 1, draftPosition: 10, wins: 43 }, // Hawks (teamId corrected)
                    { teamId: 5, draftPosition: 15, wins: 46 }, // Bulls
                    { teamId: 30, draftPosition: 23, wins: 35 } // Wizards
                ],
            },
            {
                managerId: 6, // Nathan
                teams: [
                    { teamId: 3, draftPosition: 3, wins: 44 }, // Nets
                    { teamId: 2, draftPosition: 12, wins: 51 }, // Celtics
                    { teamId: 21, draftPosition: 30, wins: 24 } // Thunder
                ],
            },
            {
                managerId: 4, // John
                teams: [
                    { teamId: 8, draftPosition: 5, wins: 48 }, // Nuggets
                    { teamId: 13, draftPosition: 13, wins: 42 }, // Clippers
                    { teamId: 9, draftPosition: 27, wins: 23 } // Pistons
                ],
            },
            {
                managerId: 8, // KY
                teams: [
                    { teamId: 17, draftPosition: 1, wins: 51 }, // Bucks
                    { teamId: 20, draftPosition: 18, wins: 37 }, // Knicks
                    { teamId: 22, draftPosition: 28, wins: 22 } // Magic
                ],
            },
            {
                managerId: 2, // Martin
                teams: [
                    { teamId: 29, draftPosition: 2, wins: 49 }, // Jazz
                    { teamId: 25, draftPosition: 14, wins: 27 }, // Blazers
                    { teamId: 11, draftPosition: 29, wins: 20 } // Rockets
                ],
            },
            {
                managerId: 7, // Charlie
                teams: [
                    { teamId: 14, draftPosition: 6, wins: 33 }, // Lakers
                    { teamId: 12, draftPosition: 16, wins: 25 }, // Pacers
                    { teamId: 27, draftPosition: 25, wins: 34 } // Spurs
                ],
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
            },
            {
                managerId: 1, // Dom
                teams: [
                    { teamId: 17, draftPosition: 1, wins: 46 }, // Bucks
                    { teamId: 15, draftPosition: 20, wins: 38 }, // Grizzlies
                    { teamId: 4, draftPosition: 26, wins: 33 } // Hornets
                ],
            },
            {
                managerId: 4, // John
                teams: [
                    { teamId: 29, draftPosition: 9, wins: 52 }, // Jazz
                    { teamId: 7, draftPosition: 11, wins: 42 }, // Mavericks
                    { teamId: 9, draftPosition: 27, wins: 20 } // Pistons
                ],
            },
            {
                managerId: 8, // KY
                teams: [
                    { teamId: 23, draftPosition: 8, wins: 49 }, // 76ers
                    { teamId: 19, draftPosition: 18, wins: 31 }, // Pelicans
                    { teamId: 27, draftPosition: 21, wins: 33 } // Spurs
                ],
            },
            {
                managerId: 11, // Devon
                teams: [
                    { teamId: 25, draftPosition: 10, wins: 42 }, // Blazers
                    { teamId: 10, draftPosition: 14, wins: 39 }, // Warriors
                    { teamId: 5, draftPosition: 24, wins: 31 } // Bulls
                ],
            },
            {
                managerId: 6, // Nathan
                teams: [
                    { teamId: 3, draftPosition: 7, wins: 48 }, // Nets
                    { teamId: 1, draftPosition: 17, wins: 41 }, // Hawks (teamId corrected)
                    { teamId: 22, draftPosition: 23, wins: 21 } // Magic
                ],
            },
            {
                managerId: 2, // Martin
                teams: [
                    { teamId: 2, draftPosition: 4, wins: 36 }, // Celtics
                    { teamId: 30, draftPosition: 19, wins: 34 }, // Wizards
                    { teamId: 26, draftPosition: 22, wins: 31 } // Kings
                ],
            },
            {
                managerId: 5, // Tim
                teams: [
                    { teamId: 14, draftPosition: 2, wins: 42 }, // Lakers
                    { teamId: 12, draftPosition: 15, wins: 34 }, // Pacers
                    { teamId: 21, draftPosition: 29, wins: 22 } // Thunder
                ],
            },
            {
                managerId: 10, // Maz
                teams: [
                    { teamId: 13, draftPosition: 3, wins: 47 }, // Clippers
                    { teamId: 28, draftPosition: 13, wins: 27 }, // Raptors
                    { teamId: 6, draftPosition: 30, wins: 22 } // Cavaliers
                ],
            },
            {
                managerId: 7, // Charlie
                teams: [
                    { teamId: 8, draftPosition: 5, wins: 47 }, // Nuggets
                    { teamId: 11, draftPosition: 16, wins: 17 }, // Rockets
                    { teamId: 18, draftPosition: 25, wins: 23 } // Wolves
                ],
            }
        ]
    },
];

export default seasons;