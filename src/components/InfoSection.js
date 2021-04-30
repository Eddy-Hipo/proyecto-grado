import React from "react";
import { Card, Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import styles from "@/styles/IndexStyle";
import Image from "next/image";
import Meta from "antd/lib/card/Meta";
import {
  CompassOutlined,
  CarOutlined,
  BulbOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const InfoSection = () => {
  return (
    <>
      <Row style={styles.img}>
        <Col span={24}>
          <div>
            <Image
              src="/fondo-banner.png"
              alt="fondo-banner"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <h2 style={styles.bgText}>
              "Actúa como si lo que estás
              <br />
              haciendo marcara la diferencia"
              <br />
              William James
            </h2>
          </div>
        </Col>
      </Row>
      <Divider orientation="center">
        <h1>Sabias que ...</h1>
      </Divider>
      <Row justify="center">
        <Col xs={20} sm={20} md={8} lg={8} span={6}>
          <Card align="center" style={{ border: "none" }}>
            <div style={styles.contIcon}>
              <div style={styles.icon}>
                <CompassOutlined style={{ fontSize: "60px", color: "white" }} />
              </div>
            </div>
            <Meta
              title="En Ecuador"
              description="El acoso sexual en las instituciones de educación superior (IES) es una forma de violencia de género, atentatoria a los derechos humanos, que afecta a colectivos de estudiantes, docentes y personal administrativo y de servicios."
            />
          </Card>
        </Col>
        <Col xs={20} sm={20} md={8} lg={8} span={6}>
          <Card align="center" style={{ border: "none" }}>
            <div style={styles.contIcon}>
              <div style={styles.icon}>
                <BulbOutlined style={{ fontSize: "60px", color: "white" }} />
              </div>
            </div>
            <Meta
              title="Por lo General"
              description="Las victimas de acoso sexual pierden su estabilidad emocional tras la lesión sufrida, misma que con frecuencia siembra miedo, vergüenza y culpa, dificultando así la etapa de identificación y comunicación del hecho. "
            />
          </Card>
        </Col>
        <Col xs={20} sm={20} md={8} lg={8} span={6}>
          <Card align="center" style={{ border: "none" }}>
            <div style={styles.contIcon}>
              <div style={styles.icon}>
                <CarOutlined style={{ fontSize: "60px", color: "white" }} />
              </div>
            </div>
            <Meta
              title="Minkana te ofrece"
              description="Un sistema de auxilio donde los miembros de las diferentes IES de la ciudad de Quito pueden reportar situaciones de acoso sexual para posteriormente recibir ayuda inmediata."
            />
          </Card>
        </Col>
      </Row>
      <div style={styles.download}>
        <Divider orientation="center">
          <h1 style={{ color: "white", marginTop: 30, marginBottom: 40 }}>
            Descarga nuestra APP
          </h1>
        </Divider>
        <Row align="center">
          <Col span={2} />
          <Col span={6} style={{ padding: 20 }}>
            <h3 style={styles.textDownload}>
              ¿Has sido víctima o testigo de una situación de acoso sexual
              dentro de tu institución de educación superior?
            </h3>
          </Col>
          <Col span={1} style={{ paddingTop: "2%" }}>
            <ArrowRightOutlined style={{ fontSize: "50px", color: "white" }} />
          </Col>
          <Col span={6} style={{ padding: 20 }}>
            <h3 style={styles.textDownload}>
              Ingresa a nuestra aplicación móvil y reporta el hecho.
            </h3>
          </Col>
          <Col span={1} style={{ paddingTop: "2%" }}>
            <ArrowRightOutlined style={{ fontSize: "50px", color: "white" }} />
          </Col>
          <Col span={6} style={{ paddingLeft: "4%" }}>
            <div style={styles.imageDownload}>
              <Image
                src="/icono-descarga.JPG"
                alt="icono-descarga"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Col>
          <Col span={2} />
        </Row>
      </div>
    </>
  );
};

export default InfoSection;
