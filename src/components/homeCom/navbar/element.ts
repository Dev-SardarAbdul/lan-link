import styled from "styled-components";

export const TopbarWrapper = styled.div`
  background-color: #fff;

  .darkNav {
    background: linear-gradient(90deg, #03228f 10%, #0e73e4) !important;
    padding: 15px 0px !important;

    @media (max-width: 991.98px) {
      background: #fff !important;
    }
  }
  .lightNav {
    background: #fff !important;
    position: fixed;
    top: 0px;
    width: 100%;
    padding: 10px 0px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 5px;
    z-index: 999;

    @media (max-width: 991.98px) {
      display: none;
    }
  }

  .lightBtn {
    background: linear-gradient(90deg, #03228f 10%, #0e73e4);
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border: none !important;
    padding: 5px 20px;
    border-radius: 5px;

    &:hover {
      animation-name: heartBeat;
      animation-duration: 1s;
    }
  }

  .darkBtn {
    background-color: #fff;
    border: none;
    color: #03228f;
    font-size: 18px;
    font-weight: 600;
    border: none !important;
    padding: 5px 20px;
    border-radius: 5px;

    &:hover {
      animation-name: heartBeat;
      animation-duration: 1s;
    }

    @media (max-width: 991.98px) {
      background: linear-gradient(90deg, #03228f 10%, #0e73e4);
      color: #fff;
      display: block;
      margin: 0 auto;
    }
  }

  .navbar-light .navbar-nav .nav-link {
    color: #fff;
    font-weight: 500;
    font-size: 18px;

    &::after {
      content: "";
      display: block;
      width: 0%;
      height: 2px;
      background: #fff;
      transition: width 0.3s ease;
    }
    &:hover::after {
      width: 100%;
    }

    @media (max-width: 991.98px) {
      color: #03228f !important;
      text-align: center;
    }

    &.darkText {
      color: #03228f;

      &::after {
        content: "";
        display: block;
        width: 0%;
        height: 2px;
        background: #03228f;
        transition: width 0.3s ease;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }

  .brandImg {
    height: 50px;
  }

  .outSideImg {
    height: 50px;

    @media (min-width: 992px) {
      display: none;
    }
  }

  a {
    text-decoration: none;
  }

  .lightCentered {
    margin-left: auto;
  }
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding-bottom: 10px;
  padding-top: 10px;

  @media (max-width: 991.98px) {
    display: none;
  }
`;

export const TopContainerImageDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  .imageText {
    color: rgb(0, 147, 221);
    font-weight: 600;
    margin: 0;

    span {
      color: #000;
      margin-left: 5px;
    }
  }

  .topImg {
    height: 80px;
  }
`;

export const TopRightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  .rightWraper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-right: 20px;
    border-right: 2px solid rgb(211, 211, 211);

    &.noBorder {
      border-right: none;
    }
  }

  .leftDiv {
    .divIcons {
      font-size: 32px;
      color: rgb(0, 147, 221);
    }
  }

  .rightDiv {
    .header {
      margin: 0;
      font-size: 18px;
      text-transform: capitalize;
    }

    .text {
      margin: 0;
      font-size: 16px;
    }
  }
`;
