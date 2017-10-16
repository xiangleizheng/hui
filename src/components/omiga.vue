<template>
  <div class="omigabox">
	  <ol>
	    <li><router-link to="detail/5"><img src="../../static/omg/omiga1.png"/></router-link></li>
	    <li><router-link to="detail/9"><img src="../../static/omg/omiga2.png"/></router-link></li>
	    <li><router-link to="detail/4"><img src="../../static/omg/omiga3.png"/></router-link></li>
	    <li><router-link to="detail/3"><img src="../../static/omg/omiga4.png"/></router-link></li>
	  </ol> 
  </div>
</template>

<script>
export default {
  name: 'omigabox',
  data () {
    return {
      msg: "OMIGA"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.omigabox{height: 400px; overflow:hidden;background:url(../../static/imgbg/skinbg.png)}
ol{overflow: auto;box-sizing: border-box;padding-bottom: 50px;}
ol li a{height: 120px;display: flex;}
ol li img{
	margin: auto;
	width: 45%;
	border-radius: 10px;
	box-shadow:  0 0 15px -1px rgba(0,0,0,0.9),0 0 6px -1px rgba(2,82,4,1);
}
</style>
