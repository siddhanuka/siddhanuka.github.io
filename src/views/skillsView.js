import React, { Component } from 'react';

import Skills from '../components/ld-skills'
import Header from '../components/ld-header'
import '../App.css';

class SkillsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      work: 'off',
      descript: '0',
      contact: 'off',
      skills: 'index',
      bio: 'a',
    }
    this.getDescription = this.getDescription.bind(this)
    this.getInitialState = this.getInitialState.bind(this)
    this.selectSkills = this.selectSkills.bind(this)
  }

  getInitialState() {
    this.setState({
      work: 'off',
      contact: 'off',
      skills: 'off',
      bio: 'a',
    })
  }

  selectSkills(skills) {
    this.setState({
      skills: skills,
    })
  }
  getDescription(projectNum) {
    this.setState({
      descript: projectNum,
    })
  }

  render() {
    return (
      <div className='App container'>
        <Header
          getInitialState={this.getInitialState}
        />

        <Skills
          skills={this.state.skills}
          changeToSkillsIndex={this.changeToSkillsIndex}
          selectSkills={this.selectSkills}
          work={this.state.work}
          descript={this.state.descript}
          getDescription={this.getDescription}
        />
      </div>
    );
  }
}

export default SkillsView;
