import React, { Component, createContext } from 'react';
const UserContext = createContext();

export class UserProvider extends Component {
	state = {
		sliders: [
			{
				id: 1,
				img: 'banner1.jpg',
			},
			{
				id: 2,
				img: 'banner2.jpg',
			},
			{
				id: 3,
				img: 'banner3.jpg',
			},
			{
				id: 4,
				img: 'banner4.jpg',
			},
		],
		customers: [
			{
				id: 1,
				name: 'Fiona Williams',
				img: 'c1.jpg',
				description:
					'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit.Ea consequuntur illum facere.',
			},
			{
				id: 2,
				name: 'Mark Finch',
				img: 'c2.jpg',
				description:
					'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit.Ea consequuntur illum facere.',
			},
			{
				id: 3,
				name: 'Laura Sten',
				img: 'c3.jpg',
				description:
					'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit.Ea consequuntur illum facere.',
			},
		],

		plans: [
			{
				id: 1,
				name: 'Light Plan',
				price: 35,
				services: ['Gym', 'Sauna', 'Fitness', 'Massage'],
			},
			{
				id: 2,
				name: 'Advanced Plan',
				price: 75,
				services: ['Gym', 'Sauna', 'Fitness', 'Massage'],
			},
			{
				id: 3,
				name: 'Powerful Plan',
				price: 95,
				services: ['Sauna', 'Sauna', 'Fitness', 'Massage'],
			},
		],

		gymContent: [
			{
				id: 1,
				title: 'Sit Ups',
				img: 'grid1.jpg',
			},
			{
				id: 2,
				title: 'Bodybuilding',
				img: 'grid2.jpg',
			},
			{
				id: 3,
				title: 'Lifting Barbell',
				img: 'grid3.jpg',
			},
			{
				id: 4,
				title: 'Raising Dumbbells',
				img: 'grid4.jpg',
			},
		],
		ourAdvantage: [
			{
				id: 1,
				title: 'Flexibility and patience',
				text: 'Vivamus a ligula quam. Ut blandit eu leo non suscipit. Duis feugiat tortor sed.',
      },
      {
				id: 2,
				title: 'Experienced trainers',
				text: 'Vivamus a ligula quam. Ut blandit eu leo non suscipit. Duis feugiat tortor sed.',
      },
      {
				id: 3,
				title: 'Free trial session',
				text: 'Vivamus a ligula quam. Ut blandit eu leo non suscipit. Duis feugiat tortor sed.',
      },
      {
				id: 4,
				title: 'Quality and security',
				text: 'Vivamus a ligula quam. Ut blandit eu leo non suscipit. Duis feugiat tortor sed.',
			},
		],
		aboutStatus: [
			{
				id: 1,
				count: 645,
				title: 'batches',
				icon: '<TiLightbulb />',
			},

			{
				id: 2,
				count: 563,
				title: 'SATISFIED CLIENTS',
				icon: '<AiOutlineHeart/>',
			},
			{
				id: 3,
				count: 1145,
				title: 'AWARDS',
				icon: '<FaShieldAlt/>',
			},
			{
				id: 4,
				count: 1045,
				title: 'HAPPY TRAINERS',
				icon: '<FiSmile/>',
			},
		],

		trainers: [
			{
				id: 1,
				name: 'Anna Delphan',
				status: 'Trainer',
				text: "Lorem Ipsum has been the industry's standard since the 1500s.",
				img: 'team1.jpg',
			},
			{
				id: 2,
				name: 'Daniel Doe',
				status: 'Trainer',
				text: "Lorem Ipsum has been the industry's standard since the 1500s.",
				img: 'team2.jpg',
			},
			{
				id: 3,
				name: 'Steven Smith',
				status: 'Trainer',
				text: "Lorem Ipsum has been the industry's standard since the 1500s.",
				img: 'team3.jpg',
			},
		],

		serviceCategory: [
			{
				id: 1,
				name: 'Studio Classes',
				text: 'Vivamus a ligula quam. Ut blandit eu leo non suscipit. Duis feugiat tortor sed.',
				img: 'grid4.jpg',
			},
			{
				id: 2,
				name: 'Cardio Fitness',
				text: 'Vivamus a ligula quam. Ut blandit eu leo non suscipit. Duis feugiat tortor sed.',
				img: 'grid5.jpg',
			},
			{
				id: 3,
				name: 'Personal Training',
				text: 'Vivamus a ligula quam. Ut blandit eu leo non suscipit. Duis feugiat tortor sed.',
				img: 'grid6.jpg',
			},
			{
				id: 4,
				name: 'Body Combat',
				text: 'Vivamus a ligula quam. Ut blandit eu leo non suscipit. Duis feugiat tortor sed.',
				img: 'grid1.jpg',
			},
			{
				id: 5,
				name: 'Studio cycling',
				text: 'Vivamus a ligula quam. Ut blandit eu leo non suscipit. Duis feugiat tortor sed.',
				img: 'grid2.jpg',
			},
			{
				id: 6,
				name: 'Strength training',
				text: 'Vivamus a ligula quam. Ut blandit eu leo non suscipit. Duis feugiat tortor sed.',
				img: 'grid3.jpg',
			},
		],
	};
	render() {
		return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
	}
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;
