<template>
	<div class="like">
		<div class="like-top">
			<div class="like-top-title">
				猜你喜欢
			</div>
		</div>
		<div class="like-cont"
			v-for="item in homeLikeList"
			:key=item.id
		>
			<img class="like-cont-img" :src=item.imgUrl>
			<p class="like-cont-title">{{item.title}}</p>
			<span class="like-cont-text">
				{{item.text}}
			</span>
			<div class="like-cont-bot">
				<p>
					<router-link
						:to="{
								name:'graphic',query:{
									title:item.title,
									imgUrl:item.imgUrl,
									text:item.text,
									price:item.price,
									openTime:item.openTime,
									address:item.address,
									area:item.area,
									attractions:item.attractions,
									coord:item.coord,
									city:city,
									imgSwiper:item.imgSwiper
								}
						}"
					>	
						<div class="img">
							<img src="../../../assets/img/more.png">
						</div>
					</router-link>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'homeLike',
		data(){
			return{
				city:''
			}
		},
		props:[
			'homeLikeList'
		],
		mounted() {
			this.city=this.$route.query.ip
		}
	}
</script>

<style lang="stylus" scoped>
	.like
		border-top .2rem solid #eee
		padding  0 .2rem
		.like-top
			padding 10px 0
			.like-top-title
				width 100px
				margin 0 auto
				padding-bottom .1rem
				text-align center
				border-bottom .1rem solid #007AFF
		.like-cont
			box-shadow 0 0 .1rem .03rem #ccc
			padding .1rem
			margin .2rem .2rem .2rem 0
			.like-cont-img
				width 100%
				margin-bottom 10px
			.like-cont-title
				text-align center
				font-weight bolder
				margin-bottom .1rem
			.like-cont-text
				text-indent 1em
				line-height 15px
				font-size 10px
				color #2C3E50
				display:-webkit-box
				overflow:hidden
				text-overflow:ellipsis
				-webkit-line-clamp:2
				-webkit-box-orient:vertical
				margin-bottom .1rem
			.like-cont-bot
				border-top 2px solid #eee
				padding-top .1rem
				.img
					text-align right
					img
						width 30px
</style>
