import React, { Component } from 'react'
import Banner from './banner/Banner'
import HomeAbout from '../Home/homeAbout/HomeAbout'
import OurAdvantage from '../Home/ourAdvantage/OurAdvantage'
import OurTrainers from './ourTrainers/OurTrainers'

export default class About extends Component {
    render() {
        return (
            <div>
             <Banner value="About Us"/>
             <HomeAbout/>
             <OurAdvantage/>
             <OurTrainers/>
            </div>
        )
    }
}
