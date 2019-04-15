import { FETCH_TASKS, TASK_POSTED, TASK_DELETED } from '../actions';
export default function(state = [], action) {
  	switch (action.type) {
	    case FETCH_TASKS:
	      return action.payload;
	    case TASK_POSTED:
		    const copiedState = state.slice(0);
		    copiedState.push(action.payload);
		    return copiedState;
	    case TASK_DELETED:
		    return state.filter((task) => { return task.id !== action.payload.id });
	    default:
	      return state;
  }
}
