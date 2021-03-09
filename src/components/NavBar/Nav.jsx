import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import Logo from '../../media/logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { Header, Footer } = Layout;
  return (
    <div>
      <Layout>
        <Header>
          <div
            className="logo"
          />
          <Link to="/"><img src={Logo}/></Link>
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item>Doctor-Appointment</Menu.Item>
          </Menu> */}
        </Header>
      </Layout>
    </div>
  );
};

export default Nav;
