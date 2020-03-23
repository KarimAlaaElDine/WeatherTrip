import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import Search from "./Search";
import News from "./News";

const FETCH_WEATHER = "FETCH_WEATHER";
const FETCH_FEED = "FETCH_FEED";
const BEGIN_SEARCH = "BEGIN_SEARCH";

const initState = {
  feed: [],
  info: "",
  start: false
};

const reducer = (state = initState, action) => {
  if (action.type === FETCH_WEATHER) {
    return {
      ...state,
      info: action.info
    };
  }
  if (action.type === FETCH_FEED) {
    //console.log(action.feed);

    return {
      ...state,
      feed: action.feed
    };
  }
  return state;
};

const mapStateToProps = state => {
  return state;
};
const updateWeather = info => ({
  type: FETCH_WEATHER,
  info: info
});
const updateFeed = feed => ({
  type: FETCH_FEED,
  feed: [...feed]
});

const mapDispatchToPropsWeather = dispatch => {
  return {
    weather(info) {
      dispatch(updateWeather(info));
    },
    location(loc) {
      dispatch(updateLocation(loc));
    }
  };
};
const mapDispatchToPropsNews = dispatch => {
  return {
    refeed: feed => dispatch(updateFeed(feed))
  };
};
const NewsContainer = connect(mapStateToProps, mapDispatchToPropsNews)(News);
const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToPropsWeather
)(Search);

const store = createStore(reducer);

export { SearchContainer, store, NewsContainer };
