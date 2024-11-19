import React, { Component } from 'react'

import Skills from '../components/ld-skills'
import Work from '../components/ld-work'
import Contact from '../components/ld-contact'
import Bio from '../components/ld-bio'
import Header from '../components/ld-header'
import Exp from '../components/ld-exp'
import '../App.css';

class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      work: 'off',
      descript: '0',
      contact: 'off',
      skills: 'off',
      bio: 'a',
      exp: 'off'
    }
    this.changeContact = this.changeContact.bind(this)
    this.changeWork = this.changeWork.bind(this)
    this.changeExp = this.changeExp.bind(this)
    this.changeToSkillsIndex = this.changeToSkillsIndex.bind(this)
    this.changeBio = this.changeBio.bind(this)
    this.getDescription = this.getDescription.bind(this)
    this.getInitialState = this.getInitialState.bind(this)
    this.selectSkills = this.selectSkills.bind(this)
  }

  changeWork(toggle) {
    this.setState({
      work: toggle,
    })
  }
  changeExp(toggle) {
    this.setState({
      exp: toggle,
    })
  }

  changeContact(toggle) {
    this.setState({
      contact: toggle,
    })
  }

  changeToSkillsIndex() {
    this.setState({
      skills: 'index',
    })
  }

  changeBio(toggle) {
    this.setState({
      bio: toggle,
    })
  }

  getInitialState() {
    this.setState({
      work: 'off',
      contact: 'off',
      skills: 'off',
      bio: 'a',
      exp:'off'
    })
  }

  getDescription(projectNum) {
    this.setState({
      descript: projectNum,
    })
  }

  selectSkills(skills) {
    this.setState({
      skills: skills,
    })
  }

  render() {
    return (
      <div className='App container'>
        <Header
          getInitialState={this.getInitialState}
        />

        <Work
          skills={this.state.skills}
          changeWork={this.changeWork}
          descript={this.state.descript}
          getDescription={this.getDescription}
          work={this.state.work}
        />

        <Exp
          skills={this.state.skills}
          changeExp={this.changeExp}
          descript={this.state.descript}
          getDescription={this.getDescription}
          exp={this.state.exp}
        />

        <Contact
          skills={this.state.skills}
          contact={this.state.contact}
          changeContact={this.changeContact}
          work={this.state.work}
        />

        <Bio
          bio={this.state.bio}
          skills={this.state.skills}
          changeBio={this.changeBio}
          work={this.state.work}
        />

        <Skills
          skills={this.state.skills}
          changeToSkillsIndex={this.changeToSkillsIndex}
          selectSkills={this.selectSkills}
          descript={this.state.descript}
          getDescription={this.getDescription}
          work={this.state.work}
        />
      </div>
    )
  }
}

export default HomeView
