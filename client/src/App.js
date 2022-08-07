import './App.css';
import Header from './components/Header';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';
import React, { Component } from "react";


export const URL = "http://localhost:4000/api/todos"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 1,
        title: "cool",
        done: false,
        body: "something"
      }
      ],
      isLoading: false,
      hasError : false
    };
  }

  
  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(res => this.setState({todos: res}))
    .catch(res => this.setState({hasError: true}))
  }

  componentDidUpdate(prevProps,prevState){
    if(this.state.todos !== prevState.todos){
    fetch(URL)
    .then(res => res.json())
    .then(res => this.setState({todos: res}))
    }
  }

  render(){
    return(
      <div>
        <Header />
        <Addtodo />
        <Todolist todo={this.state.todos}/>
      </div>
    )  
  }
}

export default App;
