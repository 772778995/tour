<template>
	<div class="home">
		<home-header
			class="homeHeader"
			:city="city"
			@getSuggesData='getSuggesData'
		/>
		<home-header-search
			class="home-header-search"
			:headerSearch='headerSearch'
			:headerSearchList='headerSearchList'
		/>
		<home-swiper :homeSwiperList='data.homeSwiperList'/>
		<home-catalogo
			:city="city"
			:myLocation='myLocation'
			:myKey='key'
			:homeCataLogoList='data.homeCataLogoList'
		/>
		<home-hot
			:homeHotLeftCont='data.homeHotLeftCont'
			:homeHotLeftBot='data.homeHotLeftBot'
			:homeHotRightList='data.homeHotRightList'
		/>
		<home-weekend
			:city='city'
			:myKey='key'
			:homeWeekendList='data.homeWeekendList'
		/>
		<home-like :homeLikeList='data.homeLikeList'/>
	</div>
</template>

<script>
	// import axios from 'axios'
	import homeHeader from '@/page/home/components/homeHeader'
	import homeHeaderSearch from '@/page/home/components/homeHeaderSearch'
	import homeSwiper from '@/page/home/components/homeSwiper'
	import homeCatalogo from '@/page/home/components/homeCatalogo'
	import homeHot from '@/page/home/components/homeHot'
	import homeWeekend from '@/page/home/components/homeWeekend'
	import homeLike from '@/page/home/components/homeLike'
	export default{
		name:'Home',
		data(){
			return{
				city:'',
				myLocation:'',
				headerSearch:'',
				headerSearchList:'',
				data:'',
				key:'XC3BZ-3LYWP-HBZDO-VKSLI-EQXAV-LDBSH'
			}
		},
		components:{
			homeHeader,
			homeHeaderSearch,
			homeSwiper,
			homeCatalogo,
			homeHot,
			homeWeekend,
			homeLike
		},
		methods:{
			getHomeData:function(){
				this.$axios
					.get('/api/homeData.json')
					.then(result=>(this.data=result.data))
			},
			getSuggesData:function(searchData){
				this.headerSearch=searchData
				this.$axios.get('/map/suggestion',{
					params:{
						key:this.key,
						keyword:this.headerSearch,
						region:this.city
					}
				}).then(this.getSuggesDataSucc)
			},
			getSuggesDataSucc:function(result){
				this.headerSearchList=result.data.data
			}
		},
		mounted() {
			

			// 获取主页所有数据
			this.getHomeData()
			
			// 精准定位
			var geolocation=new qq.maps.Geolocation();
			geolocation.getLocation(result=>(this.myLocation=result),null);
			
			// 如果路由query的ip值存在,则将其赋值到变量city
			// 否则请求接口获取本地位置
			if(this.$route.query.ip){
				this.city=this.$route.query.ip
			}else{
				var ip=new qq.maps.Geolocation();
				ip.getLocation(result=>(
					this.city=result.city,
					this.$route.query.ip=this.city
				),null)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.home
		position relative
		.homeHeader
			position fixed
			top 0
			left 0
			z-index 100
			width 100%
		.home-header-search
			position fixed
			top .88rem
			left 50%
			width 75%
			z-index 101
			transform translateX(-55%)
</style>
