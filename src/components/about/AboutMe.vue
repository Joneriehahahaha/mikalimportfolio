<script>
export default {
	setup() {
		return {
			bios: [
				
				{
					id: 1,
					bio:
						'Hello, I`m Jonerie Tabotabo, and I`m a third-year college student pursuing a Bachelor of Science in Information Technology',
				},
				{
					id: 2,
					bio:
						'At Cordova Public College, I am constantly learning and honing my skills through hands-on projects, coursework, and collaboration with peers and instructors. I believe in the importance of staying updated with the latest advancements in technology and actively seek opportunities to expand my knowledge and expertise.',
				},
				
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/me.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
