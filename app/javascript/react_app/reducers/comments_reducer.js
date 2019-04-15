import { FETCH_COMMENTS, CLEAR_COMMENTS, COMMENT_POSTED, COMMENT_DELETED } from '../actions';
export default function(state = [], action) {
	switch (action.type) {
	  	case CLEAR_COMMENTS:
	  		return action.payload
	  	case COMMENT_POSTED:
	      const copiedState = state.slice(0);
	      copiedState.push(action.payload);
	      return copiedState;
	    case COMMENT_DELETED:
	    	return state.filter((comment) => { return comment.id !== action.payload.id })
	    case FETCH_COMMENTS:
	      return action.payload;
	    default:
	      return state;
	  }
}
