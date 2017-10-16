<template>
  <div class="skinbox">
			<swiper loop auto :list="listyuan" ></swiper>
      <tab>
       		<tab-item selected><router-link to="/skin/yuan">源计划</router-link></tab-item>
       		<tab-item><router-link to="/skin/star">星之守护者</router-link></tab-item>
       		<tab-item><router-link to="/skin/omiga">欧米伽小队</router-link></tab-item>
       		<tab-item><router-link to="/skin/rock">未来战士</router-link></tab-item>
      </tab>       

      <router-view style="overflow-y: auto;"></router-view>
  </div>
</template>

<script>
import { Swiper } from 'vux'
import { Tab, TabItem } from 'vux'

export default {
  name: 'skinbox',
  components:{
  	Tab, TabItem,Swiper
  },
  data () {
    return {
      msg: "Yuan Plan",
      listyuan:[{
				  url: 'javascript:',
				  img: './static/imgyuan/y1.jpg',
				  title: '源计划   火'
				}, {
				  url: 'javascript:',
				  img: './static/imgyuan/y2.jpg',
				  title: '源计划   雄心'
				}, {
				  url: 'javascript:',
				  img: './static/imgyuan/y3.jpg',
				  title: '源计划   自由'
				}, {
				  url: 'javascript:',
				  img: './static/imgyuan/y4.jpg',
				  title: '源计划   联合'
				}, {
				  url: 'javascript:',
				  img: './static/imgyuan/y5.jpg',
				  title: '源计划   雷'
				}, {
				  url: 'javascript:',
				  img: './static/imgyuan/y6.jpg',
				  title: '源计划   林'
				}, {
				  url: 'javascript:',
				  img: './static/imgyuan/y7.jpg',
				  title: '源计划   风'
				}, {
				  url: 'javascript:',
				  img: './static/imgyuan/y8.jpg',
				  title: '源计划   山'
				}, {
				  url: 'javascript:',
				  img: './static/imgyuan/y9.jpg',
				  title: '源计划   阴',
				//fallbackImg: 'https://static.vux.li/demo/3.jpg'
				}]
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>
