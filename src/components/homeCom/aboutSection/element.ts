import styled from "styled-components";

export const AboutSectionWrapper = styled.div`
  overflow: hidden;
  background-color: rgb(246, 247, 249);

  .container {
    margin-top: 5rem;
  }
`;

export const LeftDiv = styled.div`
  .manImg {
    @media (max-width: 991.98px) {
      display: block;
      margin: 2rem auto;
    }
  }
`;

export const RightDiv = styled.div``;

export const AboutText = styled.h4`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #03228f;

  @media (max-width: 991.98px) {
    text-align: center;
  }

  &.topAboutText {
    @media (min-width: 992px) {
      display: none;
    }
  }
  &.bottomAboutText {
    @media (max-width: 991.98px) {
      display: none;
    }
  }

  span {
    text-transform: uppercase;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

export const MainText = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 46px;
  color: #101010;
  margin-top: 2rem;

  @media (max-width: 575.98px) {
    text-align: center;
  }
`;

export const SubText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
`;
