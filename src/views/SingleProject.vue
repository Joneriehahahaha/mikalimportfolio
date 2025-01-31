<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Meat Shop Management System',
				singleProjectDate: 'December 2024',
				singleProjectTag: 'UI Designer / Full Stack Developer',
			},
			projectImages: [
				{
					id: 1,
					title: 'Meat Shop Management System',
					img: require('@/assets/images/our team.jpg'),
				}
			],
			projectInfo: {
				clientHeading: 'Project Info',
				companyInfos: [
					{
						id: 1,
						title: 'Client',
						details: 'Meat Shop Business',
					},
					{
						id: 2,
						title: 'Service',
						details: 'Web Application Development',
					},
					{
						id: 3,
						title: 'Project Type',
						details: 'Management System',
					},
					{
						id: 4,
						title: 'Status',
						details: 'In Development',
					}
				],
				objectivesHeading: 'Objective',
				objectivesDetails: [
					{
						id: 1,
						details: 'Primary Objective:',
						description: 'To develop a user-friendly and efficient meat shop management system that enhances business operations and customer service.'
					},
					{
						id: 2,
						details: 'Key Goals:',
						description: '• Streamline inventory management and stock control\n' +
									'• Implement robust sales tracking and reporting\n' +
									'• Ensure food safety compliance and quality control\n' +
									'• Optimize order processing and customer management\n' +
									'• Facilitate efficient business operations and decision-making'
					}
				],
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'Vue.js',
							'TailwindCSS',
							'MySQL',
							'PHP',
							'Laravel',
							'XAMPP',
						],
					},
				],
				projectDetailsHeading: 'Meat Shop Management System',
				projectDetails: [
					{
						id: 1,
						details:
							'The meat shop management system is a comprehensive software solution designed to streamline and optimize the operations of meat retail businesses. It provides essential tools for inventory management, sales tracking, customer relations, and financial reporting. The system helps meat shop owners maintain quality control, manage stock levels efficiently, and ensure compliance with food safety regulations.',
					},
					{
						id: 12,
						details:
							'It helps butcher shop owners track meat products, manage stock levels, process orders, and maintain quality standards. The system also includes features for supplier management, employee scheduling, and compliance with food safety regulations, making it an essential tool for modern meat retail operations.'
					},
						
				],
				socialSharingsHeading: 'Share This',
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
					
				],
			},
			relatedProject: {
				relatedProjectsHeading: '',
				relatedProjects: [
					
					
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Enhanced Project Gallery - Single Image -->
		<div class="mt-16 max-w-6xl mx-auto px-4">
			<!-- Main Project Image -->
			<div class="relative group">
				<img 
					:src="projectImages[0].img"
					:alt="projectImages[0].title"
					class="rounded-2xl shadow-xl w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
				/>
				<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 rounded-b-2xl">
					<h3 class="text-2xl font-bold text-white mb-2">
						{{ projectImages[0].title }}
					</h3>
					<p class="text-gray-200">
						Our team working on the Meat Shop Management System project.
					</p>
				</div>
			</div>
		</div>

		<!-- Project Features Section -->
		<div class="mt-20 max-w-6xl mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="bg-secondary-light dark:bg-ternary-dark p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
					<div class="text-primary-dark dark:text-primary-light text-xl mb-4">🎯</div>
					<h3 class="text-lg font-bold text-ternary-dark dark:text-ternary-light mb-2">
						Smart Inventory
					</h3>
					<p class="text-ternary-dark dark:text-ternary-light">
						Real-time tracking and automated stock management system.
					</p>
				</div>
				<div class="bg-secondary-light dark:bg-ternary-dark p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
					<div class="text-primary-dark dark:text-primary-light text-xl mb-4">📊</div>
					<h3 class="text-lg font-bold text-ternary-dark dark:text-ternary-light mb-2">
						Sales Analytics
					</h3>
					<p class="text-ternary-dark dark:text-ternary-light">
						Comprehensive reporting and business insights.
					</p>
				</div>
				<div class="bg-secondary-light dark:bg-ternary-dark p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
					<div class="text-primary-dark dark:text-primary-light text-xl mb-4">🔒</div>
					<h3 class="text-lg font-bold text-ternary-dark dark:text-ternary-light mb-2">
						Safety Compliance
					</h3>
					<p class="text-ternary-dark dark:text-ternary-light">
						Built-in food safety and quality control features.
					</p>
				</div>
			</div>
		</div>

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped>
.group:hover img {
	filter: brightness(1.05);
}
</style>
