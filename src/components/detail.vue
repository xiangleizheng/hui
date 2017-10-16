<template>
  <div>
    <div class="bb" v-if="num==1">
    	<img src="../../static/imgsm/y1.png"><span>{{ss[0]}}</span>
    	<p class="pri">英雄价格：{{price}}</p>
    	<div class="jineng">
    		<p class="jn">英雄技能</p>
    		<!--<span>被动 {{jineng[0].beidong}}</span>-->
    		<span>Q {{jineng[0].Q}}</span>
    		<span>W {{jineng[0].W}}</span>
    		<span>E {{jineng[0].E}}</span>
    		<span>R {{jineng[0].R}}</span>
    	</div>
    	<!--<div class="skill">
    		<span>{{skill[0].one}}</span>
    		<span>{{skill[0].two}}</span>
    		<span>{{skill[0].three}}</span>
    		<span>{{skill[0].four}}</span>
    	</div>-->
    </div>        
    <div class="bb" v-if="num==2">
    	<img src="../../static/imgsm/y2.png"><span>{{ss[1]}}</span>
    	<p class="pri">英雄价格：{{price}}</p>
    	<div class="jineng">
    		<p class="jn">英雄技能</p>
    		<!--<span>被动 {{jineng[0].beidong}}</span>-->
    		<span>Q {{jineng[1].Q}}</span>
    		<span>W {{jineng[1].W}}</span>
    		<span>E {{jineng[1].E}}</span>
    		<span>R {{jineng[1].R}}</span>
    	</div>    
    </div>        
    <div class="bb" v-if="num==3">
    	<img src="../../static/imgsm/y3.png"><span>{{ss[2]}}</span>
    	<p class="pri">英雄价格：{{price}}</p>
    	<div class="jineng">
    		<p class="jn">英雄技能</p>
    		<!--<span>被动 {{jineng[0].beidong}}</span>-->
    		<span>Q {{jineng[2].Q}}</span>
    		<span>W {{jineng[2].W}}</span>
    		<span>E {{jineng[2].E}}</span>
    		<span>R {{jineng[2].R}}</span>
    	</div>     	
    </div>        
    <div  class="bb" v-if="num==4">
    	<img src="../../static/imgsm/y4.png"><span>{{ss[3]}}</span>
    	<p class="pri">英雄价格：{{price}}</p>
    	<div class="jineng">
    		<p class="jn">英雄技能</p>
    		<!--<span>被动 {{jineng[0].beidong}}</span>-->
    		<span>Q {{jineng[3].Q}}</span>
    		<span>W {{jineng[3].W}}</span>
    		<span>E {{jineng[3].E}}</span>
    		<span>R {{jineng[3].R}}</span>
    	</div>     	
    </div>        
    <div class="bb" v-if="num==5">
    	<img src="../../static/imgsm/y5.png"><span>{{ss[4]}}</span>
    	<p class="pri">英雄价格：{{price}}</p>
    	<div class="jineng">
    		<p class="jn">英雄技能</p>
    		<!--<span>被动 {{jineng[0].beidong}}</span>-->
    		<span>Q {{jineng[4].Q}}</span>
    		<span>W {{jineng[4].W}}</span>
    		<span>E {{jineng[4].E}}</span>
    		<span>R {{jineng[4].R}}</span>
    	</div>     	
    </div>        
    <div class="bb" v-if="num==6">
    	<img src="../../static/imgsm/y6.png"><span>{{ss[5]}}</span>
    	<p class="pri">英雄价格：{{price}}</p>
    	<div class="jineng">
    		<p class="jn">英雄技能</p>
    		<!--<span>被动 {{jineng[0].beidong}}</span>-->
    		<span>Q {{jineng[5].Q}}</span>
    		<span>W {{jineng[5].W}}</span>
    		<span>E {{jineng[5].E}}</span>
    		<span>R {{jineng[5].R}}</span>
    	</div>     	
    </div>        
    <div class="bb" v-if="num==7">
    	<img src="../../static/imgsm/y7.png"><span>{{ss[6]}}</span>
    	<p class="pri">英雄价格：{{price}}</p>
    	<div class="jineng">
    		<p class="jn">英雄技能</p>
    		<!--<span>被动 {{jineng[0].beidong}}</span>-->
    		<span>Q {{jineng[6].Q}}</span>
    		<span>W {{jineng[6].W}}</span>
    		<span>E {{jineng[6].E}}</span>
    		<span>R {{jineng[6].R}}</span>
    	</div>     	
    </div>        
    <div class="bb" v-if="num==8">
    	<img src="../../static/imgsm/y8.png"><span>{{ss[7]}}</span>
    	<p class="pri">英雄价格：{{price}}</p>
    	<div class="jineng">
    		<p class="jn">英雄技能</p>
    		<!--<span>被动 {{jineng[0].beidong}}</span>-->
    		<span>Q {{jineng[7].Q}}</span>
    		<span>W {{jineng[7].W}}</span>
    		<span>E {{jineng[7].E}}</span>
    		<span>R {{jineng[7].R}}</span>
    	</div>     	
    </div>        
    <div class="bb" v-if="num==9">
    	<img src="../../static/imgsm/y9.png"><span>{{ss[8]}}</span>
    	<p class="pri">英雄价格：{{price}}</p>
    	<div class="jineng">
    		<p class="jn">英雄技能</p>
    		<!--<span>被动 {{jineng[0].beidong}}</span>-->
    		<span>Q {{jineng[8].Q}}</span>
    		<span>W {{jineng[8].W}}</span>
    		<span>E {{jineng[8].E}}</span>
    		<span>R {{jineng[8].R}}</span>
    	</div>     	
    </div>        
    <button @click="fn">return</button>
  </div>
