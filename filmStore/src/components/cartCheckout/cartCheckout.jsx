import { useContext } from "react";
import { StyledCartCheckout } from "./styleCartCheckout";
import { FilmContext } from "../../contexts/FilmContext";
import { FaTrash } from "react-icons/fa";

export const CartCheckout = () => {
  const { cartList, removeFilmCart, checkoutPrice } = useContext(FilmContext);

  return (
    <StyledCartCheckout>
      <div className="titles">
        <p id="image">Image</p>
        <p id="name">Name</p>
        <p id="qtd">Qtd</p>
        <p id="price">Price</p>
      </div>
      <div className="listBox">
        <ul>
          {cartList.map((element) => (
            <li key={element.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
              />
              <p id="filmTitle">{element.title}</p>
              <p id="filmQnt">{element.amount}</p>
              <div className="priceAndTrashBox">
                <p id="filmPrice">{`R$ ${(
                  element.price.slice(3).replace(",", ".") * element.amount
                )
                  .toFixed(2)
                  .replace(".", ",")}`}</p>
                <span onClick={() => removeFilmCart(element.id)}>
                  <FaTrash className="trash" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="totalBox">
        <h3>Total</h3>
        <p>{checkoutPrice()}</p>
      </div>
    </StyledCartCheckout>
  );
};
