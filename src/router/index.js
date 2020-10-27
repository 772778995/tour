import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Location from '@/page/location/Location'
import Details from '@/page/details/Details'
import HotCity from '@/page/hotCity/HotCity'
import Graphic from '@/page/graphic/Graphic'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/location',
			name: 'location',
			component: Location
		},
		{
			path: '/details',
			name: 'details',
			component: Details,
			beforeEnter(to,from,next) {
				if(!from.query.ip){
					next('/location')
				}else{
					next()
				}
			}
		},
		{
			path: '/hotCity',
			name: 'hotCity',
			component: HotCity
		},
		{
			path: '/graphic',
			name: 'graphic',
			component: Graphic
		}
	]
})
