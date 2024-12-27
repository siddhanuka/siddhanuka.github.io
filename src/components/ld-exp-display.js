import React, { Component } from 'react'

import ThumbMed from '../assets/e1.png'
import ThumbDell from '../assets/e4.png'
import ThumbNyu from '../assets/e2.png'


class ExpDisplay extends Component {
    showDescription(num) {
        this.props.getDescription(num)
    }

    describer() {
        if (this.props.descript === '0') {
            return (
                <p className='exp-desc'>
                    my work experience
                </p>
            )
        }
        if (this.props.descript === '1') {
            return (
                <p className='exp-desc'>
                    Strand Therapeutics Inc. . Software Engineer . June '23 - Dec '23 
                </p>
            )
        }
        if (this.props.descript === '2') {
            return (
                <p className='exp-desc'>
                    Allscripts LLP . Senior Software Engineer . May '18 - August '22
                </p>
            )
        }
        if (this.props.descript === '3') {
            return (
                <p className='exp-desc'>
                    Meditab . Back End Engineer . Jul '15 - Dec '18
                </p>
            )
        }
    }

    render() {
        return (
            <div className='exp-display'>
                {this.describer()}
                <div className='expthumbnail-box'>
                    <div className='first row'>
                        <div className='exprow-item'
                            onMouseOver={this.showDescription.bind(this, '1')}ˇ
                            onMouseOut={this.showDescription.bind(this, '0')}>
                            <a href='https://www.strandtx.com/' target='blank'>
                                <img className='expthumbnail' src={ThumbDell} alt='' />
                            </a>
                        </div>
                    </div>
                    <div className='second row'>
                        <div className='exprow-item'
                            onMouseOver={this.showDescription.bind(this, '2')}
                            onMouseOut={this.showDescription.bind(this, '0')}>
                            <a href='https://www.alterahealth.com/' target='blank'>
                                <img className='expthumbnail' src={ThumbNyu} alt='' />
                            </a>
                        </div>

                    </div>
                    <div className='third row'>
                        <div className='exprow-item'
                            onMouseOver={this.showDescription.bind(this, '3')}
                            onMouseOut={this.showDescription.bind(this, '0')}>
                            <a href='https://www.meditab.com' target='blank'>
                                <img className='expthumbnail' src={ThumbMed} alt='' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpDisplay
