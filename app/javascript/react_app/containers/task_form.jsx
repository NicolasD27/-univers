import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {createTask} from "../actions"
import 'flatpickr/dist/themes/material_green.css'
import Flatpickr from 'react-flatpickr'
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '' ,
      priority: '',
      deadline: new Date()
    };
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  }
  handleChangePriority = (event) => {
    this.setState({ priority: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.props.selectedProject, this.state.name, this.state.deadline, this.state.priority);
    this.setState({ name: '', deadline: new Date(), priority: "" }); // Reset message input
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          className="form-control"
          autoComplete="off"
          value={this.state.name}
          onChange={this.handleChangeName}
        />
        <Flatpickr data-enable-time
        value={this.state.deadline}
        onChange={date => { this.setState({deadline}) }} />
        <input
          ref={(input) => { this.messageBox = input; }}
          type="number"
          className="form-control"
          autoComplete="off"
          value={this.state.priority}
          onChange={this.handleChangePriority}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTask }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentForm);