import styled from "styled-components";

export const ContactWrapper = styled.div`
  overflow: hidden;

  .container {
    margin-top: 4rem;
  }
`;

export const LeftDiv = styled.div`
  background: linear-gradient(250deg, #4e95ed, #03228f);
  border-radius: 5px;
  padding: 2rem 2rem 4rem 2rem;

  @media (max-width: 1199.98px) {
    margin-top: 2rem;
  }
`;

export const LetsTalkText = styled.h2`
  line-height: 28px;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  margin-top: 1rem;
`;

export const MainText = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 46px;
  color: #fff;

  @media (max-width: 575.98px) {
    font-size: 32px;
  }
`;

export const ContactMethodDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const ContactMethodLeftDiv = styled.div`
  background-color: #fff;
  height: 65px;
  width: 65px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .contactIcon {
    color: #03228f;
    font-size: 24px;
  }
`;

export const ContactMethodRightDiv = styled.div`
  .mainText {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin: 0;
  }

  .subText {
    margin: 0;
    color: #fff;
    font-weight: 500;
  }
`;

export const RightDiv = styled.div``;

export const GetInTouchText = styled.h2`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #03228f;

  @media (max-width: 991.98px) {
    text-align: center;
  }

  span {
    text-transform: uppercase;
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  &.smallScreen {
    text-align: center;
    @media (min-width: 1200px) {
      display: none;
    }
  }
  &.largeScreen {
    @media (max-width: 1199.98px) {
      display: none;
    }
  }
`;

export const FillFormText = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.4;
  color: #0a0a0a;
  margin-top: 2rem;
`;

export const FormContainer = styled.div`
  margin-top: 2rem;

  .form-control {
    padding: 20px;
    border-radius: 5px 5px 5px 5px;
    border-style: solid;
    border-width: 0;
    background-color: #fff;
    width: 100%;
    outline: none;
    box-shadow: none;

    &:focus {
      box-shadow: none;
    }
  }

  .textarea {
    margin-top: 1rem;
    min-height: 140px;
  }
`;

export const SubmitNowBtn = styled.button`
  background: linear-gradient(90deg, #03228f, #4e95ed);
  padding: 16px 40px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  color: #fff;
  border-radius: 30px 30px 30px 30px;
  margin-top: 2rem;

  @media (max-width: 1199.98px) {
    display: block;
    margin: 2rem auto 0 auto;
  }
`;
