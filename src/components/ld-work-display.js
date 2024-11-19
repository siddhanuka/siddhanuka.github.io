import React, { Component } from 'react'

import Thumbmmc from '../assets/thumb-macrochef.png'
import Thumbnyf from '../assets/thumb-nyfp.png'
import Thumbltk from '../assets/thumb-ltk.png'
import Thumbcb from '../assets/thumb-cb.png'
import Thumbvwa from '../assets/thumb-vwa.png'
import Thumbhd from '../assets/thumb-hd.png'

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
          Big Data Analytics: analysis of new york film permits and its effect on demographic of the area 
        </p>
      )
    }
    if (this.props.descript === '4') {
      return (
        <p className='proj-desc'>
          go ahead and say hi to my chatbot for table reservation
        </p>
      )
    }
    if (this.props.descript === '5') {
      return (
        <p className='proj-desc'>
          check out the weather in a minimalistic weather app
        </p>
      )
    }
    if (this.props.descript === '6') {
      return (
        <p className='proj-desc'>
          computer vision system that detects humans in an image
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
              <a href='https://www.youtube.com/watch?v=0IPpJAcWXtQ' target='blank'>
                
                <img className='thumbnail' src={Thumbmmc} alt=''/>
              </a>
              

            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '2')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='https://www.youtube.com/watch?v=P9Sa7lldHF8' target='blank'>
                <img className='thumbnail' src={Thumbltk} alt=''/>
              </a>
              

            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '3')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='https://github.com/vvvirenyu/NYC-film-permits/blob/master/PBDA_Final_Project_Presentation.pdf' target='blank'>
                <img className='thumbnail' src={Thumbnyf} alt=''/>
              </a>

            </div>
          </div>
          <div className='second row'>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '4')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='http://ccassignment01.s3.amazonaws.com/index.html' target='blank'>
                <img className='thumbnail' src={Thumbcb} alt=''/>
              </a>


            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '5')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='https://vvvirenyu.github.io/vanilla-weather-app' target='blank'>
                <img className='thumbnail' src={Thumbvwa} alt=''/>
              </a>
              

            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '6')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='https://github.com/vvvirenyu/Human-Detection-HOG-LBP-/blob/master/cv2_vsr266.pdf' target='blank'>
                <img className='thumbnail' src={Thumbhd} alt=''/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkDisplay
