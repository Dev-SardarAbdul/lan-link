import styled from "styled-components";

export const FooterWrapper = styled.div`
  overflow: hidden;
  .container {
    margin-top: 4rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 991.98px) {
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    }

    @media (max-width: 575.98px) {
      margin-top: 2rem;
      margin-bottom: 0;
    }
  }
`;
export const LeftWrapper = styled.div`
  font-weight: 500;

  @media (max-width: 575.98px) {
    text-align: center;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  @media (max-width: 575.98px) {
    gap: 10px;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    margin: 0;
    font-weight: 500;
    cursor: pointer;

    @media (max-width: 575.98px) {
      display: none;
    }

    span {
      color: rgb(3, 138, 255);
      margin-right: 10px;

      @media (max-width: 767.98px) {
        margin-right: 5px;
      }
    }
  }
`;
