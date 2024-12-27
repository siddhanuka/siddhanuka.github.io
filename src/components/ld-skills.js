import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SkillsList from './ld-skills-list'
import SkillsDisplay from './ld-skills-display'

class Skills extends Component {
  skillsToggle() {
    if (this.props.skills === 'off') {
      this.props.changeToSkillsIndex()
    }
  }

  stateCheckSkills() {
    if (this.props.skills === 'off' && this.props.work === 'off') {
      return (
        <Link to='/skills'>
          <div className='skills-head' onClick={this.skillsToggle.bind(this)}>
            <h4 id='skills-head-text'>
              SKILLS
            </h4>
          </div>
        </Link>
      )
    }
    if (this.props.skills === 'index') {
      return (
        <div className='skills-index'>
          <h4 id='skills-head-index'>
          SKILLS
          </h4>
          <SkillsList
            skills={this.props.skills}
            selectSkills={this.props.selectSkills}
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
        {this.stateCheckSkills()}
      </div>
    )
  }
}

export default Skills
