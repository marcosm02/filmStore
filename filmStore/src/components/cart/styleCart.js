import styled from "styled-components";

export const StyledCart = styled.aside`
  background-color: var(--color-grey-2);
  margin: -3rem 1rem 0 1rem;
  width: 30%;
  min-height: 25rem;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 769px) {
    position: fixed;
    width: 90%;
    height: 100vh;
    margin: 4.9rem 1rem 0 1rem;
  }

  @media (max-width: 321px) {
    margin: 5.5rem 1rem 0 1rem;
  }

  .listBox {
    height: 75%;
  }

  .cartTitle {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    border-bottom: 0.15rem solid var(--color-grey-0);
    width: 90%;
    margin: 0 auto 0.5rem;

    h3 {
      color: var(--color-grey-0);
    }

    button {
      background-color: var(--color-grey-2);
      color: var(--color-grey-0);
      border: none;
      text-decoration: underline;
      font-weight: 600;

      :hover {
        color: var(--color-grey-4);
      }
    }
  }

  .cartList {
    width: 90%;
    height: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;
    padding-right: 1rem;

    ::-webkit-scrollbar {
      width: 0.25rem;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--color-grey-0);
      border-radius: 0.4rem;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.25rem;
      border-bottom: 0.05rem solid var(--color-grey-0);

      .imgBox {
        width: 15%;
        height: 3rem;
        margin-bottom: 0.25rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      p {
        font-size: 0.8rem;
        color: var(--color-grey-0);
      }

      .filmName {
        width: 40%;
      }
      .filmQuant {
        width: 5%;
        padding-left: 0.3rem;
      }
      .filmPrice {
        width: 25%;
        padding-left: 0.3rem;
      }

      button {
        width: 10%;
        background-color: var(--color-grey-2);
        border: none;
        color: var(--color-grey-0);

        :hover {
          color: var(--color-grey-4);
        }
      }
    }
  }

  .checkoutBox {
    width: 90%;
    margin: 0 auto 1rem;
  }

  .cartTotal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto 0;

    p {
      color: var(--color-grey-0);
    }
  }

  .checkoutBtn {
    width: 100%;
    margin: 1rem auto 0;
    padding: 0.65rem 0.25rem;
    border-radius: 0.4rem;
    border: none;
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    font-weight: 600;

    :hover {
      background-color: var(--color-primary-hover);
    }
  }
`;
