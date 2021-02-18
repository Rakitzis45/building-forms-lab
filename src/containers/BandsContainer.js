import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({type: "ADD_BAND", band})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
