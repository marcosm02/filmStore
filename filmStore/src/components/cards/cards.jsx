import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { StyledCard } from "./styleCards";
import { useContext } from "react";
import { FilmContext } from "../../contexts/FilmContext";

export const Card = () => {
  const { filteredFilmsList, addFilmToCart, formatDate, handleClickFavCard } =
    useContext(FilmContext);

  return (
    <>
      {filteredFilmsList.map((element) => (
        <StyledCard key={element.id}>
          <div className="filmCoverBox">
            <button onClick={() => handleClickFavCard(element)}>
              <FaHeart color={element.favColor} className="heart" />
            </button>
            {element.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
              />
            ) : (
              <FaImage className="defaultImg" />
            )}
          </div>

          <div className="infoBox">
            <h2>{element.title}</h2>
            <p className="genres">{element.genres.join(", ")}</p>
            <div className="ratingBox">
              {element.release_date && (
                <small>{formatDate(element.release_date)}</small>
              )}
              <FaStar className="star" />
              <p className="rating">{element.vote_average}</p>
            </div>
            <p>{(element.price = "R$ 49,90")}</p>
          </div>

          <button className="adcBtn" onClick={() => addFilmToCart(element)}>
            Adicionar
          </button>
        </StyledCard>
      ))}
    </>
  );
};
