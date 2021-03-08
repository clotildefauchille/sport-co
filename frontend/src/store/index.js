import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import lastActivities from 'src/middlewares/lastActivities';
import connexion from 'src/middlewares/connexion';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(lastActivities),
  applyMiddleware(connexion),
  // other store enhancers if any
));

export default store;
