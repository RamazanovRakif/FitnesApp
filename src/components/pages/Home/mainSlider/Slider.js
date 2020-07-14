import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../mainSlider/Slider.css';
import image1 from '../../../../images/banner1.jpg';
import image2 from '../../../../images/banner2.jpg';
import image3 from '../../../../images/banner3.jpg';
import image4 from '../../../../images/banner4.jpg';
import UserConsumer from '../../../../context/context';
const Slider = () => {
	const params = {
		spaceBetween: 0,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	};
	return (
		<UserConsumer>
			{(value) => {
				const { sliders } = value;
				return (
					<Swiper {...params}>
						{sliders.map((slider) => {
							return (
								<li className="slider-item" key={slider.id}>
									<img src={require(`../../../../images/${slider.img}`)} alt="" />
								</li>
							);
						})}
					</Swiper>
				);
			}}
		</UserConsumer>
	);
};
export default Slider;
