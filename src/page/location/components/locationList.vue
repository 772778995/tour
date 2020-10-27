<template>
	<div class="locationList">
		<div class="locationList-get">
			<div class="locationList-get-title">
				当前位置
			</div>
			<div
				class="locationList-get-cont"
			>
				<span v-if="city">{{city}}</span>
				<span v-else>自动定位失败！	请手动定位城市！</span>
			</div>
		</div>
		<div v-show="!searchFor" class="locationList-hot">
			<div class="locationList-hot-title">
				热门城市
			</div>
			<ul class="locationList-hot-list">
				<button
					:class="{active:item.name===city}"
					v-for="item in locationListHotList"
					:key=item.id
					@touchend='sendCity(item.name)'
				>
					{{item.name}}
				</button>
			</ul>
		</div>
		<div 
			class="locationList-alph"
			v-for="(item,key) in cites"
			:key=key
		>
			<div
				class="locationList-alph-title"
				v-show="!searchFor"
			>
				{{key}}
			</div>
			<div
				:class="{active:city===innerItem}"
				class="locationList-alph-list"
				v-for="(innerItem,index) in item"
				v-show="searchShow(innerItem)"
				@touchend='sendCity(innerItem)'
			>
				{{innerItem}}
				<hr>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'locationList',
		props:[
			'city',
			'cites',
			'searchFor',
			'locationListHotList',
			'locationListAlph'
		],
		methods:{
			searchShow:function(city){
				return city.indexOf(this.searchFor)>-1
			},
			sendCity:function(cityName){
				this.$emit('getCity',cityName)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.active
		font-weight bolder
		color #007AFF
	.locationList
		.locationList-get,.locationList-hot
			background #e9ecf1
			padding .05rem
			.locationList-get-title,.locationList-hot-title
				padding-left .2rem
			.locationList-get-title
				padding-top .2rem
			.locationList-get-cont
				background #fff
				margin .2rem
				width 90%
				height .6rem
				font-size .2rem
				line-height .6rem
				padding-left .2rem
				border-radius 3px
		.locationList-hot
			.locationList-hot-list
				margin .2rem 0 .2rem .2rem
				button
					background #FFFFFF
					width 15%
					margin .15rem 5% 0 0
					border-radius 2px
		.locationList-alph
			.locationList-alph-title
				padding .1rem
				background #e9ecf1
			.locationList-alph-list
				margin .2rem 0 0 .2rem
</style>