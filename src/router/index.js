import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import dis from '@/components/dis'
import skin from '@/components/skin'
import yuan from '@/components/yuan'
import star from '@/components/star'
import omiga from '@/components/omiga'
import rock from '@/components/rock'
import detail from '@/components/detail'
import info from '@/components/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dis',
      name: 'dis',
      component: dis
    },{
    	path:"/info",
      name: 'info',
    	component:info
    },
    {
      path: '/skin',
      name: 'shin',
      component: skin,
      children:[
        {
        	path:"/",
        	component:yuan
        },
        {
        	path:"yuan",
        	component:yuan
        },
        {
        	path:"star",
        	component:star
        },
        {
        	path:"omiga",
        	component:omiga
        },        
        {
        	path:"rock",
        	component:rock
        },{
		    	path:"detail/:x",
		    	component:detail
		    }      
      ]
    },    
    {
      path: '*',
      redirect:{"name":"Hello"}
    },     
  ]
})
