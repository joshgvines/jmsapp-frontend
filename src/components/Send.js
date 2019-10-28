import React, { Component } from 'react'

class Send extends Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FromData(event.target);

    fetch('http://localhost:8080/api/msg/sent', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return(
      <div className="mainbody">
        <h2>SEND</h2>
        <form className="formFormat" onSubmit={this.handleSubmit}>
          <h3>To:</h3>

          <div>
            <input type="text" name="usr_to" value={this.state.to} />
          </div>

          <div>
            <input type="text" name="usr_from" value={this.state.from} />
          </div>

          <h3>Your Message:</h3>

          <div>
            <textarea
              className="messingInputFormat"
              name="message"
              value={this.state.msg} />

          </div>

          <div>
            <button>Send Message</button>
          </div>

        </form>
      </div>
    );
  }
}

export default Send
