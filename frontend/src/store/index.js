import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import activities from 'src/middlewares/activities';
import searchBar from 'src/middlewares/searchBar';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(activities, searchBar),
    // other store enhancers if any
  ),
);

export default store;
