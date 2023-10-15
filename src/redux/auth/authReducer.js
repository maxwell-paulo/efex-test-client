const initialState = {
  token: localStorage.getItem("token") || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.token);
      return { token: action.token };

    default:
      return state;
  }
};

export default authReducer;
