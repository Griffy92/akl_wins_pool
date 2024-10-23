import { useState, useEffect } from 'react'
import axios from 'axios'
import teams from '../models/teams';
import managers from '../models/managers';

const ThisSeason = () => {

    const [ tableData, setTableData ] = useState([]);
    const [ error, setError ] = useState([]);

    const calcWinPercentage = ( wins ) => parseInt(wins) / (parseInt(wins) + parseInt(Loss))

    useEffect( () => {
        axios.get('/.netlify/functions/scrape')
        .then( (response) => {
            console.log(response.data)
            setTableData(response.data)
        }).catch( (error) => {
            setError('Error fetching data from Netlify function')
            console.error(error)
        })
    }, []);

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
                },
                {
                    title: 'Loss',
                    dataIndex: ['teams', 0, 'loss'],
                    key: 'team1Loss'
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
        </>
    )
}

export default ThisSeason