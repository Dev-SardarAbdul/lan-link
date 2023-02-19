import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {
  TopbarWrapper,
  TopContainerImageDiv,
  TopDiv,
  TopRightDiv,
} from "./element";
import newlogo from "../.././../assets/images/newlogo.png";
import profile from "../.././../assets/docs/profile.pdf";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";

function Topbar() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 170) {
      setVisible(true);
    } else if (scrolled <= 170) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <TopbarWrapper>
      <Container>
        <TopDiv>
          <TopContainerImageDiv>
            <img className="img-fluid topImg" src={newlogo} />
            <h4 className="imageText">
              LANLINK <span>TECH</span>
            </h4>
          </TopContainerImageDiv>
          <TopRightDiv>
            <div className="rightWraper">
              <div className="leftDiv">
                <HiOutlineLocationMarker className="divIcons" />
              </div>
              <div className="rightDiv">
                <h4 className="header">address</h4>
                <p className="text">05 kandi BR. New York</p>
              </div>
            </div>
            <div className="rightWraper">
              <div className="leftDiv">
                <AiOutlineMail className="divIcons" />
              </div>
              <div className="rightDiv">
                <h4 className="header">e-mail</h4>
                <p className="text">support@gmail.com</p>
              </div>
            </div>
            <div className="rightWraper noBorder">
              <div className="leftDiv">
                <FiPhoneCall className="divIcons" />
              </div>
              <div className="rightDiv">
                <h4 className="header">Phone</h4>
                <p className="text">0342000000</p>
              </div>
            </div>
          </TopRightDiv>
        </TopDiv>
      </Container>

      <Navbar
        bg="light"
        expand="lg"
        className={visible ? "lightNav" : "darkNav"}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img className="img-fluid outSideImg" src={newlogo} />
          </Navbar.Brand>

          {visible && (
            <Navbar.Brand href="#home">
              <img className="img-fluid brandImg" src={newlogo} />
            </Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={visible ? "darkText" : "lightText"}>
                Home
              </Nav.Link>
              <Nav.Link
                className={visible ? "darkText" : "lightText"}
                href="#about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className={visible ? "darkText" : "lightText"}
                href="#link"
              >
                Services
              </Nav.Link>
              <Nav.Link
                className={visible ? "darkText" : "lightText"}
                href="#link"
              >
                Work Process
              </Nav.Link>
            </Nav>
            <>
              <a href={profile} download="Profile" target="_blank">
                <button className={visible ? "lightBtn" : "darkBtn"}>
                  Our Profile
                </button>
              </a>
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </TopbarWrapper>
  );
}

export default Topbar;
