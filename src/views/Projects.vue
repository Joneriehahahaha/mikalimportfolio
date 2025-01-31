<script>
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';

export default {
	name: 'Projects',
	components: {
		ProjectsGrid
	}
};
</script>

<template>
	<div class="container mx-auto">
		<!-- Projects Header -->
		<div class="text-center mt-12">
			<h1 class="font-general-medium text-4xl text-[#0F172A] mb-4">
				Projects Portfolio
			</h1>
			<p class="text-gray-500 text-lg">
				Some of my recent works
			</p>
		</div>

		<!-- Projects Grid -->
		<ProjectsGrid />
	</div>
</template>

<style scoped></style>
