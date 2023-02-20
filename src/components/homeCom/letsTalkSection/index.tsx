import { Container, Row, Col } from "react-bootstrap";
import {
  CallUsText,
  InfoText,
  LeftDiv,
  LetsTalkBtn,
  MainDiv,
  RightDiv,
} from "./element";
import man from "../../../assets/images/man.png";
import { MdCall } from "react-icons/md";
import { AnimationOnScroll } from "react-animation-on-scroll";

function LetsTalk() {
  return (
    <MainDiv>
      <Container>
        <div className="wrapper">
          <Row>
            <Col lg={6}>
              <AnimationOnScroll animateIn="animate__fadeInLeft">
                <LeftDiv>
                  <img className="img-fluid man" src={man} />
                </LeftDiv>
              </AnimationOnScroll>
            </Col>
            <Col lg={6}>
              <AnimationOnScroll animateIn="animate__fadeInRight">
                <RightDiv>
                  <MdCall className="callIcon" />
                  <CallUsText>CALL US 24/7</CallUsText>
                  <CallUsText className="phoneNum">(+123) 456-9989</CallUsText>
                  <InfoText>
                    Have any idea or project in your mind? Call us or schedule
                    an appointment. Our representative will reply you shortly.
                  </InfoText>
                  <LetsTalkBtn>Lets Talk</LetsTalkBtn>
                </RightDiv>
              </AnimationOnScroll>
            </Col>
          </Row>
        </div>
      </Container>
    </MainDiv>
  );
}

export default LetsTalk;
