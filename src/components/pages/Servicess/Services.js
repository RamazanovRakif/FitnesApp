import React, { Component } from 'react'
import Banner from '../About/banner/Banner'
import ServiceCategory from './serviceCategory/ServiceCategory'
import OurPlans from '../Home/ourPlans/OurPlans'

export default class Services extends Component {
    render() {
        return (
            <div>
               <Banner value="Services"></Banner>
               <ServiceCategory/>
               <OurPlans/>
            </div>
        )
    }
}
