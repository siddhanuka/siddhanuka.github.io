import React, { Component } from 'react';
import Exp from '../components/ld-exp'
import Header from '../components/ld-header'
import '../App.css';

class ExpView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            work: 'off',
            descript: '0',
            contact: 'off',
            exp: 'on',
            bio: 'a',
            skills: 'off'
        }

        this.getDescription = this.getDescription.bind(this)
        this.getInitialState = this.getInitialState.bind(this)
    }

    getInitialState() {
        this.setState({
            work: 'off',
            contact: 'off',
            exp: 'on',
            bio: 'a',
            skills: 'off'
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

                <Exp
                    skills={this.state.skills}
                    changeExp={this.changeExp}
                    descript={this.state.descript}
                    getDescription={this.getDescription}
                    exp={this.state.exp}
                />
            </div>
        );
    }
}

export default ExpView;
