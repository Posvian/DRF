import React from "react";


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', repo_link: '', users: props.users[0].id}
  }


  handleChange(event) {
    this.setState(
        {
          [event.target.name]: event.target.value
        }
    );
  }

  handleSubmit(event) {
    console.log(this.state.users)
    this.props.createProject(this.state.name, this.state.repo_link, this.state.users)
    event.preventDefault()
  }

  render() {
    return (
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className='form-group'>
            <label htmlFor='login'>Name</label>
            <input type='text' className='form-control' name='name'
            value={this.state.name} onChange={(event)=>this.handleChange(event)}/>
          </div>
          <div className='form-group'>
            <label htmlFor='repo_link'>Link on repozitory</label>
            <input type='text' className='form-control' name='repo_link'
            value={this.state.repo_link} onChange={(event)=>this.handleChange(event)}/>
          </div>
          <div className='form-group'>
            <label htmlFor='users'>Users</label>
            <select name='users' className='form-control'
                    onChange={(event)=>this.handleChange(event)}>
              {this.props.users.map((user) =>
              <option value={user.id}>
                {user.first_name}
              </option> )}
            </select>
          </div>
          <input type='submit' className='btn btn-primary' value='Save'/>
        </form>
    );
  }
}

export default ProjectForm