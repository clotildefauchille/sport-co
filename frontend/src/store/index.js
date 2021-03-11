import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';

import activities from 'src/middlewares/activities';
import connexion from 'src/middlewares/connexion';
import searchBar from 'src/middlewares/searchBar';
import registration from '../middlewares/registration';
import creationPage from 'src/middlewares/creationPage';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(activities, searchBar, connexion, registration, creationPage),
                        
));

export default store;
