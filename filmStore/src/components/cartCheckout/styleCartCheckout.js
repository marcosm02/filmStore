import styled from "styled-components";

export const StyledCartCheckout = styled.div`
  width: 100%;
  height: 55vh;

  .titles {
    width: 100%;
    display: flex;
    gap: 2%;

    p {
      color: var(--color-grey-0);
    }
    #image {
      width: 20%;
    }
    #name {
      width: 30%;
    }
    #qtd {
      width: 12%;
    }
    #price {
    }
  }

  .listBox {
    width: 100%;
    height: 47vh;
  }

  ul {
    height: 90%;
    margin: 1rem auto 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 0.25rem;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--color-grey-0);
      border-radius: 0.4rem;
    }

    li {
      width: 100%;
      height: 30%;
      display: flex;
      align-items: center;
      gap: 2%;
      border-bottom: 0.05rem solid var(--color-grey-0);

      img {
        width: 20%;
        height: 95%;
        object-fit: cover;
      }

      p {
        color: var(--color-grey-0);
        font-size: 0.85rem;
      }

      #filmTitle {
        width: 30%;
      }

      #filmQnt {
        width: 12%;
      }

      .priceAndTrashBox {
        display: flex;
        justify-content: space-between;
        width: 30%;

        span {
          background-color: var(--color-grey-4);
          height: fit-content;
          border: none;
          color: var(--color-grey-0);
          cursor: pointer;

          :hover {
            color: var(--color-primary);
          }
        }
      }
    }
  }
  .totalBox {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;

    h3 {
      color: var(--color-grey-0);
    }

    p {
      color: var(--color-grey-0);
    }
  }
`;
