import React, { Component } from 'react'

export class Resume extends Component {

    render() {
        if (this.props.data) {
            var education = this.props.data.education.map(function (education) {
                return <div key={education.school}><h3>{education.school}</h3>
                    <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                    <p>{education.description}</p></div>
            })
            var myskills = this.props.data.skills.map(function (skills) {
                return (
                    <div className="columns">
                        <div className="counter-v1 text-center item-wrap skillpad portfolio-item">
                            <span className="number-wrap">
                                <span className="number number-counter"> {skills.level} </span>
                                <span className="append-text">%</span>
                            </span>
                            <span className="counter-label"> {skills.name} </span>
                        </div>
                    </div>
                )

            })
        }
        return (
            <section id="resume">

                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container skill-bg">
                    <div className="text-center mb-5">
                    </div>
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h2 className="skillheading text-center"><span className="gsap-reveal">My Skills</span></h2>
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                {myskills}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Resume
