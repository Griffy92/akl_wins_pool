import { useState, useEffect } from 'react'
import axios from 'axios'
import thisSeason from '../models/ThisSeasonModel';
import { Table, Avatar, Typography} from 'antd';

const { Title } = Typography;

const ThisSeason = () => {

    const [ tableData, setTableData ] = useState([]);
    const [ error, setError ] = useState([]);


    useEffect( () => {
        axios.get('/.netlify/functions/scrape')
        .then( (response) => {
            console.log(response.data)
            thisSeason.managers.forEach( manager => {
                manager.teams.forEach( team => {
                    const foundTeam = response.data.find( stat => stat.team === team.cbsName)
                    if ( foundTeam ) {
                        team.wins = parseInt(foundTeam.wins)
                        team.loss = parseInt(foundTeam.losses)
                    }
                })
                manager.totalWins = manager.calcTotalWins()
            })
            setTableData(thisSeason.managers)
            console.log(thisSeason)
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
                        <Avatar src={record.teams[0].image} style={{ marginRight: 8 }} />
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
                },
                {
                    title: 'Win %',
                    dataIndex: ['teams', 0, 'win %'],
                    key: 'team1WinPercent'
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
                        <Avatar src={record.teams[1].image} style={{ marginRight: 8 }} />
                    ),
                    // width: 100,
                },
                {
                    title: 'Wins',
                    dataIndex: ['teams', 1, 'wins'],
                    key: 'team2Wins',
                //   width: 100,
                },
                {
                    title: 'Loss',
                    dataIndex: ['teams', 1, 'loss'],
                    key: 'team1Loss'
                },
                {
                    title: 'Win %',
                    dataIndex: ['teams', 1, 'win %'],
                    key: 'team1WinPercent'
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
                        <Avatar src={record.teams[2].image} style={{ marginRight: 8 }} />
                    ),
                    // width: 100,
                },
                {
                    title: 'Wins',
                    dataIndex: ['teams', 2, 'wins'],
                    key: 'team3Wins',
                    // width: 100,
                },                {
                    title: 'Loss',
                    dataIndex: ['teams', 2, 'loss'],
                    key: 'team1Loss'
                },
                {
                    title: 'Win %',
                    dataIndex: ['teams', 2, 'win %'],
                    key: 'team1WinPercent'
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
					align: 'center',
                    defaultSortOrder: 'descend',
                    sorter: (a, b) => a.totalWins - b.totalWins
			    }
			]
		}
	];
    
    return (
        <>
            <Title>{thisSeason.year} AKL Wins Pool</Title>
            <Table columns={columns} dataSource={tableData} />
        </>
    )
}

export default ThisSeason