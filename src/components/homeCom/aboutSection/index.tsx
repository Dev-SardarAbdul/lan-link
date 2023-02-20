import { Col, Container, Row } from "react-bootstrap";
import {
  AboutSectionWrapper,
  AboutText,
  LeftDiv,
  MainText,
  RightDiv,
  SubText,
} from "./element";
import about from "../../../assets/images/about.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

function AboutSection() {
  return (
    <AboutSectionWrapper id="about">
      <Container>
        <Row>
          <AnimationOnScroll animateIn="animate__bounce">
            <AboutText className="topAboutText">
              1. <span>About</span>
            </AboutText>
          </AnimationOnScroll>
          <Col lg={5}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <LeftDiv>
                <img className="img-fluid manImg" src={about} />
              </LeftDiv>
            </AnimationOnScroll>
          </Col>
          <Col lg={7}>
            <RightDiv>
              <AnimationOnScroll animateIn="animate__fadeInRight">
                <AboutText className="bottomAboutText">
                  1. <span>About</span>
                </AboutText>

                <MainText>
                  We Are Increasing Business Success With Technology
                </MainText>
                <SubText>
                  The aim of LAN LINK technology is to serve the best and high
                  quality services to our clients. We set high standards of
                  integrity for our peoples at all levels and consistently
                  strive to meet them. <br /> <br /> We have envisioned to be
                  become top and leading system integrator in the world and
                  create high skilled jobs to become vital part of Pakistan and
                  Global Economy. <br />
                  <br /> We have amplified our expertise in a various field of
                  technologies and today LANLINK team is enable for providing
                  services for electrical , mechanical, HVAC, and Data network
                  Solutions.
                </SubText>
              </AnimationOnScroll>
            </RightDiv>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
}

export default AboutSection;
