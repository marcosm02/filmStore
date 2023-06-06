import { Header } from "../../components/header/header";
import { Favorites } from "../../components/favorites/favorites";
import { useContext } from "react";
import { FilmContext } from "../../contexts/FilmContext";
import { StyledDiv } from "./styleCheckout";
import { CartCheckout } from "../../components/cartCheckout/cartCheckout";

export const Checkout = () => {
  const { showFavorites } = useContext(FilmContext);
  return (
    <StyledDiv>
      <Header />
      {showFavorites && <Favorites />}
      <form>
        <h2>Finalize Purchase</h2>
        <div className="twoBox">
          <div className="inputBox">
            <input id="fullName" type="text" placeholder="Full Name" />
            <input id="cpf" type="text" placeholder="CPF" />
            <input id="cell" type="text" placeholder="Cell Phone" />
            <input id="email" type="text" placeholder="E-mail" />
            <input id="cep" type="text" placeholder="CEP" />
            <input id="address" type="text" placeholder="Address" />
            <input id="city" type="text" placeholder="City" />
            <input id="state" type="text" placeholder="State" />
          </div>
          <div className="cartBox">
            <CartCheckout />
            <button className="checkoutBtn" type="submit">
              Checkout
            </button>
          </div>
        </div>
      </form>
    </StyledDiv>
  );
};
