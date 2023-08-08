import { useState, useEffect } from 'react';
import { Avatar, Button, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';

import icon from '../images/cryptocurrency.png';
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  MenuOutlined,
} from '@ant-design/icons';

const items = [
  {
    label: <Link to='/'>Home</Link>,
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: <Link to='cryptocurrencies'>Cryptocurrencies</Link>,
    key: 'crytocurrencies',
    icon: <FundOutlined />,
  },
  {
    label: <Link to='exchanges'>Exchanges</Link>,
    key: 'exchanges',
    icon: <MoneyCollectOutlined />,
  },
  {
    label: <Link to='news'>News</Link>,
    key: 'news',
    icon: <BulbOutlined />,
  },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />

        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>

        <Button
          className='menu-control-container'
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && <Menu theme='dark' items={items} />}
    </div>
  );
};

export default Navbar;
