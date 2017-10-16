<template>
  <div class="yuanbox">
	  <ol>
	    <li><router-link to="detail/5"><img src="../../static/star/wp-ahri.png"/></router-link></li>
	    <li><router-link to="detail/8"><img src="../../static/star/wp-soraka.png"/></router-link></li>
	    <li><router-link to="detail/9"><img src="../../static/star/wp-jinx.png"/></router-link></li>
	    <li><router-link to="detail/2"><img src="../../static/star/wp-miss-fortune.png"/></router-link></li>
	    <li><router-link to="detail/4"><img src="../../static/star/wp-ezreal.png"/></router-link></li>
	  </ol> 

  </div>
</template>

<script>
export default {
  name: 'disbox',

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
	box-shadow: 0 0 15px -1px rgba(0,0,0,0.8),0 0 6px -1px rgba(81,3,3,1);
}
</style>
