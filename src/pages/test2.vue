<template>

<!-- <f7-page pull-to-refresh @ptr:refresh="onRefresh" infinite-scroll @infinite="onInfiniteScroll"> -->
<!-- 	<f7-navbar back-link="Back" title="测试" sliding>
	</f7-navbar> -->
<!-- 	<f7-button open-picker="#Picker">Picker</f7-button> -->
<!-- 	<f7-tabs>
		<f7-tab id="tab1" active>tab1 content</f7-tab>
		<f7-tab id="tab2">tab2 content</f7-tab>
	</f7-tabs> -->
<!-- 	<f7-subnavbar >
    		<f7-buttons>
      		<f7-button tab-link="#tab1" active>Tab 1</f7-button>
      		<f7-button tab-link="#tab2">Tab 2</f7-button>
    		</f7-buttons>
 		 </f7-subnavbar> -->
<!-- </f7-page> -->
<!-- <f7-pages>
<f7-page tabs no-page-content>
  <f7-navbar back-link="Back" title="My App"></f7-navbar>
  <f7-page-content tab active id="tab1">Tab 1 Content ...</f7-page-content>
  <f7-page-content tab id="tab-2">Tab2 Content ...</f7-page-content>
  <f7-page-content tab id="tab-3">Tab3 Content ...</f7-page-content>

<f7-toolbar labels tabbar theme="red">
		<f7-link icon-f7="home" tab-link="#tab1" active>Left</f7-link>
		<f7-link icon-f7="person" tab-link="#tab2">Center</f7-link>
		<f7-link icon-f7="person" tab-link="#tab3">Right</f7-link>
	</f7-toolbar>

</f7-page>
  	
</f7-pages>	 -->

<!--   <f7-photo-browser
    ref="pb"
    :photos="photos"
    theme="dark"
    Open Callback/Event
    @open="onOpen"
  ></f7-photo-browser>
  <f7-link @click="openPhotoBrowser">Photos</f7-link> -->

<f7-preloader color="red"></f7-preloader>

</template>

<script>
export default {
	data:function(){
		return{
			photos:[{
				url:'https://www.baidu.com/img/bd_logo1.png',
				caption:'Picture 1'
			},
			{
				url:'https://www.baidu.com/img/bd_logo1.png',
				caption:'Picture 2'
			}
			]
		}
	},
	methods:{
		onRefresh:function(){
			 console.log("onRefresh")
		},
		onInfiniteScroll:function(){
			console.log("onInfiniteScroll")
		}, 
		openPhotoBrowser: function () {
        this.$refs.pb.open();
      },
      onOpen: function () {
        console.log('Photo Browser is opened')
      }
	}
}
</script>