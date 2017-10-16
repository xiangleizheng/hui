<template>
  <div class="yuanbox">
    <!--<h1>源计划</h1>-->
	  <ol>
	    <li><router-link to="detail/1"><img src="../../static/imgsm/y1.png"/></router-link></li>
	    <li><router-link to="detail/2"><img src="../../static/imgsm/y2.png"/></router-link></li>
	    <li><router-link to="detail/3"><img src="../../static/imgsm/y3.png"/></router-link></li>
	    <li><router-link to="detail/4"><img src="../../static/imgsm/y4.png"/></router-link></li>
	    <li><router-link to="detail/5"><img src="../../static/imgsm/y5.png"/></router-link></li>
	    <li><router-link to="detail/6"><img src="../../static/imgsm/y6.png"/></router-link></li>
	    <li><router-link to="detail/7"><img src="../../static/imgsm/y7.png"/></router-link></li>
	    <li><router-link to="detail/8"><img src="../../static/imgsm/y8.png"/></router-link></li>
	    <li><router-link to="detail/9"><img src="../../static/imgsm/y9.png"/></router-link></li>
	  </ol>    
  </div>

</template>

<script>
export default {
  name: 'yuanbox',
  data(){
  	return{
  		img:["../../static/imgsm/y1.png"]
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yuanbox{height: 400px; overflow:hidden;background:url(../../static/imgbg/skinbg.png)}
ol{overflow: auto;box-sizing: border-box;padding-bottom: 50px;}
ol li a{height: 120px;display: flex;}
ol li img{
	margin: auto;
	width: 45%;
	border-radius: 10px;
	box-shadow: 0 0 12px -1px rgba(0,0,0,1),0 0 6px -1px rgba(220,180,0,1);
}
</style>
