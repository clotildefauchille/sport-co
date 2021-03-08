import { combineReducers } from 'redux';
import cards from './cards';
import header from './header';
import login from './login';
import searchBar from './searchBar';
import loginModal from './loginModal';
import search from './search';

const globalReducer = combineReducers({
  cards,
  header,
  login,
  searchBar,
  loginModal,
  search,
});

export default globalReducer;
