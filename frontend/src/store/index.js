import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';

import activities from 'src/middlewares/activities';
import connexion from 'src/middlewares/connexion';
import searchBar from 'src/middlewares/searchBar';
import creationPage from 'src/middlewares/creationPage';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(activities, searchBar, connexion, creationPage),
));

export default store;
