import { GET_MOVIE_LIST, GET_GENRE_LIST } from "./actions";

const initState = {
  loading: false,
  data: false,
  detailMovie: false,
  errorMessage: false,
};

const store = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIE_LIST":
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "GET_GENRE_LIST":
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "GET_DETAIL_MOVIE":
      return {
        ...state,
        loading: action.payload.loading,
        detailMovie: action.payload.detailMovie,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default store;
