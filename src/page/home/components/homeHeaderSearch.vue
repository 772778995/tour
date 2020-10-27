<template>
	<div
		class="home-header-search"
		v-if="headerSearch"
	>
		<ul
			v-for="item in headerSearchList"
			:key=item.id
		>
			<li @click="toMap(item.location,item.title,item.address)">
				<div class="title">
					{{item.title}}
				</div>
				<div class="address">
					{{item.province}}-{{item.city}}-{{item.district}}
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'homeHeaderSearch',
		props:[
			'headerSearch',
			'headerSearchList'
		],
		data(){
			return{
				mapUrl:'https://apis.map.qq.com/tools/poimarker?',
				type:'type=0&',
				key:'key=XC3BZ-3LYWP-HBZDO-VKSLI-EQXAV-LDBSH&',
				referer:'referer=tour&'
			}
		},
		methods:{
			toMap:function(location,title,addr){
				var coord=location.lat+','+location.lng
				var marker='marker=coord:'+coord+';title:'+title+';addr:'+addr
				var toMap=this.mapUrl+this.type+this.key+this.referer+marker
				window.open(toMap)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.home-header-search
		background #fff
		box-shadow 0 0 .1rem .01rem #eee
		padding .2rem .2rem 0 .2rem
		border-radius 4px
		ul
			li
				padding .1rem
				margin-bottom .2rem
				overflow hidden
				.title
					font-weight bolder
				.address
					margin-top .1rem
					font-size .1rem
					color #25A4BB
</style>
