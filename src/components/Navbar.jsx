import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Navbar = () => {

    const items = [
        {
            label: <Link to ="/">Current Season</Link>,
            key: 'home',
        },
        {
            label: <Link to="/historical">Last Seasons</Link>,
            key: 'historical',
        }
    ]

    return (
        <>
            <Menu mode='horizontal' items={items} />
        </>
    )
}

export default Navbar