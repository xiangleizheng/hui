<template>
  <div class="box">
  	<div class="tittle">
	     <h1><img src="../../static/imgwx/wxtittle.png" alt="" /></h1>
	     <h4>来源： 微信文章</h4> 		
  	</div>
  	<span class="ko">关闭</span>
    <section>
    	<ul class="list">
    	</ul>
    	<span class="more">更多内容</span>
    </section>
    <div class="iframe">
    	
    </div>
<!--<iframe frameborder=0 marginheight=0 marginwidth=0 scrolling=yes src=http://www.baidu.com></iframe>-->
  </div>
</template>

<script>
export default {
  name: 'box',
  data () {
    return {
      msg: "精选文章"
    }
  }
}

$(document).on("touchend",function(){
	  var article = [],n=1;
	  getarticle(1);
	  function getarticle(n){
					 $.getJSON("http://query.yahooapis.com/v1/public/yql", {
				 	//微信精选    pno第几页  ps显示数量   key是appkey
						    q: "select * from json where url=\"http://v.juhe.cn/weixin/query?pno="+n+"&ps=10&key=9ff9bfa8f9154b43b782e11d82a63db1\"",
						    format: "json"
				    },function(data) {
						    if (data.query) {
		                article = data.query.results.json.result.list;
		                putin(article);
						    } else {
						        console.log('no such code: ' + code);
						    }
			
			     })
		}

	  
		function putin(a){
			  for(let i = 0 ;i<a.length;i++){	
			  	$(".list").append("<li link='"+a[i].url+"'><img src='"+a[i].firstImg+"'><div><p>"+a[i].title+"</p><p>"+a[i].source+"</p></div></li>")
			  }
		}	
		var flag = true;
		
		$(".more").on("touchend",function(event){
			event.stopPropagation();
			if(flag){
					n++;
					getarticle(n);
					flag = false;
					console.log(111)
			}
			setTimeout(function(){
				flag = true;
			},1000)
		})
		
		$("section .list").on("touchend","li",function(event){
			event.stopPropagation();
			console.log(222)
			$(this)[0].style.boxShadow="0 3px 7px 0 rgba(0,0,0,0.2)";
			$(".ko")[0].style.display="block";
	  	$(".ko").addClass("animated flipInX");
			$(".iframe").append("<iframe style='display: block;position: absolute;top: 150px;width:100%;height: 70%' frameborder=0 marginheight=0 marginwidth=0 scrolling=yes src="+$(this).attr('link')+"></iframe>")
		})
	  
	  $(".ko").on("touchend",function(e){
		  	var e=e||event;
		  	e.stopPropagation();
		  	$(".iframe").empty();
		  	$(".ko").addClass("animated flipOutX");
		  	setTimeout(function(){
		  			  	$(".ko")[0].style.display="none";
	              $(".ko").removeClass("animated flipOutX")	  			  	
		  	},500)


	  })
	
})  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

span.ko{
	display: none;
	position: absolute;z-index: 100;
	top:155px;right: 5px;
	width: 40px;height:40px;line-height:40px;
	text-align:center;color: rgba(255,255,255,1);
	background-color:rgba(255,50,0,0.95);
	border-radius: 20px;
	}
.box{
	background:url(../../static/imgwx/wxbg.png);
	background-size: cover;
	background-position: 0 -100px;
}
h1{display: flex;height: 70px;}
h1>img{
	width: 55%;
	margin: auto;
}
h4 {
  text-align: center;
  color: #bb4818;
}

.box{height: 100%;}
section{
	width: 90%;
	height: 80%;
	margin: 15px auto 0;
	overflow: auto;
}


</style>
