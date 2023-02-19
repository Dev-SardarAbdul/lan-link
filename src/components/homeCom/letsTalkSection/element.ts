import styled from "styled-components";

export const MainDiv = styled.div`
  overflow: hidden;
  background: linear-gradient(90deg, #03228f 5%, rgb(0, 0, 96)) !important;

  .wrapper {
    margin-top: 6rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      padding-bottom: 4rem;
    }
  }
`;

export const LeftDiv = styled.div`
  @media (max-width: 991.98px) {
    display: none;
  }

  .man {
    height: 600px;
  }
`;

export const RightDiv = styled.div`
  margin-top: 5rem;

  @media (max-width: 991.98px) {
    margin-top: 0;
  }

  .callIcon {
    background-color: #fff;
    border-radius: 50px;
    height: 100px;
    width: 100px;
    color: #106eea;
    padding: 20px;
    display: block;
    margin: 0 auto;

    animation-name: stretch;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }

  @keyframes stretch {
    0% {
      transform: scale(0.8);
      background-color: #fff;
      border-radius: 100%;
    }

    50% {
      background-color: #fff;
    }

    100% {
      transform: scale(1);
      background-color: #fff;
    }
  }
`;

export const CallUsText = styled.p`
  text-align: center;
  font-size: 22px;
  line-height: 1.4;
  font-weight: 700;
  color: #fff;
  margin-top: 20px;

  &.phoneNum {
    font-size: 42px !important;
    margin-top: 10px !important;
  }
`;

export const InfoText = styled.p`
  font-size: 19px;
  font-weight: 500;
  color: #fff;
  margin: 0;
  text-align: center;
`;

export const LetsTalkBtn = styled.button`
  display: block;
  margin: 2rem auto 0 auto;
  padding: 14px 40px;
  background-image: linear-gradient(250deg, #4e95ed 19%, #03228f);
  border-radius: 30px 30px 30px 30px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  transition: all 0.4s;

  &:hover {
    background-image: linear-gradient(250deg, #03228f 19%, #4e95ed);
  }
`;
