import styled from "styled-components";

export const StyledDiv = styled.div`
  aside {
    position: absolute;
    top: 7.8rem;
    right: 0.5rem;

    @media (max-width: 769px) {
      position: fixed;
      width: 90%;
      height: 100vh;
      margin: 0 1rem 0 1rem;
    }
  }

  form {
    width: 80%;
    height: 75vh;
    margin: 2.5rem auto 0;

    @media (max-width: 769px) {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: 10rem auto 0;
    }

    h2 {
      width: 100%;
      margin-bottom: 2.5rem;
      color: var(--color-grey-0);

      @media (max-width: 769px) {
        text-align: center;
      }
    }

    .twoBox {
      display: flex;
      justify-content: space-between;

      @media (max-width: 769px) {
        flex-direction: column;
      }
    }

    .inputBox {
      width: 43%;
      height: 400px;
      display: flex;
      flex-wrap: wrap;

      @media (max-width: 769px) {
        width: 100%;
      }

      .inputs {
        margin-bottom: 5px;
        height: fit-content;

        small {
          color: red;
          font-size: 0.8rem;
        }
      }
      input {
        padding: 0.5rem 0.4rem;
        border-radius: 0.4rem;
        outline: none;
      }

      #fullNameBox {
        width: 100%;
      }
      #fullName {
        width: 100%;
      }

      #cpfBox {
        width: 48%;
        margin-right: 4%;
      }
      #cpf {
        width: 100%;
      }

      #cellBox {
        width: 48%;
      }
      #cell {
        width: 100%;
      }

      #emailBox {
        width: 100%;
      }
      #email {
        width: 100%;
      }

      #cepBox {
        width: 23%;
        margin-right: 4%;
      }
      #cep {
        width: 100%;
      }

      #addressBox {
        width: 73%;
      }
      #address {
        width: 100%;
      }

      #cityBox {
        width: 48%;
        margin-right: 4%;
      }
      #city {
        width: 100%;
      }

      #stateBox {
        width: 48%;
      }
      #state {
        width: 100%;
      }
    }

    .cartBox {
      width: 43%;
      display: flex;
      flex-direction: column;

      @media (max-width: 769px) {
        width: 100%;
        padding-top: 0.5rem;
        margin-bottom: 2rem;
      }

      .checkoutBtn {
        width: 100%;
        padding: 0.6rem 0.5rem;
        margin: 1rem 0 0 0;
        border-radius: 0.4rem;
        border: none;
        background-color: var(--color-primary);
        color: var(--color-grey-0);
        font-size: 1.05rem;
        font-weight: 600;
      }
    }
  }
`;
