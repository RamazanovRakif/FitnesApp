import React, { Component } from 'react';
import Slider from './mainSlider/Slider';
import Content from './gymContent/Content';
import HomeAbout from './homeAbout/HomeAbout';
import OurAdvantage from './ourAdvantage/OurAdvantage';
import PopularClasses from './popularClasses/PopularClasses';
import OurPlans from './ourPlans/OurPlans';
import Newsletter from './newsletter/Newsletter';
import Customers from './customers/Customers'


class Home extends Component {
	render() {
		return (
			<div>
				<Slider></Slider>
				<Content></Content>
				<HomeAbout></HomeAbout>
				<OurAdvantage></OurAdvantage>
				<PopularClasses></PopularClasses>
				<OurPlans></OurPlans>
				<Newsletter></Newsletter>
				<Customers></Customers>
			</div>
		);
	}
}
export default Home;
