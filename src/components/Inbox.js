import React, { Component } from 'react'

class Inbox extends Component {

  constructor() {
    super()
    this.state = {
      receivedMessages: [],
      isLoaded: false
    }
  }

  async componentDidMount() {
    await fetch("http://localhost:8080/api/msg/received")
      .then(response => response.json())
      .then(json => this.setState({
        receivedMessages: json, isLoaded: true
      }));
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className="mainbody">
          <h2>Inbox</h2>
          Loading...
        </div>
      );
    } else {
      return (
        <div className="mainbody">
          <h2>INBOX</h2>
          {this.state.receivedMessages.map(message =>
            <div className="messageFormat">
              <h4>From:</h4>
              <p>{ message.usr_from     }</p>
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
}

export default Inbox
