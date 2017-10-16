<template>
  <div class="disbox">
			<div class="box">
				<input type="search" class="txt" placeholder="请输入歌曲名" />
				<a href="javascript:;" class="search">搜  索</a>
			</div>
			<div class="recent">
				
			</div>
			<div class="music">
			    <ul class="result"></ul>
		  </div>
		  <i>
				<video class="videoplay" controls="" loop="loop" name="media">
				      <source src="http://ws.stream.qqmusic.qq.com/203451420.m4a?fromtag=46" type="audio/mp4">
				</video>
			</i>
  </div>
</template>

<script>
//import {getmusic} from "@/musicfun/musicfun.js"
export default {
  name: 'disbox',
  data () {
    return {
      msg: "Welcome to dis page"
      
    }
  },
//	beforeRouteEnter(to,form,next){
//		
//	},


}

$(document).on("touchend",function music(){
	    let list=[];
	    if(localStorage.getItem('recent')){
	        var recent=localStorage.getItem('recent').split(",");
	    }else{
			    var recent=["霍尊","victory","一个忧伤"];
	    }
	    

			$(".txt").on("focus",function(){
				$(this).css({
					'outline':"none",
					'box-shadow':' 0 -8px 10px -5px #D1AB57 inset',
				})
			})
			$(".txt").on("blur",function(){
				$(this).css({
					'outline':"none",
					'box-shadow':' 0 0 0px 0 #D1AB57 inset',
				})
			})			

			$(".search").on("touchstart",function(event){
				  event.stopPropagation();
				  var t = $('.txt')[0].value;
				  load(t);
			});
			
//			$(".txt").on("keyup",load());
			
			function load(k){
				
				            if(k!=null){
				            	var kw = k;
				            	$('.txt')[0].value=kw;
				            }else{
				            	var kw = "我是歌手";
				            }
		                list=[]
                    $.ajax({
														type:"get",
														url:"https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w="+kw+"&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=30&n=30&p=1&_=1489396018874&jsonpCallback=_jsonpky20i0jqjfr",
														dataType:"jsonp",
														jsonp:"jsonpCallback",  
														async:true,
														success:function(data){
															list = list.concat(data.data.song.list)
													  }
										});		                
                    $.ajax({
												type:"get",
												url:"https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w="+kw+"&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=30&n=30&p=2&_=1489396018874&jsonpCallback=_jsonpky20i0jqjfr",
												dataType:"jsonp",
												jsonp:"jsonpCallback", 
												async:true,
												success:function(data){
													list = list.concat(data.data.song.list)												
                          putinresult(list);
                          return list;
											  }
										})
		    }
			
			function putinresult(list){
					$(".music")[0].style.display="block";
					$(".result").html("");
					for(var i=0;i<list.length;i++){
							$(".result").append("<li ind='"+i+"' class='"+list[i].songid+"' songname='"+list[i].songname+"' singername='"+list[i].singer[0].name+"' singerp='"+list[i].singer[0].mid+"'><p>"+list[i].songname+"</p><span>"+list[i].albumname+"</span><strong>"+list[i].singer[0].name+"</strong></li>")
					}														
			}

			function creatvideo(a){
				  $("body i").empty();
				  $("body i").append("<video  class='videoplay' controls='' autoplay='' loop='loop' name='media'></video>");
				  $(".videoplay").append("<source  src='http://ws.stream.qqmusic.qq.com/"+a+".m4a?fromtag=46' type='audio/mp4'>")
			}
			
			function creatrecent(a){
				  $(".recent").empty();
				  for(let i = 0 ;i<a.length;i++){
					    var span = document.createElement("span");
					    span.innerHTML=a[i];
					    span.style.border="1px solid "+changeC();
					    span.style.position="relative";
					    $(".recent").append(span);
					
				  	  var em = document.createElement("em");
					    em.style="display:block;background-color:rgba(255,0,0,0.3);width:14px;height:14px;position:absolute;top:0;right:5px;border-radius:50%";
					    span.appendChild(em)
				  }
			}

			function changeC(){
				var s = "#";
				for(var i = 0;i<6;i++){
					s+=parseInt(Math.random()*17).toString(16)
				}
				if(s=="#ffffff"||s=="#FFFFFF"){
					 changeC();
				}else{
				   return s;
				}

			}
			creatrecent(recent);
			
			$(".result").on("touchend","li",function(event){
				 event.stopPropagation();
				$("i")[0].style.display="block";
				var songid = $(this)[0].className;
				creatvideo(songid);
				if(recent.indexOf($(this).attr("songname"))==-1){
				    recent.unshift($(this).attr("songname"));
				    creatrecent(recent);
				    localStorage.setItem('recent',recent);
				    $("i").append("<img style='width:90  px;height:65%;border-radius: 50%;position: absolute;top:0;left: 10px;' src='//y.gtimg.cn/music/photo_new/T001R300x300M000"+$(this).attr("singerp")+".jpg?'>")
				    $("i").append("<p style='position: absolute;padding-left: 60px;box-sizing: border-box;top: 25px;width:100%;font-size: 18px;font-style: normal;text-align: center;color: #D1AB57;'>"+$(this).attr('singername')+"<br/><span style='text-align: center;font-size: 13px;margin-top: 20px;'>"+$(this).attr('songname')+"</span></p>") 
				    $("i").append("<p class='nextone' ind='"+$(this).attr('ind')+"' style='position: absolute;width:26px;height:26px;border-radius:50%;box-sizing: border-box;top: 35px;right:15px;text-align:center;line-height:26px;'></p>") 
				    $(".nextone").css({"background":"url(../static/imgbg/bg-icon-v.png)","backgorund-size":"cover"})  
				}else{return}
			})
      

      var next=true;
      $("i").on("touchend",".nextone",function(event){
      	event.stopPropagation();
      	if(next){
		      	let index = parseInt($(this).attr("ind"))+1;
		      	console.log(list);
		      	if(list.length>index){
				      	let songid = list[index].songid;
				      	console.log(list[index]);
				      	console.log(index,songid);
				      	creatvideo(songid);
						    $("i").append("<img style='width:90  px;height:65%;border-radius: 50%;position: absolute;top:0;left: 10px;' src='//y.gtimg.cn/music/photo_new/T001R300x300M000"+list[index].singer[0].mid+".jpg?'>")
						    $("i").append("<p style='position: absolute;padding-left: 60px;box-sizing: border-box;top: 25px;width:100%;font-size: 18px;font-style: normal;text-align: center;color: #D1AB57;'>"+list[index].singer[0].name+"<br/><span style='text-align: center;font-size: 13px;margin-top: 20px;'>"+list[index].songname+"</span></p>") 
						    $("i").append("<p class='nextone' ind='"+index+"' style='position: absolute;width:26px;height:26px;border-radius:50%;box-sizing: border-box;top: 35px;right:15px;text-align:center;line-height:26px;'></p>") 
						    $(".nextone").css({"background":"url(../static/imgbg/bg-icon-v.png)","backgorund-size":"cover"})  		      	
				      	next=false;
		      	}else{return}
      	}else{
      			setTimeout(function(){next=true},2000)
      	}
      })

			$(".recent").on("touchend","span",function(event){
				 event.stopPropagation();
				var re = $(this).text();
				load(re);
			})
			
			$(".recent").on("touchend","em",function(event){
           event.stopPropagation();
					$(this)[0].parentNode.remove();
					var con = $(this)[0].parentNode.innerText;
					var index = recent.indexOf(con);
					if (index > -1) {
					recent.splice(index, 1);
					}
					localStorage.setItem("recent",recent)
			})
})	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.disbox{height: 100%;display: flex;flex-direction: column;align-items: center;}
.box{background-color: #D1AB57;height: 30px;display: flex;margin-top: 15px;width: 80%;}
.box a{line-height:30px}
.txt{width: 75%;height: 30px;border:1px solid #D1AB57;box-sizing: border-box;text-indent: 10px;}
.search{width: 25%;text-align: center;color: #222;}
.recent{
	width: 85%;height: 60px;
	display: flex;justify-content: center;
	flex-wrap: wrap;overflow: hidden;
	margin: 14px 0;
}
.music{width: 100%;}
.music .result{
	width: 100%;
	margin-top: 10px;
}
.disbox i{position:fixed!important;top:478px!important;width: 100%!important;border: 0!important;display: none;}

</style>
