import React, { Component } from 'react'

import Thumbmmc from '../assets/thumb-macrochef.png'
import Thumbltk from '../assets/thumb-ltk.png'
import Thumbcb from '../assets/thumb-cld.png'
import Thumbvwa from '../assets/thumb-url.webp'

class WorkDisplay extends Component {
  showDescription(num) {
    this.props.getDescription(num)
  }

  describer() {
    if (this.props.descript === '0') {
      return (
        <p className='proj-desc'>
          a selection of recent works
        </p>
      )
    }
    if (this.props.descript === '1') {
      return (
        <p className='proj-desc'>
          a smart food recommendation app built on AWS
        </p>
      )
    }
    if (this.props.descript === '2') {
      return (
        <p className='proj-desc'>
          a keyboard that operates using your own trained gestures
        </p>
      )
    }
    if (this.props.descript === '3') {
      return (
        <p className='proj-desc'>
          CICD automation with GCP Infrastructure-as-a-Code implementation
        </p>
      )
    }
    if (this.props.descript === '4') {
      return (
        <p className='proj-desc'>
          golang based URL shortener with Redis caching
        </p>
      )
    }
  }

  render() {
    return (
      <div className='work-display'>
        {this.describer()}
        <div className='thumbnail-box'>
          <div className='first row'>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '1')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='https://github.com/siddhanuka/meal-wise' target='blank'>
                <img className='thumbnail' src={Thumbmmc} alt=''/>
              </a>
              

            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '2')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='https://github.com/siddhanuka/gesture-keyboard' target='blank'>
                <img className='thumbnail' src={Thumbltk} alt=''/>
              </a>
              
            </div>
          </div>
          <div className='second row'>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '3')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='https://github.com/neucsye6225cloud' target='blank'>
                <img className='thumbnail' src={Thumbcb} alt=''/>
              </a>


            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '4')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='https://github.com/siddhanuka/simple-url-shortener-go' target='blank'>
                <img className='thumbnail' src={Thumbvwa} alt=''/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkDisplay
