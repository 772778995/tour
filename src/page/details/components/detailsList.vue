<template>
	<div class="details-list">
		<div class="search-for">
			搜索内容：
			{{this.$route.params.ip}}
				|	
			{{this.$route.params.near}}
		</div>
		<ul v-for="(item,index) in detailsListData">
			<li>
				<p>
					<span class='key'>名称：</span class='key'>
					<span class='value'>{{item.title}}</span>
				</p>
				<p>
					<span class='key'>类别：</span class='key'>
					<span class='value'>{{item.category}}</span>
				</p>
				<p>
					<span class='key'>地址：</span class='key'>
					<span class='value'>{{item.address}}</span>
				</p>
				<p>
					<span class='key'>电话：</span class='key'>
					<span class='value'>{{item.tel}}</span>
				</p>
				<p class="mapLink">
					<a @click="toMap(item.location,item.title,item.address)">
						<img src="../../../assets/img/location.png">
					</a>
				</p>
				<p class="num">{{index+1}}</p>
			</li>
		</ul>
		<div class="details-foot">
			<a @click="getMoreData">查看更多</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'detailsList',
		data(){
			return{
				mapUrl:'https://apis.map.qq.com/tools/poimarker?',
				type:'type=0&',
				key:'key=XC3BZ-3LYWP-HBZDO-VKSLI-EQXAV-LDBSH&',
				referer:'referer=tour&'
			}
		},
		props:[
			'detailsListData',
			'myLocation'
		],
		methods:{
			getMoreData:function(){
				this.$emit('getMoreData')
			},
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
	.details-list
		.search-for
			margin .2rem
			color #000000
			font-weight bolder
			text-align center
		ul
			box-shadow 0 0 .1rem .03rem #ccc
			margin .2rem
			padding .2rem
			border .02rem solid #ccc
			line-height .5rem
			li
				p
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
			.mapLink
				text-align right
				img
					width 50px
			.num
				font-size .1rem
				line-height .1rem
		.details-foot
			text-align center
			margin .1rem 0
</style>
