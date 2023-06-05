import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;

  .cardList {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;

    @media (max-width: 769px) {
      margin-top: 8rem;
    }
  }
`;
