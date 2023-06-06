import { FaTrash } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { StyledFavorites } from "./styleFavorites";
import { useContext } from "react";
import { FilmContext } from "../../contexts/FilmContext";

export const Favorites = () => {
  const { favList, removeFav, addFilmToCart, emptyFav } =
    useContext(FilmContext);

  return (
    <StyledFavorites>
      <div className="listBox">
        <div className="favTitle">
          <h3>My Favorites</h3>
          <button onClick={emptyFav}>Empty Favorites</button>
        </div>

        <ul className="favList">
          {favList.map((element) => (
            <li key={element.id}>
              <div className="imgBox">
                <img
                  src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                />
              </div>
              <p className="filmName">{element.title}</p>
              <p className="filmPrice">{element.price}</p>
              <button
                className="shopCartBtn"
                onClick={() => addFilmToCart(element)}
              >
                <FaShoppingCart className="shopCart" />
              </button>
              <button className="trashBtn" onClick={() => removeFav(element)}>
                <FaTrash className="trash" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </StyledFavorites>
  );
};
