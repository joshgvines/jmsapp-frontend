import React, { Component } from 'react'
import axios from 'axios'

class Inbox extends Component {

  constructor() {
    super()
    this.state = {
      myUsername: 'username',
      receivedMessages: [],
      isLoaded: true
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/msg/received", {
      params: {
        username: "username"
      }
    }).then(response => {
      this.setState({ receivedMessages: response.data });
    })
  }

  render() {
      return (
        <div className="mainbody">
          <h2>INBOX</h2>
          {this.state.receivedMessages.map(message =>
            <div className="messageFormat">
              <h4>From:</h4>
              <p>{ message.userFrom  }</p>
              <h4>Message:</h4>
              <p> { message.message  }</p>
              <button>Reply</button>
            </div>
          )}
          <button onClick={ () => this.componentDidMount() } >Refresh</button>
        </div>
      );
    }
}

export default Inbox
