import styled from "styled-components";

export const WorkingProcessWrapper = styled.div`
  overflow: hidden;

  .wrapper {
    margin-top: 4rem;
  }
`;

export const LeftDiv = styled.div`
  position: relative;

  @media (max-width: 991.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .working {
    border-radius: 10px;
    height: 500px;

    @media (max-width: 1199.98px) {
      height: 570px;
    }

    @media (max-width: 991.98px) {
      height: auto;
    }
  }
`;

export const WorkingLayoutDiv = styled.div`
  position: absolute;
  z-index: 10;
  top: 10px;
  color: #fff;
  left: 40px;

  @media (max-width: 991.98px) {
    left: 200px;
  }

  @media (max-width: 767.98px) {
    left: 100px;
  }

  @media (max-width: 575.98px) {
    left: 15%;
  }
`;

export const WorkingProcessText = styled.h4`
  line-height: 28px;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin-top: 4rem;

  @media (max-width: 575.98px) {
    margin-top: 1rem;
  }
`;
export const WorkingProcessMainText = styled.h4`
  font-size: 36px;
  font-weight: 700;
  line-height: 52px;
  color: #fff;
  margin-top: 20px;
`;

export const ContactUsBtn = styled.button`
  border: none;
  background-image: linear-gradient(250deg, #4e95ed 19%, #03228f);
  padding: 14px 40px;
  border-radius: 8px 8px 8px 8px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  margin-top: 2rem;
`;

export const RightDiv = styled.div`
  .card {
    border: none;
    background-color: transparent;

    .cardNumber {
      font-size: 50px;
      font-weight: 700;
      line-height: 1.4;
      color: #03228f;
      margin: 0;

      @media (max-width: 991.98px) {
        text-align: center;
      }
    }
  }

  .card-title {
    font-size: 24px;
    line-height: 34px;
    font-weight: 600;
    color: #101010;

    @media (max-width: 991.98px) {
      text-align: center;
    }
  }

  .card-text {
    color: #444;
  }
`;
