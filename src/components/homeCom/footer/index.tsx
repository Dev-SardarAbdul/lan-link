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
          <p>
            {" "}
            <span>•</span>Home
          </p>
          <p>
            {" "}
            <span>•</span>About
          </p>

          <p>
            {" "}
            <span>•</span>Services
          </p>
          <p>
            <span>•</span>Work Process
          </p>
          <p>
            <span>•</span>Contact
          </p>
        </RightWrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
