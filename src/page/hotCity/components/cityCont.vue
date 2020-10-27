<template>
	<div class="graphicCont">
		<city-swiper/>
		<ul>
			<li>
				<span class="key">中文名：</span>
				<span class="value">{{this.$route.query.title}}</span>
			</li>
			<li>
				<span class="key">别  名：</span>
				<span class="value">{{this.$route.query.otherTitle}}</span>
			</li>
			<li>
				<span class="key">英文名：</span>
				<span class="value">{{this.$route.query.EnglishTitle}}</span>
			</li>
			<li>
				<span class="key">著名景点：</span>
				<span class="value">{{this.$route.query.attractions}}</span>
			</li>
			<li>
				<span class="key">飞机场：</span>
				<span class="value">{{this.$route.query.plane}}</span>
			</li>
			<li>
				<span class="key">火车站：</span>
				<span class="value">{{this.$route.query.train}}</span>
			</li>
			<li>
				<span class="key">气候条件：</span>
				<span class="value">{{this.$route.query.climate}}</span>
			</li>
		</ul>
		<p class="text">
			{{this.$route.query.text}}
		</p>
		<div class="toMap">
			<a @click="toMap()">
				<img src="../../../assets/img/location.png">
			</a>
		</div>
	</div>
</template>

<script>
	import citySwiper from './cityCont/citySwiper'
	export default{
		name:'cityCont',
		data(){
			return{
				mapUrl:'https://apis.map.qq.com/tools/poimarker?',
				type:'type=0&',
				referer:'referer=tour&'
			}
		},
		methods:{
			toMap:function(){
				var marker='marker=coord:'+this.$route.query.coord+';title:'+this.$route.query.title+';addr:'+this.$route.query.title
				var toMap=this.mapUrl+this.type+'key='+this.$route.query.key+'&'+this.referer+marker
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
			float left
			border-top .2rem solid #eee
		.img
			padding .2rem
			img
				width 100%
				height 100%
		.text
			border-radius 2px
			padding .2rem
			text-indent 2em
			font-size .2rem
			line-height .3rem
		ul
			padding .2rem
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
		.toMap
			text-align right
			margin .2rem .5rem .2rem 0
			a
				img
					width 50px
</style>
