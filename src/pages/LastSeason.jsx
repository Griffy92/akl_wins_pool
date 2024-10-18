// This page will display data from previous seasons of the AKL Wins Pool
import teams from '../models/teams';
import seasons from '../models/seasons';
import managers from '../models/managers';
import { Table, Avatar, Typography} from 'antd';

const { Title } = Typography;

const LastSeason = () => {

	// loop through seasons
    const formatDataForTable = () => {
        return seasons.map( season => {
            return season.managers.map( manager => {

				const fullManagerInfo = managers[manager.managerId]
                return {
                    year: season.year,
					managerName: fullManagerInfo ? fullManagerInfo.name : 'Unknown',
                    // managerId: manager.managerId,
                    totalWins: manager.totalWins,
                    teams: manager.teams.map(team => ({
                        ...team,
                        teamName: teams[team.teamId].name,
                        teamImage: teams[team.teamId].image,
                    })
                )}
            })
        })
    };

	const seasonsData = formatDataForTable()
    // const data = seasonsData[0]
      
      const columns = [
        {
          children: [
            {
                title: 'Manager',
                dataIndex: 'managerName',
                key: 'manager',
                fixed: 'left', // Keep the manager column fixed if desired
                // width: 100,
            }
          ]
        },
        {
          title: 'Team 1',
          children: [
            {
              title: '#',
              dataIndex: ['teams', 0, 'draftPosition'],
              key: 'team1DraftPosition',
              // width: 100,
            },
            {
              title: 'Team',
              key: 'team1Logo',
              render: (text, record) => (
                <div>
                    <Avatar src={record.teams[0].teamImage} style={{ marginRight: 8 }} />
                    <span>{record.teams[0].team}</span>
                </div>
              ),
            //   width: 100,
            },
            {
              title: 'Wins',
              dataIndex: ['teams', 0, 'wins'],
              key: 'team1Wins',
              // width: 100,
            }
          ]
        },
        {
          title: 'Team 2',
          children: [
            {
              title: '#',
              dataIndex: ['teams', 1, 'draftPosition'],
              key: 'team2DraftPosition',
              // width: 100,
            },
            {
              title: 'Team',
              key: 'team2Logo',
              render: (text, record) => (
                <Avatar src={record.teams[1].teamImage} style={{ marginRight: 8 }} />
              ),
              // width: 100,
            },
            {
              title: 'Wins',
              dataIndex: ['teams', 1, 'wins'],
              key: 'team2Wins',
            //   width: 100,
            }
          ]
        },
        {
          title: 'Team 3',
          children: [
            {
				title: '#',
				dataIndex: ['teams', 2, 'draftPosition'],
				key: 'team3DraftPosition',
				// width: 100,
            },
            {
				title: 'Team',
				key: 'team3Logo',
				render: (text, record) => (
				<Avatar src={record.teams[2].teamImage} style={{ marginRight: 8 }} />
				),
				// width: 100,
            },
            {
				title: 'Wins',
				dataIndex: ['teams', 2, 'wins'],
				key: 'team3Wins',
				// width: 100,
            }
          ]
        },
        {
			children: [
				{
					title: 'Total Wins',
					dataIndex: 'totalWins',
					key: 'totalWins',
					width: 100,
					align: 'center'
			}
		  ]
        }
      ];

    return (
		<>
			{ seasonsData.map( seasonData => {
				// console.log(seasonData)
				return (
					<>
						<Title>{seasonData[0].year} AKL Wins Pool</Title>
						<Table columns={columns} dataSource={seasonData} />
					</>
				)
			})}
		</>
    );
};

export default LastSeason;