</template>

<script>
export default {
	 data(){
	 	return{
	 			 ss:["无双剑姬 菲奥娜","不祥之刃 卡特琳娜","时间刺客 艾克","寒冰射手 艾希","圣枪游侠 卢锡安","无极剑圣 易","疾风剑豪 亚索","曙光女神 蕾欧娜","影流之主 劫"],
	 			 price:"4500点券/6300金币",
	 			 jineng:[
	 			 {"beidong":"无双剑舞","Q":"空破斩","W":"劳伦特心眼刀","E":"剑术","R":"无双挑战"},
	 			 {"beidong":"贪婪","Q":"弹射之刃","W":"伺机待发","E":"瞬步","R":"死亡莲华"},
	 			 {"beidong":"Z型驱动共振","Q":"时间卷曲器","W":"时光交错","E":"相位俯冲","R":"时空断裂"},
	 			 {"beidong":"冰霜射击","Q":"射手的专注","W":"万箭齐发","E":"鹰击长空","R":"魔法水晶箭"},
	 			 {"beidong":"圣光银弹","Q":"透体圣光","W":"热诚烈弹","E":"冷酷追击","R":"圣枪洗礼"},
	 			 {"beidong":"双重打击","Q":"阿尔法突袭","W":"冥想","E":"无极剑道","R":"高原血统"},
	 			 {"beidong":"浪客之道","Q":"斩钢闪","W":"风之障壁","E":"踏前斩","R":"狂风绝息斩"},
	 			 {"beidong":"日光","Q":"破晓之盾","W":"日蚀","E":"天顶之刃","R":"日炎耀斑"},
	 			 {"beidong":"影忍法！灭魂劫","Q":"影奥义！诸刃","W":"影奥义！分身","E":"影奥义！鬼斩","R":"禁奥义！瞬狱影杀阵"},
	 			 ],
	 			 skill:[
	 			    {"one":"- 在【决斗之舞】的帮助下，菲奥娜特别擅长进行快速换血。攻击破绽后的移动速度加成，既能用来毫发无伤地逃离，又能用来发起下次攻击。",
	 			    "two":"- 菲奥娜的【无双挑战】非常有用，甚至能帮她解决那些最为坚挺的对手，并在成功后提供恢复效果，所以，不要在攻击敌人的前排英雄时犹豫不决",
	 			    "three":"- 【决斗之舞】会显示出菲奥娜将要尝试对你进行攻击的地方，所以准备好在她尝试时教训她。",
	 			    "four":"- 在对菲奥娜施放禁锢类技能时要特别小心。如果她的【劳伦特心眼刀】还在可用状态，那么她就能将这类技能的效果反过来对付你。"},
	 			    {"one":"- 等到敌方正与我方缠斗之际，用【E瞬步】加入战局，并释放一朵毁灭性的【R死亡莲华】。",
	 			    "two":"- 对友军英雄、匕首或小兵使用瞬步是个很好的逃跑手段。",
	 			    "three":"- 卡特琳娜的技能对目标造成魔法伤害，尽管她购买增加攻击的物品，你也可使用魔抗应对。",
	 			    "four":"- 推荐为卡特琳娜的死亡莲华保留一个限制技能。"}	 			    
	 			 
	 			 ]
	 	}

	 },
   computed:{
   	num(){
   		return this.$route.params.x
    }
   },
   methods:{
   	fn(ev){
   		ev.stop;
   		this.$router.go(-1);
   	}
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
	position: absolute;
	width: 50px;
	height: 50px;
	text-align: center;
	line-height: 48px;
	border-radius: 50%;
	top:280px;
	left: 10px;
	z-index: 50;
	background-color: rgba(66,185,131,0.9);
	border:1px solid transparent;
}
div{height: 100%;background-color: #121212;}
.bb{color: #DFAB57;height:auto;}
.bb>span{position: absolute;z-index: 5;top: 360px;left:0;font-size: 35px;font-weight:700;width: 100%;text-align: center;color: #e0a41d;text-shadow: 0 2px 0 #B04818 ;}
div>.pri{width: 100%;position: absolute;z-index: 5;top: 430px;left:0;text-align: center;background: linear-gradient(to right,transparent 10%,black,transparent 90%);}
div>img{width: 100%;filter:grayscale(99%);}
.jineng{position: relative;}
.jineng>span{display: block;width: 100%;font-size: 15px;position:initial;text-align: left;text-indent: 180px;margin-top: 1px;font-weight: 700;}
.jineng .jn{position: absolute;top:29px;left:20px;background: linear-gradient(to right,transparent,#DFAB57,transparent); color:black;padding: 5px 30px;}
.skill>span{display: block;width: 100%;font-size: 15px;position:initial;text-align: left;}
</style>
