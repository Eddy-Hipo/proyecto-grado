import React from "react";
import { PageHeader, Button, Row, Col } from "antd";
import Routes from "@/constants/routes";
import "antd/dist/antd.css";
import styles from "@/styles/IndexStyle";
import Image from "next/image";

const MainHeader = () => {
  return (
    <>
      <Row>
        <Col span={1} />
        <Col span={4}>
          <Image
            src="/logo-minkana.png"
            alt="logo-minkana"
            width="auto"
            height="80%"
          />
        </Col>
        <Col span={16}>
          <PageHeader
            extra={[
              <a href={Routes.HOME}>
                <Button type="link" style={styles.button2}>
                  Inicio
                </Button>
              </a>,
              <a href={Routes.PRIVACY}>
                <Button type="link" style={styles.button2}>
                  Quiénes Somos
                </Button>
              </a>,
              <a href={Routes.ABOUT}>
                <Button type="link" style={styles.button2}>
                  Contáctanos
                </Button>
              </a>,
              <a>
                <Button type="link" style={styles.button2}>
                  Descarga
                </Button>
              </a>,

              <Button key="2" style={styles.button}>
                <a href={Routes.LOGIN}> Administración </a>
              </Button>,
            ]}
          />
        </Col>
      </Row>
    </>
  );
};

export default MainHeader;
