import React, { Component } from 'react'

import gitHubLogo from '../assets/GitHub_Logo.png'
import linkedInLogo from '../assets/icons8-LinkedIn-48.png'

class Contact extends Component {
  contactToggle() {
    if (this.props.contact === 'off') {
      this.props.changeContact('on')
    }
    if (this.props.contact === 'on') {
      this.props.changeContact('off')
    }
  }

  stateCheckContact() {
    if (this.props.skills !== 'off' || this.props.work !== 'off') {
      return null
    }
    if (this.props.contact === 'off') {
      return (
        <div className='contact' onClick={this.contactToggle.bind(this)}>
          <h4 id='contact-off'>
            CONTACT
          </h4>
        </div>
      )
    }
    if (this.props.contact === 'on') {
      return (
        <div className='contact'>
          <div className='contact-items'>
            <h4 id='contact-mail'>
              sid.dhanuka@gmail.com
            </h4>
            <div id='logos'>
              <a href='https://github.com/siddhanuka' target='blank'>
                <img src={gitHubLogo} className='icon' id='gh-icon' alt='n'>
                </img>
              </a>
              <a href='https://www.linkedin.com/in/siddharth-dhanuka/'
                target='blank'>
                <img src={linkedInLogo} className='icon' id='li-icon' alt='n'>
                </img>
              </a>

            </div>
          </div>
          </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.stateCheckContact()}
      </div>
    )
  }
}

export default Contact
