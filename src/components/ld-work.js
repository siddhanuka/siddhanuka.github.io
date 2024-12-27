import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import WorkDisplay from './ld-work-display'

class Work extends Component {

  workToggle() {
    if (this.props.work === 'off') {
      this.props.changeWork('on')
      console.log(this.props.work)
    }
  }

  stateCheckWork() {
    if (this.props.skills !== 'off') {
      return null
    }
    if (this.props.work === 'off') {
      return (
        <Link to='/projects'>
          <div className='work' onClick={this.workToggle.bind(this)}>
            <h4 id='work-text'>
              PROJECTS
            </h4>
          </div>
        </Link>
      )
    }
    if (this.props.work === 'on') {
      return (
        <div className='work-view' onClick={this.workToggle.bind(this)}>
          <h4 id='work-view-text'>
            PROJECTS
          </h4>
          <WorkDisplay
            descript={this.props.descript}
            getDescription={this.props.getDescription}
          />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.stateCheckWork()}
      </div>
    )
  }
}

export default Work
