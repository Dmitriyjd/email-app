import {createAction} from 'redux-actions';
import {GET_LETTERS_PENDING} from '../constants/actions/letters';

export const getLettersRequest = createAction(GET_LETTERS_PENDING);
