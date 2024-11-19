import React, { Component } from 'react'

import ThumbLng from '../assets/WordArt3.png'


// Use: onClick={this.blogSelector('1')}
class SkillsList extends Component {
  showDescription(num) {
    this.props.getDescription(num)
  }

  describer() {
    if (this.props.descript === '0') {
      return (
        <p className='skills-desc'>
          skills I bring to the table
        </p>
      )
    }
    if (this.props.descript === '1') {
      return (
        <p className='skills-desc'>
          ... and more
        </p>
      )
    }
  }

  SkillsSelector(skillsID) {
    this.props.selectSkills(skillsID)
  }

  render() {
    return (
      <div className='skills-head-index'>
        {this.describer()}
        <div className='skills-list'>
        <img className='skills-thumbnail'
          onMouseOver={this.showDescription.bind(this, '1')}
          onMouseOut={this.showDescription.bind(this, '0')}
          src={ThumbLng} alt='' />
        </div>
      </div>
    )
  }
}

export default SkillsList
