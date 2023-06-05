import styled from "styled-components";

export const StyledPaginate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 0.5rem;
  margin: 0.5rem auto 3rem;
  border: 0.15rem solid var(--color-primary);
  border-radius: 0.6rem;

  .disabled {
    background-color: var(--color-grey-2);
    color: var(--color-grey-1);

    :hover {
      background-color: var(--color-grey-2);
    }
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    border: none;
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    font-weight: 600;

    :hover {
      background-color: var(--color-primary-hover);
    }
  }

  p {
    color: var(--color-primary);
    font-size: 1.15rem;
    font-weight: 600;
  }
`;
