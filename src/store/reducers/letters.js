import {GET_LETTERS_SUCCESS} from '../constants/actions/letters';

const initialState = [{
  letters: [],
}];

function lettersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LETTERS_SUCCESS:
      return {
        ...state,
        letters: action.payload,
      };
    default:
      return state
  }
}

export default lettersReducer;
