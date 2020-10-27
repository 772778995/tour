<template>
	<div class="details">
		<details-header :city='city'/>
		<details-list
			:myLocation='myLocation'
			:detailsListData='detailsListData'
			@getMoreData='getDetailsListData'
		/>
	</div>
</template>

<script>
	import detailsHeader from '@/page/details/components/detailsHeader'
	import detailsList from '@/page/details/components/detailsList'
	export default{
		name:'Details',
		data(){
			return{
				city:'',
				myLocation:'',
				detailsListData:[],
				page_index:1
			}
		},
		methods:{
			getDetailsListData:function(){
				this.$axios.get('/map/search',{
					params:{
						key:this.$route.params.key,
						boundary:'region('+this.$route.params.ip+',0)',
						keyword:this.$route.params.near,
						page_index:this.page_index
					}
				}).then(this.getDetailsListDataSucc)
			},
			getDetailsListDataSucc:function(res){
				this.detailsListData=this.detailsListData.concat(res.data.data)
				this.page_index++
			}
		},
		components:{
			detailsHeader,
			detailsList
		},
		mounted() {
			this.city=this.$route.params.ip
			this.getDetailsListData()
			this.myLocation=this.$route.params.myLocation
		}
	}
</script>

<style>
</style>
