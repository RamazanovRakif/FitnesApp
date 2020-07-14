import React, { Component } from 'react';
import './OurTrainers.scss';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import trainer1 from '../../../../images/team1.jpg';
import UserConsumer from '../../../../context/context';
class OurTrainers extends Component {
	render() {
		return (
			<UserConsumer>
				{(value) => {
					const { trainers } = value;
					return (
						<section className="our_trainers">
							<div className="our_trainers_content section-gap">
								<div className="wrapper">
									<div className="header__title__full">
										<h4 className="header__title">
											<span className="sub-title ">Expert Team</span>
											Our Trainers
										</h4>
									</div>

									<section className="our_trainers_items d-grid ">
										{trainers.map((trainer) => {
											return (
												<section className="our_trainers_item text-center" key={trainer.id}>
													<section className="our_trainers_item_img">
														<a href="/">
															<img src={require(`../../../../images/${trainer.img}`)} className="img-responsive" alt="" />
														</a>
													</section>
													<section className="our_trainers_item_info">
														<h4 className="team_title">
															<span className="sub_title_team">{trainer.status}</span>
															<a href="/">{trainer.name}</a>
														</h4>
														<p>
															{trainer.text}
														</p>
														<ul className="team_icons d-flex justify-content-around text-center">
															<li className="team_icon read-more-btn">
																<a href="/" className="read-btn">
																	<span className="mr-1">
																		<FaFacebookF />
																	</span>
																	Facebook
																</a>
															</li>
															<li className="team_icon read-more-btn">
																<a href="/" className="read-btn">
																	<span className="mr-1">
																		<FaTwitter />
																	</span>
																	Twitter
																</a>
															</li>
														</ul>
													</section>
												</section>
											);
										})}
									</section>
								</div>
							</div>
						</section>
					);
				}}
			</UserConsumer>
		);
	}
}
export default OurTrainers;
