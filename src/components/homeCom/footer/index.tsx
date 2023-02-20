import { Container } from "react-bootstrap";
import { FooterWrapper, LeftWrapper, RightWrapper } from "./element";

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <LeftWrapper>
          © {new Date().getFullYear()} All Rights Reserved By LanLink
          Technologies.
        </LeftWrapper>
        <RightWrapper>
          <a href="#">
            <p>
              <span>•</span>Home
            </p>
          </a>
          <a href="#about">
            <p>
              <span>•</span>About
            </p>
          </a>
          <a href="#services">
            <p>
              <span>•</span>Services
            </p>
          </a>
          <a href="#work-process">
            <p>
              <span>•</span>Work Process
            </p>
          </a>
          <a href="#contact">
            <p>
              <span>•</span>Contact
            </p>
          </a>
        </RightWrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
