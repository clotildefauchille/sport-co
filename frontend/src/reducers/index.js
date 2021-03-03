import { combineReducers } from 'redux';
import Cards from './Cards';

// combineReducers va nous permettre d'agréger les sous-reducers
// qu'on va utiliser dans notre application
// ça permet de séparer les responsabilités de chaque reducer
const globalReducer = combineReducers({
  // ici chaque propriétés correspondra à un mini reducer
  Cards,
});

export default globalReducer;
