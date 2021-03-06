import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../components/HomePage.vue';

import PhotosPerDate from '../components/graphics/PhotosPerDate.vue';

Vue.use(VueRouter);

const routes = [
	{
    	path: '/',
    	name: 'HomePage',
    	component: HomePage,
	},
	{
    	path: '/graphics/photos-per-date',
    	name: 'PhotosPerDate',
    	component: PhotosPerDate,
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router;
