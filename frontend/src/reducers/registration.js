const initialState = {
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  city: '',
  presentation: '',
  error: false,
};

const registration = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default registration;