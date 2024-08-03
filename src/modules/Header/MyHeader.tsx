import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuItem {
  key: string;
  label?: string;
}

const MyHeader = () => {
  const navigate = useNavigate();
  const locate = useLocation();

  const curentPath = locate.pathname;

  const items: MenuItem[] = ["Combat", "Statistic"].map((key) => ({
    key: `/${key}`,
    label: `${key}`,
  }));

  const routeSwitch = ({ key }: MenuItem) => {
    navigate(key);
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        zoom: "1.4",
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[curentPath]}
        items={items}
        onClick={routeSwitch}
        style={{
          flex: 1,
          minWidth: 0,
          zoom: "1.4",
          justifyContent: "center",
        }}
      />
    </Header>
  );
};

export default MyHeader;
