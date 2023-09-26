import Vue from 'vue'
// 引入插件
import vueRouter from 'vue-router'
// 引入组件，用于路由跳转
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 使用插件
Vue.use(vueRouter)

// 创建并暴露自己的路由器
const router=new vueRouter({
    mode:'hash',//默认是hash, 可改为history

    // 配置路由规则 ,必须是数组 
    routes:[
        // 可以有多组路由规则  这种时普通的单级路由
        {
            path:'/about',
            component: About,
            // 路由元信息 用于配置自定义数据
            meta:{
                isAuth:false,//(可以不写)
                title:'About'
            }
        },
        {
            path:'/home',
            component:Home,
            meta:{title:'Home'},
            // children配置多级路由 数组
            children:[
                {
                    // 子路由不要从/开始，/代表根
                    path:'news',
                    component:News,
                    // 路由元信息 用于配置自定义数据
                    meta:{
                        isAuth:true,
                        title:'News'
                    },
                    beforeEnter(to,from,next){
                        // 独享路由守卫
                        if(to.meta.isAuth) {
                            if(localStorage.getItem('id')==='002') {
                                next();
                            } else{
                                alert("鉴权失败");
                                return;
                            }
                        }
                        // 放行
                        next();
                    }
                } 
                ,
                {
                    path:'message',
                    component:Message,
                    meta:{
                        isAuth:true,
                        title:'Messages'
                    },
                    // 用三级路由演示 参数query传递
                    children:[
                        // {   
                        //     name:'detailName',
                        //     path:'detail',
                        //     component:Detail,
                        // },
                        {   
                            name:'detailName',
                            path:'detail', //props代替param，则不需要占位
                            // path:'detail/:id/:title', //这里用什么名字占位，实际参数名就是这个
                            component:Detail,
                            meta:{
                                isAuth:true,
                                title:'Detail'
                            },
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

// 在new router后面
// 调用时机：初始化、路由组件切换之前
// router.beforeEach((to,from,next)=>{
//     // console.log(to,from,next);
//     //鉴权字段，看看那个需要鉴权
//     if(to.meta.isAuth) {
//         if(localStorage.getItem('id')==='002') {
//             next();
//         } else{
//             alert("鉴权失败");
//             return;
//         }
//     }
//     // 放行
//     next();
// })

// 调用时机：初始化、路由组件成功切换之后
router.afterEach((to,from)=>{
    document.title = to.meta.title ||'Index'
})

export default router


