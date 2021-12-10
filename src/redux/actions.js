import axios from "axios";

const { REACT_APP_MOVIE } = process.env;

export const GET_MOVIE_LIST = "GET_MOVIE_LIST";
export const GET_GENRE_LIST = "GET_GENRE_LIST";
export const GET_DETAIL_MOVIE = "GET_DETAIL_MOVIE";
export const ARMATASOFT_TECHNICAL = "ARMATASOFT_TECHNICAL";

const getMovieList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_MOVIE_LIST,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    //Get Movie
    axios
      .get(
        `${REACT_APP_MOVIE}/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1`
      )
      .then((res) => {
        dispatch({
          type: GET_MOVIE_LIST,
          payload: {
            loading: false,
            data: res.data.results,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIE_LIST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

const getGenreList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_GENRE_LIST,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    //Get Genre
    axios
      .get(
        `${REACT_APP_MOVIE}/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49`
      )
      .then((res) => {
        console.log(res.data.genres);
        dispatch({
          type: GET_GENRE_LIST,
          payload: {
            loading: false,
            data: res.data.genres,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_GENRE_LIST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

const getDetailMovie = (movie_id) => {
  return (dispatch) => {
    dispatch({
      type: GET_DETAIL_MOVIE,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    //Get Genre
    axios
      .get(
        `${REACT_APP_MOVIE}/movie/${movie_id}?api_key=2fccde01a371b106b09a241d6d1d5b49`
      )
      .then((res) => {
        dispatch({
          type: GET_DETAIL_MOVIE,
          payload: {
            loading: false,
            detailMovie: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DETAIL_MOVIE,
          payload: {
            loading: false,
            detailMovie: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export { getMovieList, getGenreList, getDetailMovie };
