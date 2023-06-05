import { useContext } from "react";
import { FilmContext } from "../../contexts/FilmContext";
import { StyledPaginate } from "./stylePaginate";

export const Paginate = () => {
  const { page, totalPages, setNextPage, setPreviousPage } =
    useContext(FilmContext);

  return (
    <StyledPaginate className="paginate">
      {page !== 1 ? (
        <button onClick={setPreviousPage}>Previous Page</button>
      ) : (
        <button disabled className="disabled" onClick={setPreviousPage}>
          Previous Page
        </button>
      )}
      <p>{`Page ${page} of ${totalPages}`}</p>
      {page !== totalPages ? (
        <button onClick={setNextPage}>Next Page</button>
      ) : (
        <button disabled className="disabled" onClick={setNextPage}>
          Next Page
        </button>
      )}
    </StyledPaginate>
  );
};
