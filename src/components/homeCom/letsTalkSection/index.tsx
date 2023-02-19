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

function LetsTalk() {
  return (
    <MainDiv>
      <Container>
        <div className="wrapper">
          <Row>
            <Col lg={6}>
              <LeftDiv>
                <img className="img-fluid man" src={man} />
              </LeftDiv>
            </Col>
            <Col lg={6}>
              <RightDiv>
                <MdCall className="callIcon" />
                <CallUsText>CALL US 24/7</CallUsText>
                <CallUsText className="phoneNum">(+123) 456-9989</CallUsText>
                <InfoText>
                  Have any idea or project in your mind? Call us or schedule an
                  appointment. Our representative will reply you shortly.
                </InfoText>
                <LetsTalkBtn>Lets Talk</LetsTalkBtn>
              </RightDiv>
            </Col>
          </Row>
        </div>
      </Container>
    </MainDiv>
  );
}

export default LetsTalk;
