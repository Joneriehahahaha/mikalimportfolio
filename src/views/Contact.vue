<script>
import feather from 'feather-icons';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Day-as, Cordova, Cebu',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'jonerietabotabo@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '+639662540485',
					icon: 'phone',
				},
				{
					id: 4,
					name: 'https://www.facebook.com/joneriecute',
					icon: 'facebook',
				},
				{
					id: 5,
					name: 'https://github.com/Joneriehahahaha',
					icon: 'github',
				},
				{
					id: 5,
					name: 'https://www.instagram.com/jn.rein/',
					icon: 'instagram',
				},
				
			],
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
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<!-- Contact form -->
		<ContactForm />

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>
