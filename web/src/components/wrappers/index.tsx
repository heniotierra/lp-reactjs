import styled from "styled-components";

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center
`;

export const PageWrapper = styled.div`
  width: 100%;
  .section {
    display: flex;
    flex-direction: column;
    width: 100%;
    .section-heading {
      margin-left: 4vw;
    }
  }
  .back-btn-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    button {
      align-self: center;
      max-width: 60px;
    }
  }
`;
