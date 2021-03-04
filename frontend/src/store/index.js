import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import lastActivities from 'src/middlewares/lastActivities';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(lastActivities),
  // other store enhancers if any
));

export default store;
