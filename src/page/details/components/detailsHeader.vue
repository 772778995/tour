<template>
	<div class="detailsHeader">
		<div class="header-back">
			<i class="iconfont" @touchend="back">
				&#xe653
			</i>
		</div>
		<div class="header-title">
			{{this.$route.params.near}}
		</div>
		<router-link :to="{name:'home',query:{ip:city}}">
			<div class="header-city">
					<span>{{city}}</span>
					<i class="iconfont">&#xe656;</i>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		name:'detailsHeader',
		props:['city'],
		methods:{
			back:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.detailsHeader
		background #EEEEEE
		line-height .88rem
		text-align center
		display flex
		.header-back
			width .9rem
			float left
		.header-title
			flex 1
		.header-city
			width 1.4rem
			float right
			color #000000
</style>
