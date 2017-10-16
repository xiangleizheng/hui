<template>
  <div class="rockbox">
	  <ol>
	    <li><router-link to="detail/1"><img src="../../static/omg/pkg-8150.png"/></router-link></li>
	    <li><router-link to="detail/2"><img src="../../static/omg/f2.png"/></router-link></li>
	  </ol> 
  </div>
</template>

<script>
export default {
  name: 'rockbox',
  data () {
    return {
      msg: "ROCK"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rockbox{height: 400px; overflow:hidden;/*background:linear-gradient(140deg,#3f74f5,#b356f5);*/background:url(../../static/imgbg/skinbg.png)}
ol{overflow: auto;box-sizing: border-box;padding-bottom: 50px;}
ol li a{height: 170px;display: flex;}
ol li img{
	margin: auto;
	width: 50%;
	border-radius: 10px;
	box-shadow: 0 0 20px -1px rgba(0,0,0,1),0 0 6px -1px rgba(2,202,255,1);
}
</style>
