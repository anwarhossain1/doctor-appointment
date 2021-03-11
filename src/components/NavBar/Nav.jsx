import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import Logo from '../../media/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setViewDate, setViewSlots } from '../../features/userSlice';

const Nav = () => {
  const { Header, Footer } = Layout;
  const dispatch = useDispatch();

  const showDoc= () =>{
    dispatch(setViewDate(true));
    dispatch(setViewSlots(false));
  }
  return (
    <div>
      <Layout>
        <Header style={{ position: "sticky", top: "0" }}>
          <div
            className="logo"
          />
          <Link to="/" onClick={showDoc}><img src={Logo}/></Link>
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item>Doctor-Appointment</Menu.Item>
          </Menu> */}
        </Header>
      </Layout>
    </div>
  );
};

export default Nav;
