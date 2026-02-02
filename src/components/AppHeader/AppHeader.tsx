import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { NavLink } from "react-router";
import { PagesPath, PathToMenuKey } from "../../consts/pages-path";
import { useState } from "react";
import { useLocation } from "react-router";

export default function AppHeader() {
    const [current, setCurrent] = useState<string>(PathToMenuKey[useLocation().pathname]);

    const onClick = ({key}: {key: string}) => {
        setCurrent(key);
    };
    return (
        <Header className='flex'>
            <div className="logo" />
            <Menu theme='dark' mode='horizontal' selectedKeys={[current]} onClick={onClick} className='flex grow'>
              <Menu.Item key="home"><NavLink to={PagesPath.home}>Home</NavLink></Menu.Item>
              <Menu.Item key="timestamp"><NavLink to={PagesPath.timestamp}>Timestamp</NavLink></Menu.Item>
              <Menu.Item key="json"><NavLink to={PagesPath.json}>JSON Formatter</NavLink></Menu.Item>
            </Menu>

        </Header>
    )
};