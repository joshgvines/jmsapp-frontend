import React, { Component } from 'react'

class Sent extends Component {

  constructor() {
    super()
    this.state = {
      sentMessages: [],
      isLoaded: false,
    }
  }

  async componentDidMount() {
    await fetch("http://localhost:8080/api/msg/sent")
      .then(response => response.json())
      .then(json => this.setState({
        sentMessages: json, isLoaded: true
      }));
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className="mainbody">
          <h2>SENT</h2>
          Loading...
          <button onClick={ () => this.componentDidMount() } >Refresh</button>
        </div>
      )
    } else {
      return (
        <div className="mainbody">
          <h2>SENT</h2>
          {this.state.sentMessages.map(message =>
            <div className="messageFormat">
              <h4>{ message.id       }</h4>
              <h4>Sent To:</h4>
              <p> { message.usr_to   }</p>
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
}

export default Sent
