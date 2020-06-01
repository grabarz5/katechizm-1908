import Chapter from '@/views/Chapter'
import Converter from '@/views/Converter'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'Home',
	component: Home
}, {
	path: '/chapter/:id',
	name: 'Chapter',
	component: Chapter,
	props: true
}, {
	path: '/converter',
	name: 'Converter',
	component: Converter
}, {
	path: '/search',
	name: 'Search',
	component: Search
}]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
