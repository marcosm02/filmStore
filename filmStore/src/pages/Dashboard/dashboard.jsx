import { useContext } from "react";
import { Card } from "../../components/cards/cards";
import { Cart } from "../../components/cart/cart";
import { Favorites } from "../../components/favorites/favorites";
import { Header } from "../../components/header/header";
import { StyledContainer } from "./styleDashboard";
import { FilmContext } from "../../contexts/FilmContext";
import { Paginate } from "../../components/paginate/paginate";

export const Dashboard = () => {
  const { showFavorites, showCart } = useContext(FilmContext);

  return (
    <>
      <Header />
      <StyledContainer className="container">
        <ul className="cardList">
          <Card />
        </ul>
        {showCart && <Cart />}
        {showFavorites && <Favorites />}
      </StyledContainer>
      <Paginate />
    </>
  );
};
