import React, { Component } from 'react'
import Axios from 'axios'
import './Addtodo.css'

class Addtodo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            body: ''
        };
        this.subjectHandle = this.subjectHandle.bind(this);
        this.bodyHandle = this.bodyHandle.bind(this);
      }
    subjectHandle(event) {
        this.setState({subject: event.target.value});
      }

    bodyHandle(event) {
        this.setState({body: event.target.value});
      }
    sendRequest(event){
      event.preventDefault();
      Axios.post('http://localhost:4000/api/todos',{
        "title": this.state.subject,
        "body": this.state.body
      }).then(res => console.log("Posted", res))
      this.setState({subject: ''});
      this.setState({body: ''});
    }

    render(){
        return(
          <center>
              <form onSubmit={this.handleSubmit}>
              <label>
                <p>subject</p>
                <input type="text"  value={this.state.subject} onChange={this.subjectHandle}/>
                <br />
                <p>body </p>
                <input type="text" value={this.state.body} onChange={this.bodyHandle} />
              </label>
              <br />
              <input type="submit" value="Submit" className="button" onClick={(e) => this.sendRequest(e)}/>
            </form>
          </center>
        )
    }
}

export default Addtodo;
