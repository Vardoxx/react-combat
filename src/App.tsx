import reactLogo from "./assets/react.svg";
import "./App.scss";
import { useState } from "react";
import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";

const App = () => {
  const [tapValue, setTapValue] = useState(false);

  return (
    <>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            // items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
      </Layout>
      <div className="logo_container">
        {tapValue && <p className="value_output">+10</p>}
        <img
          onClick={() => {
            setTapValue(true);
            setTimeout(() => {
              setTapValue(false);
            }, 100);
          }}
          src={reactLogo}
          className="logo"
          alt="React logo"
        />
      </div>
    </>
  );
};

export default App;
