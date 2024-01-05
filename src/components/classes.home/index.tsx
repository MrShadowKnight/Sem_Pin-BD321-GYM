import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "./classes.module.scss";
// import components
import Card from "@/components/card.home/index";

const Casses = () => {
  return (
    <>
      <section className={s.classes}>
        <Container>
          <Row>
            <Col>
              <div className={s.classes__box}>
                <h3 className={s.classes__subtitle}>OUR CLASSES</h3>
                <h1 className={s.classes__title}>
                  Sed fringilla, quam
                  <br />
                  consectetur
                  <br />
                  ultrices
                </h1>
                <div className={s.classes__grid}>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Casses;
