import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ExpDisplay from './ld-exp-display'

class Exp extends Component {

    expToggle() {
        if (this.props.exp === 'off') {
            this.props.changeExp('on')
            console.log(this.props.exp)
        }
    }

    stateCheckExp() {
        if (this.props.skills !== 'off') {
            return null
        }
        if (this.props.exp === 'off') {
            return (
                <Link to='/exp'>
                    <div className='exp' onClick={this.expToggle.bind(this)}>
                        <h4 id='exp-text'>
                            EXPERIENCE
            </h4>
                    </div>
                </Link>
            )
        }
        if (this.props.exp === 'on') {
            return (
                <div className='exp-view' onClick={this.expToggle.bind(this)}>
                    <h4 id='exp-view-text'>
                    EXPERIENCE
                    </h4>
                    <ExpDisplay
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
                {this.stateCheckExp()}
            </div>
        )
    }
}

export default Exp
