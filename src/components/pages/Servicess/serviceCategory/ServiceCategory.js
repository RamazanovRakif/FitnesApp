import React, { Component } from 'react';
import './ServiceCategory.scss';
import image1 from '../../../../images/grid4.jpg';
import UserConsumer from '../../../../context/context';
class ServiceCategory extends Component {
	render() {
		return (
			<UserConsumer>
				{(value) => {
					const { serviceCategory } = value;
					return (
						<section className="services">
							<section className="services_content section-gap">
								<div className="wrapper">
									<section className="services_content_items d-grid">
										{serviceCategory.map((category) => {
											return (
												<section className="services_content_items_container">
													<div className="services_content_item" key={category.id}>
														<div className="services_content_item_image">
															<a href="/">
																<img src={require(`../../../../images/${category.img}`)} alt="" />
															</a>
														</div>
														<div className="services_content_item_info">
															<h4 className="services_content_item_info_title">
																{category.name}
															</h4>
															<p className="services_content_item_info_text">
																{category.text}
															</p>
															<div className="read-more-btn mb-3">
																<a href="/" className="read-btn">
																	Read More
																</a>
															</div>
														</div>
													</div>
												</section>
											);
										})}
									</section>
								</div>
							</section>
						</section>
					);
				}}
			</UserConsumer>
		);
	}
}
export default ServiceCategory;
