<template>
	<div class="wrapper">
		<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide
				v-for="item in this.$route.query.imgSwiper"
				:key=item.id
			>
				<img class="swiper-img" :src='item.imgUrl'>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		  </swiper>
	</div>
</template>

<script>
	export default{
		name:'citySwiper',
		data(){ 
			return{
				imgSwiper:[],
				swiperOptions:{
					pagination:'.swiper-pagination',
					loop:true
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet
		background #000
	.wrapper
		margin .2rem
	.swiper-img
		width 100%
</style>
