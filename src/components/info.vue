<template>
  <div class="infobox">
     <div class="choose">
         <span class="pop">Popular</span>
         <span class="rec">Recent</span>
     </div>
     
     <section class="showpic">
     	   <ul class="pic"></ul>
     	   <p class="morepic">加载更多</p>
     </section> 
     
     <i class="tanchu"></i>
  </div>
</template>

<script>
$(document).on("touchend",function(){
	
var pics = [],m=1,n=1,type=null,flag=true;
getPopular(n);
    
    function getPopular(n){
    	type="pop";
        $.ajax({
						type:"get",
						url:"https://api.pnd.gs/v1/sources/dribbble/popular?size=20&page="+n,
						dataType:"json",
						jsonp:"callback",  
						async:true,
						success:function(data){
							  $(".pic").empty();
								pics1 = data;
								for(let i = 0 ; i<pics1.length ;i++){
                    $(".pic").append("<li title='"+pics1[i].title+"' bigpic='"+pics1[i].image.big+"' touxiang='"+pics1[i].source.authorAvatarUrl+"' name='"+pics1[i].source.authorName+"'><img src='"+pics1[i].image.big+"'></li>")
                }
						}
				});
		}
    
    function getRecent(m){
    	type="rec";
        $.ajax({
						type:"get",
						url:"https://api.pnd.gs/v1/sources/dribbble/latest?size=20&page="+m,
						dataType:"json",
						jsonp:"callback",  
						async:true,
						success:function(data){
//							  $(".pic").empty();
								pics2 = data;
								for(let i = 0 ; i<pics2.length ;i++){
                    $(".pic").append("<li title='"+pics2[i].title+"' bigpic='"+pics2[i].image.big+"' touxiang='"+pics2[i].source.authorAvatarUrl+"' name='"+pics2[i].source.authorName+"'><img src='"+pics2[i].image.big+"'></li>")
								}
								
						}
				});
		}    
    
    $(".pic").on("touchend","li",function(event){
    	event.stopPropagation();
    	$(".tanchu")[0].style.display="flex";
    	$(".tanchu").empty();
    	$(".tanchu").append("<p class='title'>"+$(this).attr('title')+"</p>")
    	$(".tanchu").append("<p class='close'>关闭</p>")
    	$(".tanchu").append("<div class='userinfo'><img src='"+$(this).attr('touxiang')+"'><span> by : "+$(this).attr('name')+"</span></div>")
    	$(".tanchu").append("<img class='bigpic' src='"+$(this).attr('bigpic')+"'>")
    	$('.title').addClass("animated bounceInDown")
    	$('.userinfo').addClass("animated zoomIn")
    	$('.bigpic').addClass("animated bounceInUp")
    	$('.close').addClass("animated zoomInDown")
	    $(".close").on("touchend",function(event){
	    	  event.stopPropagation();
		    	$('.title').addClass("animated bounceOutUp");
		    	$('.userinfo').addClass("animated zoomOut");
		    	$('.bigpic').addClass("animated bounceOutDown");
		    	$('.close').addClass("animated zoomOutUp");
		    	setTimeout(function(){
		    		 $(".tanchu")[0].style.display="none";
		    	},600)
		    	
	    })    
    })
    

    
    
    $(".pop").on("touchend",function(event){
    	event.stopPropagation();
    		$(".pic").empty();
	    	if(flag){flag=false; return}else{
	    		 getPopular(n);
	    	}
    })
    $(".rec").on("touchend",function(event){
    	event.stopPropagation();
    	$(".pic").empty();
    	getRecent(m);
    })
   
		$(".morepic").on("touchend",function(event){
			event.stopPropagation();
			if(type=="pop"){
				$(".pic").empty();
			   n++;
         getPopular(n)				
			};
			if(type=="rec"){
				$(".pic").empty();
			   m++;
         getRecent(m)				
			}
		})



})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.infobox{height: 100%;background:linear-gradient(350deg,rgba(252,34,34,0.8),transparent);}
.choose{
	width: 100%;
	height: 9%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color:transparent ;
}
.choose span{
	text-align: center;
	height: 35px;
	line-height: 35px;
	font-size: 18px;
	width: 25%;
	background:rgba(252,34,34,0.6) ;
	color: #fff;
}
.light{
	text-shadow: 0 0 10px rgba(252,254,34,1),0 0 5px rgba(255,255,255,0.5);	
}
.choose span:first-child{
	border-bottom-left-radius: 18px;
	border-top-left-radius: 18px;
}
.choose span:last-child{
	border-bottom-right-radius: 18px;
	border-top-right-radius: 18px;
}

section.showpic{
	width: 100%;
	height: 91%;
	overflow-y:auto ;
	overflow-x: hidden;
	margin: 0;
	padding: 0;
}
.tanchu{
	width: 100%;
	height: 100%;
	position: absolute;
	top:0;
	background-color: rgba(0,0,0,0.8);
	display: none;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

</style>
