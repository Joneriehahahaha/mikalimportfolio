// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Capstone Project',
		category: 'Web Application',
		img: require('@/assets/images/COOP.png'),
		link: '/projects/single-project'
	},
	{
		id: 2,
		title: 'LGU Lagon Office Cordova',
		category: 'Web Application',
		img: require('@/assets/images/lagon.jpg'),
		link: '/projects/doubleproject',
		projectDetails: {
			singleProjectHeader: {
				singleProjectTitle: 'LGU Lagon Office Cordova',
				singleProjectDate: 'January 2025',
				singleProjectTag: 'Daphne Mae A. Lagon',
			},
			clientHeading: 'About LGU Lagon Cordova',
			companyInfos: [
				{
					id: 1,
					title: 'Company',
					details: 'LGU Lagon Office Cordova',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Work at LGU Lagon Office Cordova',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://idl-lagon.com',
				},
				{
					id: 4,
					title: 'Phone',
					details: '+63 9662540485',
				}
			],
			objectivesHeading: 'Objective',
			objectivesDetails: 'Streamline office operations and enhance productivity',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'Node.js',
					],
				},
			],
			projectDetailsHeading: 'Project Overview',
			projectDetails: [
				{
					id: 1,
					details: 'The LGU Lagon Cordova Office application is a comprehensive management system designed to streamline office operations and enhance productivity.',
				},
				{
					id: 2,
					details: 'Features include document management, task tracking, employee scheduling, and automated reporting systems.'
				}
			],
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/JonerieJr',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://www.instagram.com/jn.rein/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: 'facebook',
					url: 'https://www.facebook.com/joneriecute',
				},
				{
					id: 4,
					name: 'Github',
					icon: 'github',
					url: 'https://github.com/joneriehahahaha',
				}
			]
		}
	},
	{
		id: 3,
		title: 'My Resume',
		category: 'Portfolio',
		img: require('@/assets/images/me.jpg'),
		link: '/doubleproject',
		projectDetails: {
			singleProjectHeader: {
				singleProjectTitle: 'My Portfolio',
				singleProjectDate: 'December 2024',
				singleProjectTag: 'Front End Developer',
			},
			clientHeading: 'Contact',
			companyInfos: [
				{
					id: 1,
					title: 'Phone',
					details: '+63 9662540485',
				},
				{
					id: 2,
					title: 'Mail',
					details: 'jonerietabotabo@gmail.com',
				},
				{
					id: 3,  
					title: 'Location',
					details: 'Day-as, Cordova, Cebu',
				},
				{
					id: 4,  
					title: 'Birthday',
					details: 'April 12, 2002',
				},
				{
					id: 5,  
					title: 'Place of Birth',
					details: 'Carajay, Lapu-Lapu City, Cebu',
				}
			],
			objectivesHeading: 'Education',
			objectivesDetails: 'Bachelor of Science and Information Technology (BSIT) - 2021-2025\nSenior High Diploma, Cordova National High School - 2016-2020\nHigh School Diploma, Cordova National High School - 2012-2016',
			technologies: [
				{
					title: 'Computer skills',
					techs: [
						'Web Designer',
						'Web Developer',
						'Networking',
						'Operating System',
					],
				},
			],
			projectDetailsHeading: 'About Me',
			projectDetails: [
				{
					id: 1,
					details: 'BSIT student with a motivated attitude and a variety of powerful skills. Adept in various social media platform and technology programs. Committed to contributing my expertise in a dynamic office or media production'
				},
				{
					id: 2,
					details: 'Experience:\n- Concentrix - Technical Support representative (2023-2024)\n- McDonald\'s - Service crew (2019-2020)\n- Service Crew Lantaw Restaurant (2016-2017)'
				}
			],
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/JonerieJr',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://www.instagram.com/jn.rein/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: 'facebook',
					url: 'https://www.facebook.com/joneriecute',
				},
				{
					id: 4,
					name: 'Github',
					icon: 'github',
					url: 'https://github.com/joneriehahahaha',
				}
			]
		}
	},
	{
		id: 4,
		title: 'Pixel',
		category: 'Web Application',
		img: require('@/assets/images/paldo.jpg'),
		link: '/anotherproject',
		projectDetails: {
			singleProjectHeader: {
				singleProjectTitle: 'Pixel Management UI',
				singleProjectDate: 'Apr 7, 2024',
				singleProjectTag: 'Full Stack Developer',
			},
			clientHeading: 'About Pixel',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'PixelGaming.xyz',
				},
				{
					id: 2,
					title: 'Services',
					details: 'UI Design & Full Stack Developer',
				},
				{
					id: 3,
					title: 'Github',
					details: 'https://github.com/joneriehahahaha',
				},
				{
					id: 4,
					title: 'Phone',
					details: '+63 9662540485',
				}
			],
			objectivesHeading: 'Objective',
			objectivesDetails: 'Play pixel to earn money',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			projectDetailsHeading: 'An Infinite World of Endless',
			projectDetails: [
				{
					id: 1,
					details: 'Pixel gaming has experienced a resurgence in popularity in recent years, partly due to nostalgia for retro gaming aesthetics and partly due to the accessibility of pixel art creation tools for indie developers. Many indie games, as well as some mainstream titles, employ pixel art to evoke a sense of nostalgia or to create unique visual styles.',
				},
				{
					id: 2,
					details: 'Pixel gaming isn`t limited to a specific genre; it can encompass a wide range of game types, including platformers, RPGs, action-adventure games, puzzle games, and more. Some well-known examples of pixel art games include "Minecraft," "Stardew Valley," "Undertale," "Celeste," and "Hyper Light Drifter," among many others.'
				}
			],
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/JonerieJr',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://www.instagram.com/jn.rein/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: 'facebook',
					url: 'https://www.facebook.com/joneriecute',
				},
				{
					id: 4,
					name: 'Github',
					icon: 'github',
					url: 'https://github.com/joneriehahahaha',
				}
			]
		}
	},
	{
		id: 5,
		title: 'AI Voice Command',
		category: 'AI Application',
		img: require('@/assets/images/ai.jpg'),
		link: '/ai-voice',
		projectDetails: {
			singleProjectHeader: {
				singleProjectTitle: 'AI Voice Command System',
				singleProjectDate: 'May 2024',
				singleProjectTag: 'AI Developer',
			},
			clientHeading: 'About AI Voice Command',
			companyInfos: [
				{
					id: 1,
					title: 'Project',
					details: 'Voice Command AI Assistant',
				},
				{
					id: 2,
					title: 'Services',
					details: 'AI Development & Voice Recognition',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://aivoice.jonerie.com',
				},
				{
					id: 4,
					title: 'Contact',
					details: '+63 9662540485',
				}
			],
			objectivesHeading: 'Objective',
			objectivesDetails: 'Create an intuitive voice command system powered by AI',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'TensorFlow',
						'Natural Language Processing',
						'Speech Recognition',
						'Machine Learning',
						'Neural Networks',
					],
				},
			],
			projectDetailsHeading: 'Project Overview',
			projectDetails: [
				{
					id: 1,
					details: 'An advanced AI-powered voice command system that enables natural interaction between users and devices. The system utilizes cutting-edge machine learning algorithms and natural language processing to understand and execute voice commands accurately.',
				},
				{
					id: 2,
					details: 'Features include multi-language support, context awareness, customizable commands, and integration capabilities with various smart devices and applications.'
				}
			],
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/JonerieJr',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://www.instagram.com/jn.rein/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: 'facebook',
					url: 'https://www.facebook.com/joneriecute',
				},
				{
					id: 4,
					name: 'Github',
					icon: 'github',
					url: 'https://github.com/joneriehahahaha',
				}
			]
		}
	},
	// AI project temporarily removed until image is available
	{
		id: 6,
		title: 'Clone UI Design',
		category: 'Web Application',
		img: require('@/assets/images/clone.jpg'),
		link: '/clone-ui',
		projectDetails: {
			singleProjectHeader: {
				singleProjectTitle: 'Clone UI Design',
				singleProjectDate: 'December 2024',
				singleProjectTag: 'UI Designer / Full Stack Developer',
			},
			clientHeading: 'About Meat Shop System',
			companyInfos: [
				{
					id: 1,
					title: 'Project',
					details: 'Smart Inventory Management',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Full Stack Development & System Design',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://meatshop.jonerie.com',
				},
				{
					id: 4,
					title: 'Contact',
					details: '+63 9662540485',
				}
			],
			objectivesHeading: 'Key Features',
			objectivesDetails: 'Smart Inventory, Sales Analytics, and Safety Compliance',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Vue.js',
						'Node.js',
						'MongoDB',
						'Express',
						'TailwindCSS',
						'REST API',
					],
				},
			],
			projectDetailsHeading: 'Project Overview',
			projectDetails: [
				{
					id: 1,
					details: 'A comprehensive management system for meat shops featuring real-time inventory tracking, sales analytics, and food safety compliance. The system helps businesses streamline their operations and maintain high quality standards.',
				},
				{
					id: 2,
					details: 'Key features include:\n- Smart Inventory: Real-time tracking and automated stock management\n- Sales Analytics: Comprehensive reporting and business insights\n- Safety Compliance: Built-in food safety and quality control features'
				}
			],
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/JonerieJr',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://www.instagram.com/jn.rein/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: 'facebook',
					url: 'https://www.facebook.com/joneriecute',
				},
				{
					id: 4,
					name: 'Github',
					icon: 'github',
					url: 'https://github.com/joneriehahahaha',
				}
			]
		}
	}
];


export default projects;
