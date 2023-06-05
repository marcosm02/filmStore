// import { Badge } from "@material-ui/core";
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
  }

  .logo {
    color: var(--color-primary);
    font-size: 1.75rem;
    cursor: pointer;

    @media (max-width: 769px) {
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
      width: 70%;
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

    .favCartBoxBtn {
      background-color: var(--color-grey-4);
      border: none;

      .buttonImg {
        width: 1.5rem;
        height: 1.5rem;
        color: ${(props) => props.color};

        :hover {
          transform: scale(1.25);
          transition: 0.5s ease;
        }
      }
    }
  }
`;

// export const StyledBadge = styled(Badge)`
//   .MuiBadge-badge {
//     background-color: var(--color-bubble-notification);
//     color: var(--color-grey-4);
//   }
// `;
