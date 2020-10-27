<template>
	<div>
		<div
			class="locationList-alph"
			v-for="(item,key) in cites"
			:key=key
		>
			<div class="locationList-alph-title">
				{{key}}
			</div>
			<div
				:class="{active:city===innerItem}"
				class="locationList-alph-list"
				v-for="(innerItem,index) in item"
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
		name:'locationSearch',
		props:[
			'city',
			'cites'
		],
		methods:{
			sendCity:function(cityName){
				this.$emit('getCity',cityName)
			}
		}
	}
</script>

<style>
</style>
