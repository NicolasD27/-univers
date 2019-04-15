/* eslint no-bitwise:off */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { clearComments, createProject, fetchProjects, deleteProject } from "../actions"
import Modal from 'react-modal';

Modal.setAppElement('#task-app')
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ProjectList extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      name: ''
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    this.props.fetchProjects()
  }
  
  openModal() {
      this.setState({modalIsOpen: true});
    }

    // afterOpenModal() {
    //   // references are now sync'd and can be accessed.
    //   this.subtitle.style.color = '#ff0';
    // }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

  handleClick = () => {
    this.props.clearComments();
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.closeModal()
    this.props.createProject(this.state.name);
    this.setState({ name: ''}); // Reset message input
  }

  handleDelete = (project) => {
    this.props.deleteProject(project)
  }


  renderProject = (project) => {
    return (
        <li key={project.id}>
          <Link to={`${project.name}`}
            
            className={project.name === this.props.selectedProject ? 'active' : null}
            role="presentation"
            onClick={this.handleClick}
          >
            {project.name}
          </Link>
          <em onClick={(e) => this.handleDelete(project, e)}>delete</em>
        </li>
      
      
    );
  }

  render() {
    return (
      <div className="projects-container">
        
        <ul>
          {this.props.projects.map(this.renderProject)}
        </ul>
        <button onClick={this.openModal}>Create a new Project</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="overlay"
        >

          <h2 >Enter the name of the project</h2>
          
          
          <form onSubmit={this.handleSubmit}>
            <input
              ref={(input) => { this.messageBox = input; }}
              type="text"
              className="form-control"
              autoComplete="off"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
            <button onClick={this.closeModal}>Cancel</button>
            <button type="submit" >Create</button>
          </form>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearComments, createProject, fetchProjects, deleteProject }, dispatch);
}




export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
