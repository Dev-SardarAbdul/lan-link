import { Col, Container, Row } from "react-bootstrap";
import {
  ContactMethodDiv,
  ContactMethodLeftDiv,
  ContactMethodRightDiv,
  ContactWrapper,
  FillFormText,
  FormContainer,
  GetInTouchText,
  LeftDiv,
  LetsTalkText,
  MainText,
  RightDiv,
  SubmitNowBtn,
} from "./element";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import Form from "react-bootstrap/Form";

function Contact() {
  const contactInfo = [
    {
      id: 1,
      icon: <BsTelephoneFill className="contactIcon" />,
      header: "Phone:",
      text: "(123) 222-8888",
    },
    {
      id: 2,
      icon: <AiFillMail className="contactIcon" />,
      header: "Email:",
      text: "support@rstheme.com",
    },
    {
      id: 3,
      icon: <MdLocationPin className="contactIcon" />,
      header: "Address:",
      text: "New Jesrsy, 1201, USA",
    },
  ];
  return (
    <ContactWrapper>
      <Container>
        <Row>
          <Col xl={4}>
            <GetInTouchText className="smallScreen">
              4. <span>GET IN TOUCH</span>
            </GetInTouchText>
            <LeftDiv>
              <LetsTalkText>Lets Talk</LetsTalkText>
              <MainText>Speak With Us</MainText>

              {contactInfo.map((item) => (
                <ContactMethodDiv>
                  <ContactMethodLeftDiv>{item.icon}</ContactMethodLeftDiv>
                  <ContactMethodRightDiv>
                    <h4 className="mainText">{item.header}</h4>
                    <p className="subText">{item.text}</p>
                  </ContactMethodRightDiv>
                </ContactMethodDiv>
              ))}
            </LeftDiv>
          </Col>
          <Col xl={8}>
            <RightDiv>
              <GetInTouchText className="largeScreen">
                4. <span>GET IN TOUCH</span>
              </GetInTouchText>
              <FillFormText>Fill The Form Below</FillFormText>
              <FormContainer>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name" />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Control
                    as="textarea"
                    placeholder="Message "
                    className="textarea"
                  />
                  <SubmitNowBtn>Submit</SubmitNowBtn>
                </Form>
              </FormContainer>
            </RightDiv>
          </Col>
        </Row>
      </Container>
    </ContactWrapper>
  );
}

export default Contact;
