<template>
	<div class="wrapper">
		<div
			class="icon"
			v-for="item in homeCataLogoList"
			:key=item.id
		>
			<router-link :to="{name:'details',params:{ip:city,near:item.text,key:myKey,myLocation:myLocation}}">
				<div class="icon-img">
					<img :src="item.imgUrl" :class="item.color">
				</div>
				<div class="icon-text">
					{{item.text}}
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'homeCataLogo',
		props:[
			'city',
			'myLocation',
			'myKey',
			'homeCataLogoList'
		]
	}
</script>

<style lang="stylus" scoped>
	// .red
	// 	background red
	// .green
	// 	background greenyellow
	// .blue
	// 	background #007AFF
	// .orange
	// 	background orange
	.wrapper
		background #fff
		.icon
			margin .2rem 0
			width 25%
			float left
			.icon-text
				margin-top .2rem
				text-align center
				font-weight bolder
				color #000000
			.icon-img
				img
					display block
					margin 0 auto
					width 1rem
					// border-radius 50%
</style>
