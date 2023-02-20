import styled from "styled-components";

export const ServicesWrapper = styled.div`
  overflow: hidden;
  background-color: rgb(246, 247, 249);

  .container {
    margin-top: 4rem;
  }
`;

export const ServicesText = styled.h4`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #03228f;
  text-align: center;

  span {
    text-transform: uppercase;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

export const MainHeader = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4;
  color: #0a0a0a;
  text-align: center;
  text-transform: capitalize;
  margin-top: 20px;

  @media (max-width: 767.98px) {
    br {
      display: none;
    }
  }
`;

export const CardContainer = styled.div`
  margin-top: 2rem;
  .card {
    margin: 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 10px 10px 10px 10px;
    border: none;
    min-height: 332px;
    width: 380px;
    margin-bottom: 2rem;

    @media (max-width: 575.98px) {
      width: 100%;
      margin-bottom: 1rem;
    }

    .cardIcon {
      font-size: 2rem;
      display: block;
      margin: 0 auto;
      color: #03228f;
    }

    .card-title {
      font-size: 22px;
      font-weight: 600;
      line-height: 30px;
    }

    .card-text {
      color: #444;
      margin: 0;

      a {
        text-decoration: none;
        margin-left: 5px;
      }
    }
  }
`;
