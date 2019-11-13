import React, { Component } from 'react'
import axios from 'axios'

class Send extends Component {

  constructor() {
    super()
    this.state = {
      userTo: '',
      userFrom: 'username',
      message: '',
      emptyMessage: ''
    }
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    if(this.state.message.trim() != '' && this.state.userTo.trim() != '') {

      this.setState({emptyMessage: ''});
      axios.post("http://localhost:8080/api/msg/send", this.state)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })

    } else {
      this.setState({emptyMessage: "To: and Message: cannot be empty!"});
    }

  }

  render() {
    const { usr_to, usr_from, message } = this.state
    return(
      <div className="mainbody">
        <h2>SEND</h2>
        <form className="formFormat" onSubmit={ this.submitHandler }>
          <p className="errorMessage">{this.state.emptyMessage}</p>
          <h3>To:</h3>

          <div>
            <input type="text" name="userTo"
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            value={ usr_to } onChange={ this.changeHandler } />
          </div>

          <h3>Your Message:</h3>

          <div>
            <textarea
              type="text" className="messingInputFormat" name="message"
              value={ message } onChange={ this.changeHandler } />
          </div>

          <div>
            <button type="submit" >Send Message</button>
          </div>

        </form>
      </div>
    );
  }
}

export default Send
