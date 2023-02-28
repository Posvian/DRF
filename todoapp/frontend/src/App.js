import React from "react";
import axios from "axios"
import logo from './logo.svg';
import './App.css';

import UserList from "./components/User";
import Menu from "./components/menu";
import Footer from "./components/footer";
import ProjectList from "./components/Project";
import TODOList from "./components/todo";
import NotFound from "./components/NotFound";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import NotFound404 from "./components/NotFound";


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        'users':[],
        'projects': [],
        'todo': []
      }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
        this.setState(
            {
                'users': response.data.results
        }
        )}).catch(error => console.log(error))
      axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
        this.setState(
            {
                'projects': response.data.results
        }
        )}).catch(error => console.log(error))
      axios.get('http://127.0.0.1:8000/api/todo/').then(response => {
        this.setState(
            {
                'todo': response.data.results
        }
        )}).catch(error => console.log(error))
    }

    render() {
    return (
        <div>

            <BrowserRouter>
              < Menu/>
              <Switch>
              <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
              <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
              <Route exact path='/todo' component={() => <TODOList todo={this.state.todo}/>}/>
              <Route component={NotFound404}/>
              </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
    );
  }
}

export default App;
