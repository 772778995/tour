<template>
	<div class="week">
		<div class="week-title">
			<i>//////////</i>
			<span>热门城市</span>
			<i>//////////</i>
			<p>最佳旅游城市</p>
		</div>
		<swiper class="weekSwiper" ref="mySwiper" :options="swiperOptions">
			<swiper-slide class="weekSwiperSlide"
				v-for='item in homeWeekendList'
				:key=item.id
			>
				<router-link
					:to="{
						name:'hotCity',query:{
							city:city,
							key:myKey,
							coord:item.coord,
							title:item.title,
							otherTitle:item.otherTitle,
							EnglishTitle:item.English,
							imgUrl:item.imgUrl,
							text:item.cont,
							attractions:item.attractions,
							plane:item.plane,
							train:item.train,
							climate:item.climate,
							imgSwiper:item.imgSwiper
						}
					}"
				>
					<img class="swiper-img" :src=item.imgUrl>
					<p class="weekSwiperTitle">{{item.title}}</p>
					<p class="weekSwiperCont">{{item.cont}}</p>
				</router-link>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	export default {
		name: 'homeWeekend',
		props:[
			'city',
			'myKey',
			'homeWeekendList'
		],
		data() {
			return {
				swiperOptions: {
					freeMode:true,
					spaceBetween:10,
					slidesPerView:2,
				}
			}
		}

	}
</script>

</script>

<style lang="stylus" scoped>
	.week
		border-top .2rem #eee solid
		padding .2rem
		.week-title
			text-align center
			i
				color #CCCCCC
			span
				font-size 14px
				font-weight bolder
			p
				font-size 12px
				margin-top 3px
		.weekSwiper
			margin-top 5px
			box-shadow 0 0 .1rem .03rem #ccc
			.weekSwiperSlide
				box-shadow 0 0 .1rem .03rem #ccc
				p
					text-align center
					font-size 14px
					padding 3px
					color #000000
				.weekSwiperTitle
					font-weight bold
					color #000000
				.weekSwiperCont
					margin 0 .1rem
					text-indent 1em
					font-size 13px
					line-height 17px
					height 46px
					text-align left
					display:-webkit-box
					overflow:hidden
					text-overflow:ellipsis
					-webkit-line-clamp:3
					-webkit-box-orient:vertical
					color #000000
					margin-bottom .5rem
				.swiper-img
					width 100%
					display block
</style>
