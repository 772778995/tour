<template>
	<div>
		<location-header
			:city='city'
			@getSearchFor='getSearchFor'
		/>
		<location-list
			:city='city'
			:cites='cites'
			:searchFor='searchFor'
			:locationListHotList='data.locationListHotList'
			:locationListAlph='data.locationListAlph'
			@getCity='changeCity'
		/>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import VueAxios from 'vue-axios'
	import locationHeader from './components/locationHeader'
	import locationList from './components/locationList'
	Vue.prototype.$axios = axios
	export default{
		name:'Location',
		data(){
			return{
				data:'',
				searchFor:'',
				city:'正在定位中……',
				cites:''
			}
		},
		components:{
			locationHeader,
			locationList
		},
		methods:{
			getSearchFor:function(searchFor){
				this.searchFor=searchFor
			},
			changeCity:function(cityName){
				this.city=cityName
			}
		},
		mounted() {
			
			this.$axios
				.get('/api/locationData.json')
				.then(result=>(this.data=result.data))
				.catch(err=>(console.log(err)))
				
			this.$axios
				.get('/api/cites.json')
				.then(result=>(this.cites=result.data))
				.catch(err=>(console.log(err)))
			this.city=this.$route.query.ip
		}
	}
</script>

<style>
</style>