<template>
  <div id="app">
       <view-box>
       			<x-header>
       			   <p class="iconfont">&#xe798;</p>
       			   <p slot="right"><span class="dl" style="color: #D1AB57;width: auto;overflow: visible;">登录</span><img class="myhead" style="display: none;width:30px;border-radius: 50%;" src="../static/imgbg/ao.png"/></p>
       			</x-header>
       			<p class="logsuc">登陆成功</p>
       			<p class="logfal">登陆失败</p>
       			<p class="regsuc">注册成功</p>
       			<p class="unlog">退出</p>
       			<div class="loginbox">
       				  <input class="uname" type="text" />
       				  <input class="pwd" type="password" />
       				  <div>
       				  	<span class="reg">注册</span>
       				  	<span class="login">登陆</span>
       				  </div>
       			</div>
			      <router-view class="vis"></router-view>
       			<tabbar> 			    	
					      <tabbar-item >
					        <span slot="label"><router-link to="/">汇阅读</router-link></span>
					      </tabbar-item>
					      
					      <tabbar-item show-dot>
					        <span slot="label"><router-link to="/dis">汇音乐</router-link></span>
					      </tabbar-item>
					      
					      <tabbar-item selected>
					        <span slot="label"><router-link to="/skin">汇游戏</router-link></span>
					      </tabbar-item>
					      
					      <tabbar-item badge="2">
					        <span slot="label"><router-link to="/info">汇设计</router-link></span>
					      </tabbar-item>
				    </tabbar>
       </view-box>
       
  </div>
</template>

<script>
import {ViewBox} from 'vux'
import { XHeader } from 'vux'
import { Tab, TabItem } from 'vux'
import { Swiper } from 'vux'
import { Tabbar, TabbarItem } from 'vux'
import { Panel } from 'vux'
export default {
  name: 'app',
  components:{
  	ViewBox,XHeader,Tab, TabItem,Swiper,Tabbar, TabbarItem,Panel
  },
  data(){
  	return{
  		list:[]
	
  	}
  }
}

$(function(){
	  var flag = true;
	  function regsuc(){
	  	$(".regsuc")[0].style.display="block";
	  	$(".regsuc").addClass("animated fadeIn")
	  	setTimeout(function(){
	  		$(".regsuc").removeClass("animated fadeIn");
	  		$(".regsuc")[0].style.display="none";
	  	},1200)
	  }
	  function logsuc(){
	  	$(".logsuc")[0].style.display="block";
	  	$(".logsuc").addClass("animated fadeIn")
	  	setTimeout(function(){
	  		$(".logsuc").removeClass("animated fadeIn");
	  		$(".logsuc")[0].style.display="none";
	  	},1200)
	  }	
	  function logfal(){
	  	$(".logfal")[0].style.display="block";
	  	$(".logfal").addClass("animated fadeIn")
	  	setTimeout(function(){
	  		$(".logfal").removeClass("animated fadeIn");
	  		$(".logfal")[0].style.display="none";
	  	},1200)
	  }		  
	  
	  function out(){
				$(".loginbox").addClass("animated bounceOutUp")
				setTimeout(function(){
				   $(".loginbox")[0].style.display="none";
					 $(".loginbox").removeClass("animated bounceOutUp")
				},500)

				flag=true;	  	
	  }
	  
		$(".dl").on("touchstart",function(event){
			 event.stopPropagation();
			if(flag){
				$(".loginbox")[0].style.display="flex";
				$(".loginbox").addClass("animated bounceInDown")
				flag=false;
			}else{out();}
		})
		
		$(".reg").on("touchstart",function(event){
			 event.stopPropagation();
			if($(".uname").val()!=""&&$(".pwd").val()!=""){
					localStorage.setItem("uname",$(".uname").val());
					localStorage.setItem("pwd",$(".pwd").val());
					$(".uname").val("");
					$(".pwd").val("");
					regsuc();
			}
		})
		$(".login").on("touchstart",function(event){
			 event.stopPropagation();
			if($(".uname").val()==localStorage.getItem("uname")&&$(".pwd").val()==localStorage.getItem("pwd")){
		    $(".uname").val("");
				$(".pwd").val("");
				logsuc();
				out();
				$(".dl")[0].style.display="none";
				$(".myhead")[0].style.display="block";
			}else{
				logfal();
			}
		})
		
		$(".myhead").on("touchstart",function(event){
			 event.stopPropagation();
			$(".unlog")[0].style.display="block";
			$(".unlog").addClass("animated fadeIn");
		})
		$(".unlog").on("touchstart",function(event){
			 event.stopPropagation();
			$(".myhead")[0].style.display="none";
			$(".dl")[0].style.display="inline-block";
			$(this).addClass("animated fadeOut");
			setTimeout(function(){
			  $(".unlog").removeClass("animated fadeOut");
				$(".unlog")[0].style.display="none";
			},600)
		})
		//播放页面效果

})
</script>

