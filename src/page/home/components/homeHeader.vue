<template>
	<header :class="[headerChange]">
		<div
			class="header-back"
			@touchend="back"
		>
			<i class="iconfont">&#xe653</i>
		</div>
		<input
			type="search"
			class="header-search"
			placeholder="搜索:[西湖],或:[xihu]"
			@keyup="sendSearchData"
			v-model="searchData"
		>
		<router-link :to="{name:'location',query:{ip:city}}">
			<div class="header-city">
				<span v-if="city">{{city}}</span>
				<span v-else>定位</span>
				<i class="iconfont">&#xe656;</i>
			</div>
		</router-link>
	</header>
</template>

<script>
	export default{
		name:'homeHeader',
		props:['city'],
		data(){
			return{
				headerChange:'',
				searchData:''
			}
		},
		methods:{
			changeScroll:function(){
				let scrollTop=document.documentElement.scrollTop;
				if(scrollTop>40){
					this.headerChange='headerChange';
				}else{
					this.headerChange='';
				}
			},
			back:function(){
				this.$router.go(-1);
			},
			sendSearchData:function(){
				this.$emit('getSuggesData',this.searchData)
			}
		},
		mounted() {
			window.addEventListener('scroll',this.changeScroll)
		}
	}
</script>

<style lang="stylus" scoped>
	.headerChange
		background #fff
	header
		line-height .88rem
		text-align center
		display flex
		.header-back
			width .9rem
			float left
			color #000000
		.header-search
			background url(../../../assets/img/search.png) no-repeat .2rem/.2rem
			padding 0 .1rem 0 .5rem
			height .40rem
			line-height .38rem
			margin .24rem .2rem
			border-radius .5rem
			box-shadow 0 0 .01rem .02rem #ccc
			flex 1
		.header-city
			width 1.4rem
			float right
			color #000000
</style>
