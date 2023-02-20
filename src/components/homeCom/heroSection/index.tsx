import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HeroSectionWrapper, MainHeader, SubText } from "./element";

function HeroSection() {
  return (
    <HeroSectionWrapper id="home">
      <Container>
        <Row>
          <Col lg={6}>
            <MainHeader>IT Consulting Services For Your Business</MainHeader>
            <SubText>
              We are leading technology solutions providing company all <br />
              over the world doing over 40 years.
            </SubText>
          </Col>
        </Row>
      </Container>
    </HeroSectionWrapper>
  );
}

export default HeroSection;
