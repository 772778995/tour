<template>
	<div class="hot">
		<div class="hot-left">
			<div class="hot-left-top">
				<div class="hot-left-top-left">限时抢购</div>
				<div class="hot-left-top-right">
					距结束：
					<span>{{hoursLeft}}</span>:
					<span>{{minutesLeft}}</span>:
					<span>{{secibdsLeft}}</span>
				</div>
			</div>
			<div
				class="hot-left-cont"
				v-if="homeHotLeftCont"
			>
				<img class="hot-left-cont-img" :src="homeHotLeftCont.imgUrl">
				<div class="hot-left-cont-text">{{homeHotLeftCont.text}}</div>
			</div>
			<div
				class="hot-left-bot"
				v-if="homeHotLeftBot"
			>
				<div class="hot-left-bot-left">
					<b>限量：</b>
					<span v-if="homeHotLeftBot.num > 0">{{homeHotLeftBot.num}}票</span>
					<span v-else>已售完</span>
				</div>
				<div class="hot-left-bot-right">
					￥{{homeHotLeftBot.price}}起
				</div>
			</div>
		</div>
		<div class="hot-right">
			<div class="hot-right-list"
				v-for="item in homeHotRightList"
				:key='item.id'
			>
				<div class="hot-right-top">{{item.title}}</div>
				<img class="hot-right-img" :src="item.imgUrl">
				<div class="hot-right-cont">{{item.cont}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'homeHot',
		props:[
			'homeHotLeftCont',
			'homeHotLeftBot',
			'homeHotRightList'
		],
		data(){
			return{
				hoursLeft: null,
				minutesLeft: null,
				secibdsLeft: null
			}
		},
		methods:{
			countTime: function(){
				setInterval(()=>{
					this.hoursLeft= this.changeTimeLength( 24 - new Date().getHours() ) ;
					this.minutesLeft= this.changeTimeLength( 60 - new Date().getMinutes() );
					this.secibdsLeft=  this.changeTimeLength( 60 - new Date().getSeconds() );
					let ran= Math.random();
					if(ran > 0.5 && this.homeHotLeftBot.num>=0){
						let ran= Math.floor( Math.random()*10 );
						this.homeHotLeftBot.num -= ran;
					}
				},1000)
			},
			changeTimeLength: function(time){
				return time >= 10 ? time : '0'+time;
			}
		},
		mounted() {
			this.countTime();
		}
	}
</script>

<style lang="stylus" scoped>
	.hot
		padding 0 0.1rem
		font-size  .2.1 brem
		border-top .2rem solid #eee
		overflow hidden
		.hot-left
			width 60%
			border-right 3px solid #eee
			float left
			.hot-left-top
				height .66rem
				line-height .66rem
				.hot-left-top-left
					color red
					float left
					font-weight bolder
				.hot-left-top-right
					float right
					margin-right 0.1rem
					span
						background #000000
						color #fff
			.hot-left-cont
				.hot-left-cont-img
					float left
					width 1.1rem
				.hot-left-cont-text
					font-size 12px
					color #333333
					overflow hidden
					text-overflow:ellipsis
					height 45px
					line-height 16px
					padding 5px
					display:-webkit-box
					overflow:hidden
					text-overflow:ellipsis
					-webkit-line-clamp:3
					-webkit-box-orient:vertical
			.hot-left-bot
				margin 10px 0
				.hot-left-bot-left
					float left
					b
						color red
						font-weight bolder
					span
						color #fff
						background #000000
						padding 0 2px
				.hot-left-bot-right
					float right
					color red
					font-weight 600
					margin-right 5px
		.hot-right
			.hot-right-list
				position relative
				padding-left 5px
				.hot-right-top
					height 22.5px
					line-height 22.5px
					font-weight bold 
				.hot-right-img
					width 55px
					 position absolute
					 right 0
					 top 0
				.hot-right-cont
					font-size 12px
					text-align left
					line-height 30.9px
					font-weight 700
					border-bottom 3px solid #eee
					overflow hidden
</style>
