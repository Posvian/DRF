import React from "react";


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: 0, text: '', user: 0, active: true}
  }


  handleChange(event) {
    this.setState(
        {
          [event.target.name]: event.target.value
        }
    );
  }

  handleSubmit(event) {
    this.props.createTodo(this.state.project, this.state.text, this.state.user, this.state.active)
    event.preventDefault()
  }

  render() {
    return (
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className='form-group'>
            <label htmlFor='project'>Project</label>
            <select name='project' className='form-control'
                    onChange={(event)=> this.handleChange(event)}>
              {this.props.projects.map((project) =>
              <option value={project.id}>
                {project.name}
              </option> )}
            </select>
          </div>
          {/*<div className='form-group'>*/}
          {/*  <label htmlFor='project'>Project</label>*/}
          {/*  <input type='number' className='form-control' name='project'*/}
          {/*  value={this.state.project} onChange={(event)=>this.handleChange(event)}/>*/}
          {/*</div>*/}
          <div className='form-group'>
            <label htmlFor='text'>Text</label>
            <input type='text' className='form-control' name='text'
            value={this.state.text} onChange={(event)=>this.handleChange(event)}/>
          </div>
          <div className='form-group'>
            <label htmlFor='user'>User</label>
            <select name='user' className='form-control'
                    onChange={(event)=>this.handleChange(event)}>
              {this.props.users.map((user) =>
              <option value={user.id}>
                {user.username}
              </option> )}
            </select>
          </div>
          <input type='submit' className='btn btn-primary' value='Save'/>
        </form>
    );
  }
}

export default TodoForm