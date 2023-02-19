import styled from "styled-components";
import herobg from "../../../assets/images/herobg.png";

export const HeroSectionWrapper = styled.div`
  background-image: url(${herobg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 575.98px) {
    min-height: 70vh;
  }
`;

export const MainHeader = styled.h2`
  font-size: 52px;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  margin-top: 7rem;

  @media (max-width: 575.98px) {
    margin-top: 3rem;
    text-align: center;
  }
`;

export const SubText = styled.p`
  font-size: 20px;
  line-height: 30px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 0;

  @media (max-width: 767.98px) {
    br {
      display: none;
    }
  }
  @media (max-width: 575.98px) {
    text-align: center;
    margin-top: 1rem;
  }
`;
