import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import styles from "@/styles/IndexStyle";

const { Footer } = Layout;

const Foot = () => {
  return (
    <>
      <Footer style={{ textAlign: "center", backgroundColor: "#3D405B" }}>
        <h3 style={{ color: "white" }}>Copyright ©2021 MinkanaEc </h3>
      </Footer>
    </>
  );
};

export default Foot;
