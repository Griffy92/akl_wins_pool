import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

const items = [
  { key: '/', label: <Link to="/">This season</Link> },
  { key: '/history', label: <Link to="/history">History</Link> },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const selected = pathname.startsWith('/history') ? '/history' : '/';

  return (
    <header className="site-header">
      <span className="brand">AKL Wins Pool</span>
      <Menu mode="horizontal" items={items} selectedKeys={[selected]} />
    </header>
  );
}
