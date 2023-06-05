import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--color-grey-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.15rem solid var(--color-primary);

  @media (max-width: 769px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    padding: 1rem 1rem;
  }

  @media (max-width: 321px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .logo {
    color: var(--color-primary);
    font-size: 1.75rem;
    cursor: pointer;

    @media (max-width: 769px) {
      width: 100vw;
      text-align: center;
      margin: 0 auto;
      padding: 0 3rem;
      padding-bottom: 1rem;
    }
  }

  .searchBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-4);
    width: 35%;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    border: 0.15rem solid var(--color-primary);

    :hover {
      border-color: var(--color-primary-hover);
    }

    @media (max-width: 769px) {
      width: 60%;
    }

    @media (max-width: 321px) {
      width: 60%;
      margin-right: 0.5rem;
    }

    input {
      width: 90%;
      border: none;
      outline: none;
      background-color: var(--color-grey-4);
      color: var(--color-grey-1);

      ::placeholder {
        color: var(--color-grey-1);
      }
    }

    .searchBoxBtn {
      background-color: var(--color-grey-4);
      border: none;
    }

    .searchImg {
      color: var(--color-grey-1);
    }
  }

  .favCartBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: max-content;

    @media (max-width: 321px) {
      /* padding: 0.5rem 0 0 0.5rem; */
    }

    .shopCartBox {
      position: relative;

      :hover {
        transform: scale(1.25);
        transition: 0.5s ease;
      }

      span {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--color-bubble-notification);
        border-radius: 50%;
        width: 1rem;
        padding: 0.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.7rem;
      }
    }

    #favBtn {
      :hover {
        transform: scale(1.25);
        transition: 0.5s ease;
      }
    }

    .favCartBoxBtn {
      background-color: var(--color-grey-4);
      border: none;
      padding: 0.5rem;

      .buttonImg {
        width: 1.5rem;
        height: 1.5rem;
        color: ${(props) => props.color};
      }
    }
  }
`;
