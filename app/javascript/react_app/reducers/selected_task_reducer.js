import { SELECT_TASK } from '../actions';
export default function(state = null, action) {
  switch (action.type) {
    case SELECT_TASK:
      return action.payload;
   
    default:
      return state;
  }
}
