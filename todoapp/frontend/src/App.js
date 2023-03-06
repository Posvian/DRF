import React from "react";
import axios from "axios"
import logo from './logo.svg';
import './App.css';

import UserList from "./components/User";
import Menu from "./components/menu";
import Footer from "./components/footer";
import ProjectList from "./components/Project";
import TODOList from "./components/todo";
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import NotFound404 from "./components/NotFound";
import LoginForm from "./components/Auth";
import Cookies from "universal-cookie";


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        'users':[],
        'projects': [],
        'todo': [],
        'token':'',
      }
    }

    load_data() {
      const headers = this.get_headers()
      axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(response => {
        this.setState(
            {
                'users': response.data.results
        }
        )}).catch(error => console.log(error))
      axios.get('http://127.0.0.1:8000/api/projects/', {headers}).then(response => {
        this.setState(
            {
                'projects': response.data.results
        }
        )}).catch(error => console.log(error))
      axios.get('http://127.0.0.1:8000/api/todo/', {headers}).then(response => {
        this.setState(
            {
                'todo': response.data.results
        }
        )}).catch(error => console.log(error))
    }

    set_token(token){
      // localStorage.setItem('token', token)
      // let item = localStorage.getItem('token')
      const cookies = new Cookies()
      cookies.set('token', token)
      this.setState({'token':token}, ()=>this.load_data())

    }

    get_token(username, password) {
      axios.post('http://127.0.0.1:8000/api-token-auth/',
          {'username':username, 'password':password})
          .then(response => {
              this.set_token(response.data['token'])
        }).catch(error => alert('Не верный логин или пароль!!!'))

    }


    is_auth(){
      return !!this.state.token
    }
    get_headers(){
      let headers = {
        'Content-Type': 'application/json'
      }

      if(this.is_auth()){
        headers['Authorization'] = `Token ${this.state.token}`
      }

      return headers
    }

    logout(){
      this.set_token('')
    }

    get_token_from_cookies(){
      const cookies = new Cookies()
      const token = cookies.get('token')
      this.setState({'token':token}, ()=>this.load_data())
    }

    componentDidMount() {
        this.get_token_from_cookies()
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
                <Route exact path='/login' component={()=><LoginForm get_token={(username,password) => this.get_token(username, password)}/>}></Route>
                <Redirect from={'/users'} to={'/'}/>
                <Route component={NotFound404}/>
              </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
    );
  }
}

export default App;
