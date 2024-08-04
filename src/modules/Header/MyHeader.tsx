import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { increment } from "../../store/sliced/incrementToClick";
import s from "./MyHeader.module.scss";

interface MenuItem {
  key: string;
  label: string;
}

interface RouteSwitch {
  key: string;
}

const MyHeader = () => {
  const navigate = useNavigate();
  const locate = useLocation();

  const curentPath = locate.pathname;
  const balanseValue = useSelector(
    (state: RootState) => state.clickToEarn.value
  );
  const dispatch = useDispatch();

  const items: MenuItem[] = [
    { label: "Combat", key: "/" },
    { label: "Statistic", key: "/Statistic" },
  ];
  const routeSwitch = ({ key }: RouteSwitch) => {
    navigate(key);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch(increment());
    }, 1000);

    return () => clearInterval(timerId);
  }, [dispatch]);

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
      <input className={s.balance} value={balanseValue} />
    </Header>
  );
};

export default MyHeader;
