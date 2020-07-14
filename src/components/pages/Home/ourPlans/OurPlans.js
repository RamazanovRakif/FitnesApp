import React, { Component } from 'react';
import './OurPlans.scss';
import { FcCheckmark } from 'react-icons/fc';
// import { TiTimes } from 'react-icons/ti';
import UserConsumer from '../../../../context/context';
export default class OurPlans extends Component {
	render() {
		return (
			<UserConsumer>
				{(value) => {
					const { plans } = value;
					return (
						<section className="our__plans">
							<div className="our__plans__content section-gap">
								<div className="wrapper">
									<div className="header__title__full">
										<h4 className="header__title">
											<span className="sub-title ml-5">Choose A Plan</span>
											Our Plans
										</h4>
									</div>

									<div className="pricing__container">
										<div className="d-grid pricing__items__row">
											{plans.map((plan) => {
												return (
													<div className="pricing__item" key={plan.id}>
														<div className="pricing__item__content">
															<div className="pricing__item__content__top">
																<h4>{plan.name}</h4>
																<p>
																	${plan.price}
																	<span>/month</span>
																</p>
															</div>
															<div className="pricing__item__content__bottom">
																<div className="pricing__item__content__bottom__services mb-3">
																	<ul className="links mb-3">
																		{plan.services.map((service) => {
																		
																			return (
																				<li className="services_name">
																					<h6 className="nick_name">
																						{service}
																					</h6>
																					<div className="icon_type">
																						<span>
																							<FcCheckmark></FcCheckmark>
																						</span>
																					</div>
																				</li>
                                      );
                                      
																		})}
                                    
																	</ul>
																</div>

																<div className="read-more-btn text-align-center">
																	<a href="/" className="read-btn">
																		Get Started
																	</a>
																</div>
															</div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</section>
					);
				}}
			</UserConsumer>
		);
	}
}
