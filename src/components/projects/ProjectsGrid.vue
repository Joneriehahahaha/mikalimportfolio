<script>
import projects from '../../data/projects';

export default {
	name: 'ProjectsGrid',
	props: {
		showSearch: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			projects: projects,
			searchProject: '',
		};
	},
	computed: {
		filteredProjects() {
			if (this.searchProject) {
				const searchTerm = this.searchProject.toLowerCase();
				return this.projects.filter(project => 
					project.title.toLowerCase().includes(searchTerm)
				);
			}
			return this.projects;
		},
	},
};
</script>

<template>
	<section class="pt-10 sm:pt-14">
		<!-- Search Control - Only shown when showSearch prop is true -->
		<div v-if="showSearch" class="max-w-3xl mx-auto px-4">
			<div class="flex justify-center mb-8">
				<input 
					v-model="searchProject"
					type="text"
					placeholder="Search projects..."
					class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
				/>
			</div>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
			<div v-for="project in filteredProjects" :key="project.id" 
				class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-white transform hover:-translate-y-1 transition-all duration-300"
			>
				<router-link :to="project.link" class="flex flex-col h-full">
					<!-- Project Image -->
					<div class="relative overflow-hidden rounded-t-xl">
						<img
							:src="project.img"
							:alt="project.title"
							class="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
						/>
					</div>
					
					<!-- Project Info -->
					<div class="text-center px-4 py-6">
						<p class="font-general-medium text-xl text-[#0F172A] mb-2">
							{{ project.title }}
						</p>
						<span v-if="project.category" class="text-sm text-gray-500">
							{{ project.category }}
						</span>
					</div>
				</router-link>
			</div>
		</div>
	</section>
</template>

<style scoped>
.grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

@media (min-width: 640px) {
    .grid {
        padding: 0 2rem;
    }
}

/* Smooth scrolling for the entire page */
html {
    scroll-behavior: smooth;
}

/* Fixed header styles */
.search-header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
