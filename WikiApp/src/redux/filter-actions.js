export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateFilter = filter => {
    return {
      type: UPDATE_FILTER,
      filter
    };
  };


  export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_FILTER:
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state;
    }
  };
  