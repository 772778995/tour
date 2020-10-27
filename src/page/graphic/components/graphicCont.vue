<template>
	<div class="graphicCont">
		<!-- <div class="img">
			<img :src="this.$route.query.imgUrl">
		</div> -->
		<city-swiper/>
		<p class="text">
			{{this.$route.query.text}}
		</p>
		<ul>
			<li>
				<span class="key">中文名：</span>
				<span class="value">{{this.$route.query.title}}</span>
			</li>
			<li>
				<span class="key">门  票：</span>
				<span class="value">{{this.$route.query.price}}</span>
			</li>
			<li>
				<span class="key">开放时间：</span>
				<span class="value">{{this.$route.query.openTime}}</span>
			</li>
			<li>
				<span class="key">地  址：</span>
				<span class="value">{{this.$route.query.address}}</span>
			</li>
			<li>
				<span class="key">占地面积：</span>
				<span class="value">{{this.$route.query.area}}</span>
			</li>
			<li>
				<span class="key">著名景点：</span>
				<span class="value">{{this.$route.query.attractions}}</span>
			</li>
			<li class="foot">
				<a @click="toMap(param.coord,param.title,param.addr)">
					<img src="../../../assets/img/location.png">
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import citySwiper from '../../hotCity/components/cityCont/citySwiper.vue'
	export default{
		name:'graphicCont',
		props:['param'],
		data(){
			return{
				mapUrl:'https://apis.map.qq.com/tools/poimarker?',
				type:'type=0&',
				key:'key=XC3BZ-3LYWP-HBZDO-VKSLI-EQXAV-LDBSH&',
				referer:'referer=tour&'
			}
		},
		methods:{
			toMap:function(coord,title,addr){
				var marker='marker=coord:'+coord+';title:'+title+';addr:'+addr
				var toMap=this.mapUrl+this.type+this.key+this.referer+marker
				window.open(toMap)
			}
		},
		components:{
			citySwiper
		}
	}
</script>

<style lang="stylus" scoped>
	.graphicCont
		.img,.text
			border-bottom .2rem solid #eee
		.img
			padding .2rem
			img
				width 100%
				height 100%
		.text
			border-radius 2px
			padding .2rem
			text-indent 2em
			font-size .25rem
			line-height .3rem
		ul
			padding .2rem 0 .2rem .2rem
			li
				.key,.value
					float left
					display block
					font-size .2rem
					line-height .4rem
				.key
					color #999999
					width 22%
					font-weight bolder
				.value
					width 78%
			.foot
				float right
				margin .2rem .2rem .2rem 0
				a
					img
						width 50px
</style>
