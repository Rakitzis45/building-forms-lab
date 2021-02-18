// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }
  
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props)
    this.setState({
      name: ''
    })
    console.log(this.state)
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChange(event)} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
