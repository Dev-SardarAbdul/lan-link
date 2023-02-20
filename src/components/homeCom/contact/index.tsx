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
import { AnimationOnScroll } from "react-animation-on-scroll";

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
    <ContactWrapper id="contact">
      <Container>
        <Row>
          <Col xl={4}>
            <GetInTouchText className="smallScreen">
              4. <span>GET IN TOUCH</span>
            </GetInTouchText>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <LeftDiv>
                <LetsTalkText>Lets Talk</LetsTalkText>
                <MainText>Connect With Us</MainText>

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
            </AnimationOnScroll>
          </Col>
          <Col xl={8}>
            <RightDiv>
              {" "}
              <AnimationOnScroll animateIn="animate__bounce">
                <GetInTouchText className="largeScreen">
                  4. <span>GET IN TOUCH</span>
                </GetInTouchText>
                <FillFormText>Fill The Form Below</FillFormText>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeInRight">
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
              </AnimationOnScroll>
            </RightDiv>
          </Col>
        </Row>
      </Container>
    </ContactWrapper>
  );
}

export default Contact;
