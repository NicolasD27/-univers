import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {createComment} from "../actions"

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createComment(this.props.selectedTask, this.state.value);
    this.setState({ value: '' }); // Reset message input
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          className="form-control"
          autoComplete="off"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentForm);