import { Col, Container, Row } from "react-bootstrap";
import {
  CardContainer,
  MainHeader,
  ServicesText,
  ServicesWrapper,
} from "./element";
import Card from "react-bootstrap/Card";
import { MdOutlineHvac, MdAnalytics } from "react-icons/md";
import {
  FaTemperatureHigh,
  FaPowerOff,
  FaFireExtinguisher,
} from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import profile from "../.././../assets/docs/profile.pdf";

function Services() {
  const cardData = [
    {
      id: 1,
      icon: <MdOutlineHvac className="cardIcon" />,
      header: "HVAC Soultions & Services",
      desc: "LANLINK is a best provider of HVAC solutions. Our core business is the designing of HVAC systems, supply, installation commissioning, troubleshooting, training & technical Support, parts & consumables, undertake post sales service, maintenance of high integrity",
    },
    {
      id: 2,
      icon: <FaTemperatureHigh className="cardIcon" />,
      header: "Aisle Containment",
      desc: `LANLINK technology provides local and imported hot and cold
      containment system to increases the cooling capacity and energy
      efficiency of the cooling unit and increased capacity, together with the
      separation of hot and cold air, makes it possible to cool higher heat
      loads per rack and also removes the mixing of hot and `,
    },
    {
      id: 3,
      icon: <MdAnalytics className="cardIcon" />,
      header: "Power Analysis ",
      desc: `LANLINK is the best provider of Thermography that can help
      uncover mechanical faults such as hot spots in addition to
      identifying irregularities in electrical devices. A thorough
      investigation can reveal regions where high heat could jeopardize
      data center network resilience. Power analyzers can be used to`,
    },
    {
      id: 4,
      icon: <FaPowerOff className="cardIcon" />,
      header: ` Power & UPS Solutions`,
      desc: `LANLINK offers the commercial and industrial facility. LANLINK
      supplies installs and commission high performance, right-sized,
      modular, hot-scalable, single phase and 3-phase power
      protection with ultra-high availability and efficiency for any size
      data center or high density power zone.
      LANLINK supplies UPS systems, parts of UPS system, scalable and hot swappable UPS systems`,
    },
    {
      id: 5,
      icon: <GiCctvCamera className="cardIcon" />,
      header: "CCTV and Access control",
      desc: `We are committed to provide our customers best possible
      security services as there is nothing more important than the
      safety of Life & Property. LANLINK offers a comprehensive range
      of both IP and Analog CCTV Systems. The effectiveness of these
      CCTV security cameras has resulted in their deployment into
      major international airports, schools, `,
    },
    {
      id: 6,
      icon: <FaFireExtinguisher className="cardIcon" />,
      header: "Fire Protection System",
      desc: `LANLINK provide properly designed and selected fire detection
      and notification system that is essential component of overall
      data center protection strategy. Data centers need fast-acting
      fire suppression solutions to protect critical assets. Fire or
      physical security breach can compromise billions of files in data
      centers. These centers cannot afford to be digitally or physically
      compromise. The `,
    },
  ];
  return (
    <ServicesWrapper id="services">
      <Container>
        <ServicesText>
          2. <span>Services</span>
        </ServicesText>
        <MainHeader>
          We Are Offering following data center
          <br /> Solutions & Services
        </MainHeader>
        <CardContainer>
          <Row>
            {cardData.map((item) => (
              <Col key={item.id} className="d-flex justify-content-center">
                <Card>
                  {item.icon}
                  <Card.Body>
                    <Card.Title>{item.header}</Card.Title>
                    <Card.Text>
                      {item.desc}
                      <a href={profile} download="Profile" target="_blank">
                        read more...
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </CardContainer>
      </Container>
    </ServicesWrapper>
  );
}

export default Services;
