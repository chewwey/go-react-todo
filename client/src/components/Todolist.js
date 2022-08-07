import React, { Component } from 'react'
import Axios from 'axios'
import './Todolist.css'

class Todolist extends Component{

    handleClick(event){
        Axios.patch('http://localhost:4000/api/todos/' + event.target.value)
        };

    handleRemove(event) {
        Axios.delete('http://localhost:4000/api/todos/' + event.target.value + '/delete')
        };
        
    render(){
        return(
        <div>
            <br />
            <ul className="list-group">
                {this.props.todo.map((todo) => (
                 <li className="list-group-item" key={todo.id} >
                    {"\u00a0\u00a0"}{todo.title} and this is id {todo.id} and task is {todo.done.toString()}
                    <button type="button" className="btn" value={todo.id} onClick ={this.handleRemove} >
                    <i className="bi bi-trash-fill icon-red"></i>
                    </button>
                 </li>
                ))}
            </ul>
        </div>
        )
    }
}

export default Todolist