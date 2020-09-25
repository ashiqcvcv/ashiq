import React, { Component } from 'react'

export class About extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var profilepic = "images/" + this.props.data.image;
            var bio = this.props.data.bio;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var resumeDownload = this.props.data.resumedownload;
        }
        return (
            <section id="about">
                <div className="unslate_co--section" id="about-section">
                    <div className="container">
                        <div className="section-heading-wrap text-center mb-5">
                            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">About Me</span></h2>
                        </div>
                        <div className="row mt-5 justify-content-between">
                            <div className="col-lg-7 mb-5 mb-lg-0 col-sm-12">
                                <figure className="dotted-bg gsap-reveal-img ">
                                    <div className="three columns col-md-3">
                                        <img className="profile-pic" src={profilepic} alt="ashiq"/>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-lg-4 pr-lg-5">
                                <p className="lead gsap-reveal">{bio}</p>
                                <h3 className="mb-4 heading-h3"><span className="gsap-reveal">Contact</span></h3>
                                <p className="mb-4 gsap-reveal"><span>{name}</span><br />
                                    <span>{street}<br />
                                        {city} {state}, {zip}
                                    </span><br />
                                    <span><a>{phone}</a></span><br />
                                    <span><a>{email}</a></span></p>
                                <p className="gsap-reveal"><a href={resumeDownload} className="btn btn-outline-pill btn-custom-light">Download my CV</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About
