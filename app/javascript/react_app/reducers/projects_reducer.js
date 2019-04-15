import { FETCH_PROJECTS, PROJECT_POSTED, PROJECT_DELETED } from '../actions';
export default function(state = [], action) {
  	switch (action.type) {
	    case FETCH_PROJECTS:
	      return action.payload;
	    case PROJECT_POSTED:
		    const copiedState = state.slice(0);
		    copiedState.push(action.payload);
		    return copiedState;
	    case PROJECT_DELETED:
		    return state.filter((task) => { return task.id !== action.payload.id });
	    default:
	      return state;
  }
}