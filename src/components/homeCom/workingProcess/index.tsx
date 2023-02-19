import { Col, Container, Row } from "react-bootstrap";
import {
  ContactUsBtn,
  LeftDiv,
  RightDiv,
  WorkingLayoutDiv,
  WorkingProcessMainText,
  WorkingProcessText,
  WorkingProcessWrapper,
} from "./element";
import workingImg from "../../../assets/images/workingProcessImg.jpeg";
import Card from "react-bootstrap/Card";

function WorkingProcess() {
  const cardData = [
    {
      id: 1,
      header: "Discover",
      text: "Research and analysis are conducted to gain a deeper understanding of the topic or problem in this phase. This may involve conducting surveys, interviews, or gathering data from various sources.",
    },
    {
      id: 2,
      header: "Plan",
      text: `Planning is the next phase of a work process that involves using the insights and information gathered during the discovery phase to develop a clear and actionable plan after testing.`,
    },
    {
      id: 3,
      header: "Execute",
      text: `Execution is the phase of a work process where the plan is put into action. This involves implementing the tasks and strategies that were defined during the planning phase.`,
    },
    {
      id: 4,
      header: "Deliver",
      text: `Delivering is the final phase of a work process, where the completed project or product is delivered to the client or end-user. This phase involves testing of project to ensure that it meets the requirements.`,
    },
  ];
  return (
    <WorkingProcessWrapper>
      <Container>
        <div className="wrapper">
          <Row>
            <Col lg={4}>
              <LeftDiv>
                <img className="img-fluid working" src={workingImg} />
                <WorkingLayoutDiv>
                  <WorkingProcessText>Working Process</WorkingProcessText>
                  <WorkingProcessMainText>
                    Our Working
                    <br /> Process - How <br /> We Work For <br /> Our Customers
                  </WorkingProcessMainText>
                  <ContactUsBtn>Contact Us</ContactUsBtn>
                </WorkingLayoutDiv>
              </LeftDiv>
            </Col>
            <Col lg={8}>
              <RightDiv>
                <Row>
                  {cardData.map((item) => (
                    <Col key={item.id} lg={6}>
                      <Card>
                        <Card.Body>
                          <h4 className="cardNumber">{item.id}.</h4>
                          <Card.Title>{item.header}</Card.Title>
                          <Card.Text>{item.text}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </RightDiv>
            </Col>
          </Row>
        </div>
      </Container>
    </WorkingProcessWrapper>
  );
}

export default WorkingProcess;
