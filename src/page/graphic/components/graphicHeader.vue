<template>
	<div class="graphicHeader">
		<div class="header-back">
			<i class="iconfont" @touchend="back">
				&#xe653
			</i>
		</div>
		<div class="header-title">
			{{this.$route.query.title}}
		</div>
		<router-link :to="{name:'location',query:{ip:this.$route.query.city}}">
			<div class="header-city">
					<span v-if="this.$route.query.city">{{this.$route.query.city}}</span>
					<span v-else>定位</span>
					<i class="iconfont">&#xe656;</i>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		name:'graphicHeader',
		methods:{
			back:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.graphicHeader
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
