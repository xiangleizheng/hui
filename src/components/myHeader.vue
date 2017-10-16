<template>
  <div class="header">
  		<img src="../assets/v41.gif">
  		<h1>{{ msg }}</h1>
  		<ul>
	    	<li><router-link to="/">Greed to you</router-link></li>
	    	<li><router-link to="/dis">some detail</router-link></li>
	    	<li><router-link to="/skin">skin</router-link></li>
	    </ul>

  </div>
</template>

<script>
export default {
  name: 'header',
  data(){
    return {
      msg: "LOL"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
	width: 20%;
}
ul{
	list-style: none;
	padding: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	li{margin: 0 10px;
	  a:hover{background-color: #42B983;color: #2C3E50;}
		a{
			display: block;
			width: 100px;
			height: 40px;
			line-height: 40px;
			text-decoration: none;
			background-color: #2C3E50;
			color: #42B983;border-radius:20px;
		}
	
	}
}

.active{background-color: #42B983;color: #2C3E50;}

</style>
