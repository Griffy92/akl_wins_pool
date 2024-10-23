const thisSeason = {
    year: "2024-2025",
    managers: [
        {
            managerName: "Dom",
            teams: [
                { teamName: "Boston Celtics", draftPosition: 1, wins: 0, loss: 0, image: "celtics.svg", cbsName: 'Boston' },
                { teamName: "Los Angeles Lakers", draftPosition: 16, wins: 0, loss: 0, image: "lakers.svg", cbsName: 'L.A. Lakers' },
                { teamName: "Brooklyn Nets", draftPosition: 30, wins: 0, loss: 0, image: "nets.svg", cbsName: 'Brooklyn' }
            ],
            calcTotalWins: function () {
                return this.teams.reduce((total, team) => total + team.wins, 0);
            },
            totalWins: 0,                
        },
        {
            managerName: "Martin",
            teams: [
                { teamName: "Oklahoma City Thunder", draftPosition: 2, wins: 0, loss: 0, image: "thunder.svg", cbsName: 'Oklahoma City' },
                { teamName: "Sacramento Kings", draftPosition: 14, wins: 0, loss: 0, image: "kings.svg", cbsName: 'Sacramento' },
                { teamName: "Washington Wizards", draftPosition: 29, wins: 0, loss: 0, image: "wizards.svg", cbsName: 'Washington' }
            ],
            calcTotalWins: function () {
                return this.teams.reduce((total, team) => total + team.wins, 0);
            },
            totalWins: 0
        },
        {
            managerName: "Nathan",
            teams: [
                { teamName: "Minnesota Timberwolves", draftPosition: 3, wins: 0, loss: 0, image: "wolves.svg", cbsName: 'Minnesota' },
                { teamName: "New Orleans Pelicans", draftPosition: 13, wins: 0, loss: 0, image: "pelicans.svg", cbsName: 'New Orleans' },
                { teamName: "Portland Trail Blazers", draftPosition: 28, wins: 0, loss: 0, image: "blazers.svg", cbsName: 'Portland' }
            ],
            calcTotalWins: function () {
                return this.teams.reduce((total, team) => total + team.wins, 0);
            },
            totalWins: 0
        },
        {
            managerName: "Dobbie",
            teams: [
                { teamName: "Denver Nuggets", draftPosition: 4, wins: 0, loss: 0, image: "nuggets.svg", cbsName: 'Denver' },
                { teamName: "Phoenix Suns", draftPosition: 12, wins: 0, loss: 0, image: "suns.svg", cbsName: 'Phoenix' },
                { teamName: "Utah Jazz", draftPosition: 27, wins: 0, loss: 0, image: "jazz.svg", cbsName: 'Utah' }
            ],
            calcTotalWins: function () {
                return this.teams.reduce((total, team) => total + team.wins, 0);
            },
            totalWins: 0
        },
        {
            managerName: "Si",
            teams: [
                { teamName: "New York Knicks", draftPosition: 5, wins: 0, loss: 0, image: "knicks.svg", cbsName: 'New York' },
                { teamName: "Golden State Warriors", draftPosition: 15, wins: 0, loss: 0, image: "warriors.svg", cbsName: 'Golden St.' },
                { teamName: "Detroit Pistons", draftPosition: 26, wins: 0, loss: 0, image: "pistons.svg", cbsName: 'Detroit' }
            ],
            calcTotalWins: function () {
                return this.teams.reduce((total, team) => total + team.wins, 0);
            },
            totalWins: 0
        },
        {
            managerName: "Steve",
            teams: [
                { teamName: "Dallas Mavericks", draftPosition: 6, wins: 0, loss: 0, image: "mavericks.svg", cbsName: 'Dallas' },
                { teamName: "San Antonio Spurs", draftPosition: 20, wins: 0, loss: 0, image: "spurs.svg", cbsName: 'San Antonio' },
                { teamName: "Los Angeles Clippers", draftPosition: 22, wins: 0, loss: 0, image: "clippers.svg", cbsName: 'L.A. Clippers' }
            ],
            calcTotalWins: function () {
                return this.teams.reduce((total, team) => total + team.wins, 0);
            },
            totalWins: 0
        },
        {
            managerName: "Tim",
            teams: [
                { teamName: "Milwaukee Bucks", draftPosition: 7, wins: 0, loss: 0, image: "bucks.svg", cbsName: 'Milwaukee' },
                { teamName: "Memphis Grizzlies", draftPosition: 18, wins: 0, loss: 0, image: "grizzlies.svg", cbsName: 'Memphis' },
                { teamName: "Chicago Bulls", draftPosition: 24, wins: 0, loss: 0, image: "bulls.svg", cbsName: 'Chicago' }
            ],
            calcTotalWins: function () {
                return this.teams.reduce((total, team) => total + team.wins, 0);
            },
            totalWins: 0
        },
        {
            managerName: "KY",
            teams: [
                { teamName: "Philadelphia 76ers", draftPosition: 8, wins: 0, loss: 0, image: "76ers.svg", cbsName: 'Philadelphia' },
                { teamName: "Houston Rockets", draftPosition: 19, wins: 0, loss: 0, image: "rockets.svg", cbsName: 'Houston' },
                { teamName: "Atlanta Hawks", draftPosition: 21, wins: 0, loss: 0, image: "hawks.svg", cbsName: 'Atlanta' }
            ],
            calcTotalWins: function () {
                return this.teams.reduce((total, team) => total + team.wins, 0);
            },
            totalWins: 0
        },
        {
            managerName: "Maz",
            teams: [
                { teamName: "Indiana Pacers", draftPosition: 9, wins: 0, loss: 0, image: "pacers.svg", cbsName: 'Indiana' },
                { teamName: "Orlando Magic", draftPosition: 11, wins: 0, loss: 0, image: "magic.svg", cbsName: 'Orlando' },
                { teamName: "Charlotte Hornets", draftPosition: 25, wins: 0, loss: 0, image: "hornets.svg", cbsName: 'Charlotte' }
            ],
            calcTotalWins: function () {
                return this.teams.reduce((total, team) => total + team.wins, 0);
            },
            totalWins: 0
        },
        {
            managerName: "John",
            teams: [
                { teamName: "Cleveland Cavaliers", draftPosition: 10, wins: 0, loss: 0, image: "cavaliers.svg", cbsName: 'Cleveland' },
                { teamName: "Miami Heat", draftPosition: 17, wins: 0, loss: 0, image: "heat.svg", cbsName: 'Miami' },
                { teamName: "Toronto Raptors", draftPosition: 23, wins: 0, loss: 0, image: "raptors.svg", cbsName: 'Toronto' }
            ],
            calcTotalWins: function () {
                return this.teams.reduce((total, team) => total + team.wins, 0);
            },
            totalWins: 0,
        }
    ]
}

export default thisSeason
