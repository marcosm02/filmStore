import { useContext } from "react";
import { StyledModalForm } from "./styleModalForm";
import { FilmContext } from "../../contexts/FilmContext";

export const ModalForm = () => {
  const { client, endPurchase } = useContext(FilmContext);

  return (
    <StyledModalForm>
      <div className="modalBox">
        <h2>{`Thank you ${client.fullName}!`}</h2>
        <p>Your purchase has been successfully completed!</p>
        <button onClick={endPurchase}>Back to Store</button>
      </div>
    </StyledModalForm>
  );
};
