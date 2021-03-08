export const SAVE_LOGIN = 'SAVE_LOGIN';
export const FETCH_LOGIN = 'FETCH_LOGIN';
export const SAVE_CONNEXION_STATUT = 'SAVE_CONNEXION_STATUT';
export const DISCONNECT = 'DISCONNECT';

export const saveLogin = (value, input) => ({
  type: SAVE_LOGIN,
  value,
  input,
});

export const fetchLogin = () => ({
  type: FETCH_LOGIN,
});

export const saveConnexionStatut = (data) => ({
  type: SAVE_CONNEXION_STATUT,
  data,
});

export const Disconnect = () => ({
  type: DISCONNECT,
});
