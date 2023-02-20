import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HeroSectionWrapper, MainHeader, SubText } from "./element";
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <HeroSectionWrapper id="home">
      <Container>
        <Row>
          <Col lg={6}>
            <MainHeader>
              <Typewriter
                options={{ autoStart: true, loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `<span>IT Consulting Services For Your Business</span>`
                    )
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
            </MainHeader>
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
