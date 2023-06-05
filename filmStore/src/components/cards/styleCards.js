import styled from "styled-components";

export const StyledCard = styled.li`
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 12.5rem;
  height: 30rem;
  border: 0.2rem solid var(--color-grey-4);
  border-radius: 0.6rem;
  transition: 0.5s ease;

  :hover {
    border: 0.2rem solid var(--color-primary);
    transform: scale(1.05);
    transition: 0.5s ease;
  }

  .filmCoverBox {
    width: 100%;
    height: 20rem;
    background-color: var(--color-grey-1);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 0.4rem;
    border-top-left-radius: 0.4rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-right-radius: 0.4rem;
      border-top-left-radius: 0.4rem;
    }

    .defaultImg {
      width: 4rem;
      height: 4rem;
      color: var(--color-grey-3);
    }

    button {
      position: absolute;
      top: 0.35rem;
      right: 0.35rem;
      background-color: transparent;
      border: none;
      width: 1.25rem;
      height: 1.25rem;
    }
    .heart {
      color: ${(props) => props.color};
      width: 1.25rem;
      height: 1.25rem;
      transition: 0.5s ease;

      :hover {
        color: var(--color-grey-3);
        transform: scale(1.5);
        transition: 0.5s ease;
      }
    }
  }

  .infoBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h2 {
      font-size: 0.95rem;
      color: var(--color-grey-4);
      font-weight: 600;
      text-align: center;
    }

    p {
      font-size: 0.9rem;
      color: var(--color-grey-3);
    }

    .genres {
      font-size: 0.78rem;
      text-align: center;
    }

    .ratingBox {
      display: flex;
      align-items: flex-end;
      gap: 1rem;

      .star {
        color: goldenrod;
      }

      p {
        font-weight: 600;
      }
    }

    small {
      font-size: 0.75rem;
      color: var(--color-grey-3);
    }
  }

  .adcBtn {
    padding: 0.75rem;
    width: 100%;
    border: none;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    background-color: var(--color-primary);
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-white);

    :hover {
      background-color: var(--color-primary-hover);
    }
  }
`;
