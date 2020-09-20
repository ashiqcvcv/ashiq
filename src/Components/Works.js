import React, { Component } from 'react';

export class Works extends Component {
    render() {
        if (this.props.data) {
            var projects = this.props.data.projects.map(function (projects) {
                var projectImage = 'images/portfolio/' + projects.image;
                return (
                    <div className="columns">
                        <div key={projects.title} className="portfolio-item">
                            <div className="item-wrap">
                                <a href={projects.url} target="_blank" rel="noopener noreferrer" title={projects.title}>
                                    <img alt={projects.title} src={projectImage} />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>{projects.title}</h5>
                                            <p>{projects.category}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='align-center'>
                                <a href={projects.gitLink}>Go to <i className="fa fa-github"></i></a>
                            </div>
                            <div className='align-center'>
                                <a href={projects.url}>Go to Website<i className="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return (
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check out Some of My Works</h1>
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                {projects}
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

export default Works;
