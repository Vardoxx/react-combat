import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import s from "./MyHeader.module.scss";

interface MenuItem {
  key: string;
  label?: string;
}

const MyHeader = () => {
  const navigate = useNavigate();
  const locate = useLocation();
  const curentPath = locate.pathname;

  const items: MenuItem[] = [
    { label: "Combat", key: "/" },
    { label: "Statistic", key: "/Statistic" },
  ];
  const routeSwitch = ({ key }: MenuItem) => {
    navigate(key);
  };

  return (
    <Header className={s.header}>
      <Menu
        className={s.menu}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[curentPath]}
        items={items}
        onClick={routeSwitch}
      />
      <div className={s.balance}></div>
    </Header>
  );
};

export default MyHeader;
