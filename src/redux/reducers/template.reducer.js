const templates = (state = [], action) => {
  switch (action.type) {
    case 'SET_TEMPLATE':
      return action.payload;
    default:
      return state;
  }
};

export default templates;
