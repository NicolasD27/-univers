import React from 'react';
import ProjectList from '../containers/project_list';
import TaskList from '../containers/task_list';
import CommentList from '../containers/comment_list';

const App = (props) => {
  return (
    <div className="app">
      <ProjectList selectedProject={props.match.params.project} />
      <TaskList selectedProject={props.match.params.project} />
      <CommentList selectedProject={props.match.params.project} />
    </div>
  );
};

export default App;
