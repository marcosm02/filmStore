import { FaTrash } from "react-icons/fa";
import { StyledCart } from "./styleCart";
import { useContext } from "react";
import { FilmContext } from "../../contexts/FilmContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartList, setCartList, removeFilmCart, checkoutPrice } =
    useContext(FilmContext);
  const navigate = useNavigate();

  return (
    <StyledCart>
      <div className="listBox">
        <div className="cartTitle">
          <h3>My Cart</h3>
          <button onClick={() => setCartList([])}>Empty Cart</button>
        </div>

        <ul className="cartList">
          {cartList.map((element) => (
            <li key={element.id}>
              <div className="imgBox">
                <img
                  src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                />
              </div>
              <p className="filmName">{element.title}</p>
              <p className="filmQuant">{element.amount}</p>
              <p className="filmPrice">
                {`R$ ${(
                  element.price.slice(3).replace(",", ".") * element.amount
                )
                  .toFixed(2)
                  .replace(".", ",")}`}
              </p>
              <button onClick={() => removeFilmCart(element.id)}>
                <FaTrash className="trash" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="checkoutBox">
        <div className="cartTotal">
          <p className="cartTotalTitle">Total</p>
          <p className="cartTotalValue">{checkoutPrice()}</p>
        </div>

        {cartList.length !== 0 ? (
          <button className="checkoutBtn" onClick={() => navigate("checkout")}>
            Checkout
          </button>
        ) : (
          <button id="disabled" className="checkoutBtn">
            Checkout
          </button>
        )}
      </div>
    </StyledCart>
  );
};
