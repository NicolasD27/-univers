import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {selectTask, checkTask, deleteTask} from "../actions"

class Task extends Component {
  handleChange = () => {
    this.props.checkTask(this.props.task)
  }
  handleClick = () => {
    this.props.selectTask(this.props.task)
  }
  handleDelete = ()  => {
    this.props.deleteTask(this.props.task)
  }

  render () {
    return (
      <div className="task">
        <input type="checkbox" defaultChecked={this.props.task.done} onChange={this.handleChange}/>
        <h3 onClick={this.handleClick}>{this.props.task.name}</h3>
        <em onClick={this.handleDelete}>delete</em>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTask, checkTask, deleteTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);