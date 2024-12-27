import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <Link to='/'>
        <div className='header' onClick={this.props.getInitialState}>
          <h1 id='name' >SIDDHARTH DHANUKA</h1>
        </div>
      </Link>
    )
  }
}

export default Header
