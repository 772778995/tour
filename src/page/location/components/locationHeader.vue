<template>
	<div class="locationHeader">
		<div class="header-back">
			<i
				class="iconfont"
				@touchend="back"
			>
				&#xe653
			</i>
			<b class="iconfont">&#xe6b9;</b>
		</div>
		<input
			type="search"
			class="header-search"
			placeholder="搜索城市,如[惠州]"
			v-model="searchFor"
			@input="sendSearchFor"
		>
		<router-link :to="{name:'home',query:{ip:city}}">
			<div class="header-city">
					<span>确认</span>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		name:'locationHeader',
		props:['city'],
		data(){
			return{
				searchFor:''
			}
		},
		methods:{
			sendSearchFor:function(){
				this.$emit('getSearchFor',this.searchFor)
			},
			back:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.locationHeader
		background #EEEEEE
		line-height .88rem
		text-align center
		display flex
		.header-back
			width .9rem
			float left
			position relative
			b
				position absolute
				top 0
				right -.65rem
		.header-search
			padding-left .5rem
			padding-right .1rem
			// font-size 0.125rem
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