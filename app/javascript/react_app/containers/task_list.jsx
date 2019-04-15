/* eslint no-bitwise:off */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { fetchTasks } from '../actions';
import Task from "./task"
import TaskForm from "./task_form"


class TaskList extends Component {
  componentWillMount() {
    this.props.fetchTasks(this.props.selectedProject);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedProject !== this.props.selectedProject) {
      this.props.fetchTasks(nextProps.selectedProject);
    }
  }

  renderTask = (task) => {
    return (
      <li key={task.id}>      
          <Task task={task} />
      </li>
      
    );
  }

  render() {
    console.log(this.props.tasks)
    return (
      <div className="tasks-container">
        
        <ul>

          {this.props.tasks.map(this.renderTask)}
        </ul>
        <TaskForm selectedProject={this.props.selectedProject} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
