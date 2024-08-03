import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";
import MyHeader from "./modules/Header/MyHeader";
import Combat from "./pages/Combat";
import Statistic from "./pages/Statistic";
import { Route, Routes } from "react-router-dom";
import s from "./App.module.scss";

// import { useState } from "react";

const App = () => {
  return (
    <Layout>
      <MyHeader />
      <Content className={s.content}>
        <Routes>
          <Route path="/" element={<Combat />} />
          <Route path="Statistic" element={<Statistic />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
