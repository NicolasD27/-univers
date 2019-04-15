/* eslint no-bitwise:off */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { fetchComments, deleteComment } from '../actions';
import Task from "./task"
import CommentForm from "./comment_form"


class CommentList extends Component {
  componentWillMount() {
    if (this.props.selectedTask) {
      this.props.fetchComments(this.props.selectedTask);
    } 
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTask !== this.props.selectedTask) {
      this.props.fetchComments(nextProps.selectedTask);
    }
  }

  handleDelete = (comment) => {
    console.log(comment.content)
    this.props.deleteComment(comment)
  }

  renderComment = (comment) => {
    return (
      <li key={comment.id}>      
          {comment.content}
          <em onClick={(e) => this.handleDelete(comment, e)}>delete</em>
      </li>
      
    );
  }

  render() {
    return (
      <div className="comments-container">
        
        <ul>

          {this.props.comments.map(this.renderComment)}
        </ul>
        <CommentForm selectedTask={this.props.selectedTask} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedTask: state.selectedTask,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComments, deleteComment }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
