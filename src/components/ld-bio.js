import React, { Component } from 'react'

class Bio extends Component {
  bioToggle() {
    if (this.props.bio === 'a') {
      this.props.changeBio('b')
    }
    if (this.props.bio === 'b') {
      this.props.changeBio('c')
    }
    if (this.props.bio === 'c') {
      this.props.changeBio('d')
    }
    if (this.props.bio === 'd') {
      this.props.changeBio('a')
    }
    console.log(this.props.bio)
  }

  stateCheckBio() {
    if (this.props.skills !== 'off' || this.props.work !== 'off') {
      return null
    }
    if (this.props.bio === 'a') {
      return (
        <div className='bio' onClick={this.bioToggle.bind(this)}>
          <h4 id='bio-text'>
            Golang & Containerization Alchemist, transforming abstract ideas
            into software, leveraging ingenious solutions that defy conventions;
            constantly pushing boundaries in the technology realm
          </h4>
          <h3>
            {' >>>'}
          </h3>
        </div>
      )
    }
    if (this.props.bio === 'b') {
      return (
        <div className='bio' onClick={this.bioToggle.bind(this)}>
          <h4 id='bio-text'>
            Streaming Data Wizard, Computer-Vision Visionary, and trivia
            savant; dazzling colleagues with obscure facts during well-deserved breaks
          </h4>
          <h3>
            {' >>>'}
          </h3>
        </div>
      )
    }
    if (this.props.bio === 'c') {
      return (
        <div className='bio' onClick={this.bioToggle.bind(this)}>
          <h4 id='bio-text'>
            Linux enthusiast, skier and an aspiring music producer.
            a motivated individual and teammate; a provider of
            comic relief
          </h4>
          <h3>
            {' >>>'}
          </h3>
        </div>
      )
    }
    if (this.props.bio === 'd') {
      return (
        <div className='bio' onClick={this.bioToggle.bind(this)}>
          <h4 id='bio-text'>
            Avid reader, Socratic enquirer and student
            of many disciplines; a pragmatic realist ready and able
            to manifest positive contributions
          </h4>
          <h3>
            {' >>>'}
          </h3>
        </div>
      )
    }

  }
  
  render() {
    return (
      <div>
        {this.stateCheckBio()}
      </div>
    )
  }
}

export default Bio
