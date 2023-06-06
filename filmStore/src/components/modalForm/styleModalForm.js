import styled from "styled-components";

export const StyledModalForm = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 18, 20, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modalBox {
    background-color: var(--color-grey-3);
    border-radius: 0.4rem;
    width: 40%;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    @media (max-width: 769px) {
      width: 90%;
      position: fixed;
    }

    h2 {
      color: var(--color-grey-0);
      text-align: center;
    }

    p {
      color: var(--color-grey-0);
      font-size: 1.05rem;
      text-align: center;
    }

    button {
      background-color: var(--color-primary);
      border: none;
      border-radius: 0.4rem;
      width: 50%;
      padding: 1rem 0;
      color: var(--color-grey-0);
      font-size: 1.1rem;
      font-weight: 600;

      :hover {
        background-color: var(--color-primary-hover);
      }
    }
  }
`;
