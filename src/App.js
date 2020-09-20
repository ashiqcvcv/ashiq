import React, { Component } from 'react';
import './App.css';
import Work from './Components/Works';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
const resumeData = require('./data/resumeData.json');

export class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        <Work data={resumeData.portfolio}/>
        <Contact data={resumeData.main}/>
        <Footer data={resumeData.main}/>
      </div>
    )
  }
}

export default App
