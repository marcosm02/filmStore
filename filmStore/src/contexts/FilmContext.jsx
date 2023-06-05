import { createContext, useState, useEffect } from "react";
import api from "../service/api";
import { format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

export const FilmContext = createContext({});

// eslint-disable-next-line react/prop-types
export const FilmProvider = ({ children }) => {
  const [filmsList, setFilmsList] = useState([]);
  const [filteredFilmsList, setFilteredFilmsList] = useState([]);
  const [favList, setFavList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [heartColor, setHeartColor] = useState("#845ef7");
  const [cartColor, setCartColor] = useState("#845ef7");
  const [showFavorites, setShowFavorites] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    loadFilms();
    cartSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, cartList]);

  async function loadFilms() {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2ExOTI2N2JmYWIzMjg5NDBjODcwMmMzZmYxZDc2OSIsInN1YiI6IjY0N2I1YzZlY2Y0YjhiMDBhODc3OTQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ndOEdHXmr2VqEOqRLyRmG40TC0WmMWxX_-nSFGDPK1I";
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(
        `/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
      );
      const filmsList = await Promise.all(
        data.results.map(async (el) => {
          const genres = await loadGenres(el.id);
          el.genres = genres;
          el.favColor = "#868E96";
          return el;
        })
      );
      setFilmsList(filmsList);
      setFilteredFilmsList(filmsList);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadGenres(filmId) {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2ExOTI2N2JmYWIzMjg5NDBjODcwMmMzZmYxZDc2OSIsInN1YiI6IjY0N2I1YzZlY2Y0YjhiMDBhODc3OTQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ndOEdHXmr2VqEOqRLyRmG40TC0WmMWxX_-nSFGDPK1I";
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/3/movie/${filmId}?language=en-US`);
      const genres = data.genres.map((el) => el.name);
      return genres;
    } catch (error) {
      console.log(error);
    }
  }

  async function searchEnter(event) {
    if (event.key === "Enter") {
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2ExOTI2N2JmYWIzMjg5NDBjODcwMmMzZmYxZDc2OSIsInN1YiI6IjY0N2I1YzZlY2Y0YjhiMDBhODc3OTQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ndOEdHXmr2VqEOqRLyRmG40TC0WmMWxX_-nSFGDPK1I";
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get(
          `/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`
        );
        const filmsList = await Promise.all(
          data.results.map(async (el) => {
            const genres = await loadGenres(el.id);
            el.genres = genres;
            el.favColor = "#868E96";
            return el;
          })
        );
        setFilteredFilmsList(filmsList);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function searchButton() {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2ExOTI2N2JmYWIzMjg5NDBjODcwMmMzZmYxZDc2OSIsInN1YiI6IjY0N2I1YzZlY2Y0YjhiMDBhODc3OTQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ndOEdHXmr2VqEOqRLyRmG40TC0WmMWxX_-nSFGDPK1I";
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(
        `/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`
      );
      const filmsList = await Promise.all(
        data.results.map(async (el) => {
          const genres = await loadGenres(el.id);
          el.genres = genres;
          el.favColor = "#868E96";
          return el;
        })
      );
      setFilteredFilmsList(filmsList);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickFav = () => {
    const newColor = heartColor === "#845ef7" ? "#c40233" : "#845ef7";
    setHeartColor(newColor);
    setShowFavorites(!showFavorites);
    if (showCart) {
      setCartColor("#845ef7");
      setShowCart(false);
    }
  };

  const handleClickCart = () => {
    const newColor = cartColor === "#845ef7" ? "#1AAE9F" : "#845ef7";
    setCartColor(newColor);
    setShowCart(!showCart);
    if (showFavorites) {
      setHeartColor("#845ef7");
      setShowFavorites(false);
    }
  };

  const addFilmToCart = (film) => {
    const checkFilmIndex = cartList.findIndex((el) => el.id === film.id);
    if (checkFilmIndex !== -1) {
      const newCartList = [...cartList];
      newCartList[checkFilmIndex].amount += 1;
      setCartList(newCartList);
    } else {
      const newFilm = { ...film, amount: 1 };
      setCartList([...cartList, newFilm]);
    }
    cartSize();
  };

  const removeFilmCart = (filmId) => {
    const checkFilmIndex = cartList.findIndex((el) => el.id === filmId);
    const checkFilm = cartList.find((el) => el.id === filmId);
    if (checkFilm.amount !== 1) {
      const newCartList = [...cartList];
      newCartList[checkFilmIndex].amount -= 1;
      setCartList(newCartList);
    } else if (checkFilm.amount === 1) {
      const newList = cartList.filter((el) => el.id !== filmId);
      setCartList([...newList]);
    }
    cartSize();
  };

  const checkoutPrice = () => {
    const priceList = cartList.map((element) =>
      parseFloat(
        (element.price.slice(3).replace(",", ".") * element.amount).toFixed(2)
      )
    );
    const finalPrice = priceList.reduce((total, price) => total + price, 0);
    return `R$ ${finalPrice.toFixed(2).replace(".", ",")}`;
  };

  const setNextPage = async () => {
    setPage(page + 1);
    await loadFilms();
  };

  const setPreviousPage = async () => {
    setPage(page - 1);
    await loadFilms();
  };

  const formatDate = (date) => {
    const parsedDate = parseISO(date);
    const formattedDate = format(parsedDate, "MMMM d, yyyy", { locale: enUS });
    return formattedDate;
  };

  const handleClickFavCard = (film) => {
    if (film.favColor === "#868E96") {
      film.favColor = "#c40233";
      setFavList([...favList, film]);
    } else if (film.favColor === "#c40233") {
      film.favColor = "#868E96";
      const newFavList = favList.filter((el) => el.id !== film.id);
      setFavList(newFavList);
    }
  };

  const removeFav = (film) => {
    if (film.favColor === "#c40233") {
      film.favColor = "#868E96";
      const newFavList = favList.filter((el) => el.id !== film.id);
      setFavList(newFavList);
    }
  };

  const emptyFav = async () => {
    await loadFilms();
    setFavList([]);
  };

  const cartSize = () => {
    const size = cartList.reduce((total, film) => total + film.amount, 0);
    console.log(size);
    setCartAmount(size);
  };

  return (
    <FilmContext.Provider
      value={{
        loadFilms,
        filmsList,
        filteredFilmsList,
        heartColor,
        cartColor,
        showFavorites,
        showCart,
        handleClickFav,
        handleClickCart,
        cartList,
        setCartList,
        addFilmToCart,
        removeFilmCart,
        checkoutPrice,
        page,
        totalPages,
        setNextPage,
        setPreviousPage,
        formatDate,
        loadGenres,
        favList,
        handleClickFavCard,
        removeFav,
        emptyFav,
        searchEnter,
        searchButton,
        handleChange,
        cartAmount,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
};
