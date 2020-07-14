import React, { Component } from 'react'
import AboutPhotoInfo from './AboutPhotoInfo'
import AboutStatus from './AboutStatus';

 class HomeAbout extends Component {
    render() {
        return (
           <section className="about--part">
               <div className="about--content">
               <div className="container">
              <AboutPhotoInfo/>
              <AboutStatus/>
               </div>
               </div>
           </section>
        )
    }
}
export default HomeAbout