<template>
	<div>
		<city-header/>
		<city-cont/>
	</div>
</template>

<script>
	import cityHeader from '@/page/hotCity/components/cityHeader'
	import cityCont from '@/page/hotCity/components/cityCont'
	export default{
		name:'HotCity',
		components:{
			cityHeader,
			cityCont
		}
	}
</script>

<style>
</style>
