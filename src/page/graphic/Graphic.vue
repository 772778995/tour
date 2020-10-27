<template>
	<div class="graphic">
		<graphic-header/>
		<graphic-cont :param='param' />
	</div>
</template>

<script>
	import graphicHeader from '@/page/graphic/components/graphicHeader'
	import graphicCont from '@/page/graphic/components/graphicCont'
	export default{
		name:'Graphic',
		data(){
			return{
				param:{}
			}
		},
		components:{
			graphicHeader,
			graphicCont
		},
		mounted() {
			this.param.coord=this.$route.query.coord
			this.param.title=this.$route.query.title
			this.param.addr=this.$route.query.address
		}
	}
</script>

<style>
</style>
