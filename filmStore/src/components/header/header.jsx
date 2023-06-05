import { GoSearch } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { StyledHeader } from "./styleHeader";
import { useContext } from "react";
import { FilmContext } from "../../contexts/FilmContext";

export const Header = () => {
  const {
    heartColor,
    cartColor,
    handleClickFav,
    handleClickCart,
    inputValue,
    handleChange,
    searchEnter,
    searchButton,
    cartAmount,
  } = useContext(FilmContext);

  return (
    <StyledHeader>
      <h1 className="logo" onClick={() => window.location.reload()}>
        FilmStore
      </h1>

      <div className="searchBox">
        <input
          placeholder="Pesquisar"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={searchEnter}
        />
        <button className="searchBoxBtn" onClick={searchButton}>
          <GoSearch className="searchImg" />
        </button>
      </div>

      <div className="favCartBox">
        <button className="favCartBoxBtn" id="favBtn" onClick={handleClickFav}>
          <FaHeart color={heartColor} className="buttonImg" />
        </button>
        <div className="shopCartBox">
          {cartAmount !== 0 && <span>{cartAmount}</span>}
          <button className="favCartBoxBtn" onClick={handleClickCart}>
            <FaShoppingCart color={cartColor} className="buttonImg" />
          </button>
        </div>
      </div>
    </StyledHeader>
  );
};
