import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import projectsReducer from './reducers/projects_reducer';
import tasksReducer from './reducers/tasks_reducer';
import commentsReducer from './reducers/comments_reducer';
import selectedTaskReducer from './reducers/selected_task_reducer';

const chatContainer = document.getElementById('task-app');
const initialState = {
  tasks: [],
  projects: [ 'general', 'react', 'paris' ], // TODO: get that from Rails DB.
};

export default initialState

const reducers = combineReducers({
  selectedTask: selectedTaskReducer,
  tasks: tasksReducer,
  comments: commentsReducer,
  projects: projectsReducer
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/projects/:project" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  chatContainer
); 
console.log(chatContainer)