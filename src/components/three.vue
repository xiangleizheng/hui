<template>
	  <div>
	  	<ul >
	  	<li><router-link to="/three/a">第三个1</router-link></li>
	  	<li><router-link to="/three/b">第三个2</router-link></li>
	  	</ul>
	  	<ol class="clear">
	  		 <li><router-link to="/two/111">第一本书的介绍</router-link></li>
      	 <li><router-link to="/two/222">第二本书的介绍</router-link></li>
	  	</ol>
	  	<router-view></router-view>
	  </div>
</template>

<script>
</script>

<style>
	.clear{
		clear:both;
	}
	li a{
		display: inline-block;
		width:350px;
	}
</style>