<style>
html,body,ul,ol,dl,p,h1,h2,h3,h4,h5,h6{margin: 0;padding: 0;}
a{text-decoration: none;}
ul,ol{list-style: none;}
.vux-tab-ink-bar{background-color: #D1AB57!important;}
.vux-tab-selected a{color:#D1AB57!important}
@font-face {
  font-family:'iconfont';
  src: url('../static/fonts/iconfont.eot');
  src: url('../static/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../static/fonts/iconfont.woff') format('woff'),
  url('../static/fonts/iconfont.ttf') format('truetype'),
  url('../static/fonts/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
a{color: #212121;};

html,body,#app{
	margin:0;
	width:100%;
	height: 100%!important;
	overflow: hidden;
}

.logfal,.logsuc,.regsuc,.unlog{
	display: none;
	position: absolute;
	z-index: 6;
	width: 100%;
	height: 40px;
	color: #fff;
	font-size: 20px;
	font-weight: 700;
	line-height: 40px;
	text-align: center;
	background-color: #DFAB57;
}

.loginbox{
	position: absolute;
	top: 0;
	z-index: 5;
	width: 100%;
	height: 35%;
	background: rgba(0,0,0,0.8);
	display: none;
	flex-direction: column;
	align-items: center;
}
.loginbox input{
	margin-top: 20px;
	height: 34px;
	width: 60%;
	box-sizing: border-box;
	border: 1px solid #D1AB57;
	background-color: rgba(0,0,0,0.4);
	text-indent: 15px;
	outline: none;
	color: #D1AB57;
}
.loginbox div{
	width: 60%;
	height: 34px;
	margin: 18px;
	display: flex;
	justify-content: space-around;
}
.loginbox input:first-child{margin-top:65px ;}
.loginbox div span{
	text-align: center;
	height: 34px;
	line-height: 34px;
	box-sizing: border-box;
	border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #b88d35 0%, #6b5024 100%);
  border-image-slice: 1; 
  background-color: rgba(0,0,0,0.3); 
  color: #D1AB57;
}


#app {
    height: 100%;
}
.iconfont{
	  height: 100%;
	  box-sizing: border-box!important;
	  padding-top: 9px;
	  font-size: 100px!important;
	  color: transparent;
	  line-height: 42px;
	  background-image: linear-gradient(180deg,#D1AB57 10%,#c4a567 70%,#5d4324 100%);
	  -webkit-background-clip: text;
    box-shadow: 0 0 14px 10px rgba(255,200,0,0.4);
};


.vux-header .vux-header-right .login{color: #D1AB57;}

.vux-tab .vux-tab-item.vux-tab-selected a{color: #d1ab57!important;};
.vux-tab-ink-bar{background-color:#d1ab57!important;};
/*可视区域*/
#vux_view_box_body{overflow: hidden!important;height: 100%!important;}
.weui-tab__panel{box-sizing: border-box;padding:50px 0;overflow: hidden;height: 100%!important;}
/*router区域*/
/*.vis{overflow:auto!important;}*/

.skinbox{
	 height: 100%;
	 overflow: hidden!important;
	}
/*标题栏*/
.vux-header{
	background-image: url(../static/imgbg/bgfive.jpg);
	background-size: cover;
	position: fixed!important;
	z-index: 10!important;
	top:0!important;
	width: 100%;
	height: 50px!important;
	top:0px;

}
	.vux-header-left, .vux-header .vux-header-right{
		height:100%!important;
		top: 0!important;
    display: flex!important;
    align-items:center ;
	}
.vux-header-back{font-size:14px!important;color:#D1AB57!important;padding-left: 5px!important;} 
.left-arrow{top:0!important;}
.left-arrow:before{width:0px!important;height: 0px!important;border:0!important;}	
.vux-header-title-area, .vux-header .vux-header-title{height: 100%!important;}
.weui-tabbar{position: fixed!important;bottom: 0!important;background-image: url(/static/img/bgfive.d941bdb.jpg);background-position: 90% 85%;}
.weui-tabbar a{color:#D1AB57!important;}


.recent span{
	display: block;
	height: 25px;
	line-height: 25px;
	width: auto;margin:2px 5px;
	border-radius:15px;padding: 0 5px;margin-top: 2px;
	font-size: 12px;color:rgba(0,0,0,0.8);opacity: 0.9;}

/*音乐结果样式*/

.music .result{
	overflow-y:auto ;
	width: 100%;
	height: 270px;
}
.music .result li{
	font-size: 10px;
	width: 100%;
	height: 30px;
	line-height: 30px;
  display: flex!important;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}


.music .result li p,span,strong{
	width: 30%;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;	
}
	
.music .result li p{
	box-sizing: border-box;
	padding-left: 15px;
}
.music .result li span{
	width: 40%;
	text-align: center;
}
.music .result li strong{
	font-weight: lighter;
	box-sizing: border-box;
	padding-right: 15px;
	text-align: right;
}

.disbox i .videoplay{
	display: block;width:100%;
	background: linear-gradient(#2C3E50 0%,#271008 95%);
	height: 140px;border: 0;}

.nextone{
	background-size: cover!important;
}
/*新闻样式*/
section ul.list{
	border-radius: 15px;

}
section ul.list li{
	cursor: pointer;
	margin-bottom: 10px;
	box-sizing: border-box;
	padding:5px;
	background-color: rgba(150,120,0,0.1);
  width: 100%;
  position: relative;
  min-height: 80px;
  height: 150px;
}

section ul.list li img{
	display: inline-block;
	width: 40%;
	margin-top:2% ;
	height: 90%;
}
section ul.list li div{
	height: 100%;
	box-sizing: border-box;
	padding: 10px;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	left: 40%;
	top: 0;
}
section ul.list li div p:first-child{
	font-size: 14px;
	font-weight: bold;
}
section ul.list li div p:last-child{
	font-size: 12px;
	color: #555;
}
section ul.list li div p:last-child:before{
	content: "来源：";
	color: #BB4818;
}
section span.more{
	display: inline-block;
	width: 100%;
	height: 30px;
	line-height:30px;
	font-size: 16px;
	color: #BB4818;
	text-align: center;
	background-color: rgba(255,0,0,0.2);
	border-radius: 5px;
} 

/*设计内容*/
.pic{display: flex;flex-wrap: wrap;}
.pic>li{
	width: 44%;
	margin: 0 0 0.3% 4%;
	padding: 0;
}
.pic>li>img{
	width: 100%!important;
}

.morepic{
	width: 100%!important;
	height: 40px;
	margin: 0!important;
	line-height: 40px;
	text-align: center;
	color: #fff;
}
.tanchu .close{
	position: absolute;
	z-index: 100;
	background-color: rgba(255,0,0,0.5);
	top: 220px;
	right:20px ;
	font-style: normal;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border-radius: 20px;
	color: #fff;
}
.tanchu>img{
	
	width: 98%;
	height: 40%;
	border-radius: 8px;
}
.tanchu .title{
	position: absolute;
	top:100px;
	max-width: 90%;
	font-style: normal;
  padding: 0 10px;
	height: 40px;
	line-height: 40px;
	border-radius: 20px;
	text-align: center;
	font-size: 20px;
	color: #D1AB57;
	background-color: #000;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.tanchu>.userinfo{width: 80%;height: 90px;}
.tanchu>.userinfo>img{
	border-radius: 45px;
	background-color: #fff;
	width: 30%;
	height: 100%;
}
.tanchu>.userinfo>span{
	font-style: normal;
	display: inline-block;
	height: 100%;
	width: 70%;
	text-align: center;
	color: #fff;
	font-size: 20px;
	line-height: 90px;
}
</style>
