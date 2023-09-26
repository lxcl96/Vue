import Vue from 'vue'
// 引入插件
import vueRoute from 'vue-router'
// 引入组件，用于路由跳转
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 使用插件
Vue.use(vueRoute)

// 创建并暴露自己的路由器
export default new vueRoute({

    // 配置路由规则 ,必须是数组 
    routes:[
        // 可以有多组路由规则  这种时普通的单级路由
        {
            path:'/about',
            component: About
        },
        {
            path:'/home',
            component:Home,
            // children配置多级路由 数组
            children:[
                {
                    // 子路由不要从/开始，/代表根
                    path:'news',
                    component:News
                } 
                ,
                {
                    path:'message',
                    component:Message,
                    // 用三级路由演示 参数query传递
                    children:[
                        // {   
                        //     name:'detailName',
                        //     path:'detail',
                        //     component:Detail,
                        // },
                        {   
                            name:'detailName',
                            path:'detail/:id/:title', //这里用什么名字占位，实际参数名就是这个
                            component:Detail,
                            // 第一种写法
                            // props:{id:11111,title:"zhege是标题"},
                            // 第二种写法  布尔值
                            // props:true,
                            // 第三种写法 函数
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})