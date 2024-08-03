import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";
import MyHeader from "./modules/Header/MyHeader";
import "./App.scss";
import Combat from "./pages/Combat";
import Statistic from "./pages/Statistic";
import { Route, Routes } from "react-router-dom";
// import { useState } from "react";

const App = () => {
  // const [tapValue, setTapValue] = useState(false);

  return (
    <Layout>
      <MyHeader />
      <Content
        style={{
          backgroundColor: "#242424",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Routes>
          <Route path="Combat" element={<Combat />} />
          <Route path="Statistic" element={<Statistic />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
