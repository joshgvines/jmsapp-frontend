import React, { Component } from 'react'
import axios from 'axios'

class Sent extends Component {

  constructor() {
    super()
    this.state = {
      sentMessages: [],
      isLoaded: false
    }
  }

  async componentDidMount() {
    axios.get("http://localhost:8080/api/msg/sent", {
      params: {
        username: "username"
      }
    }).then(response => {
        this.setState({ sentMessages: response.data });
    })
  }

  render() {
      return (
        <div className="mainbody">
          <h2>SENT</h2>
          {this.state.sentMessages.map(message =>
            <div className="messageFormat">
              <h4>{ message.id       }</h4>
              <h4>Sent To:</h4>
              <p> { message.userTo   }</p>
              <h4>Message:</h4>
              <p> { message.message  }</p>
              <br></br>
            </div>
          )}
          <button onClick={ () => this.componentDidMount() } >Refresh</button>
        </div>
      );
    }

}

export default Sent
