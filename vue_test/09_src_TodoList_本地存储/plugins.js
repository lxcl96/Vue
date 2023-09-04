//插件本质上是 包含install方法的对象
export default { //默认暴露的简写方式
    install(Vue,x,y,z){
        console.log(Vue,x,y,z);
        //1.可以定义全局的过滤器 （vm和所有的vc都能使用）
        Vue.filter('myFilter',function(value){
            return value + "~";//功能：加个~
        })
        //2.可以定义全局的自定义指令 （vm和所有的vc都能使用）
        Vue.directive('fbind',{
            //功能：实现v-bind功能并实现自动聚焦
            //指令与元素成功绑定时（一上来）
            bind(element,binding){
                element.value=binding.value;
            },
            //指令所在的元素被插入页面时（生成dom元素时）
            inserted(element,binding){
                element.focus();
            },
            //指令所在的模版被重新解析时
            update(element,binding){
                element.value=binding.value;
            }    
            
        })
        //3.定义全局的混入mixin （vm和所有的vc都能使用）
        Vue.mixin({
            data(){
                return {
                    x: 100,
                    y: 200
                }
            }
        })
        //4.给Vue原型上添加一个方法（vm和所有的vc都能使用）
        Vue.prototype.hello=() =>{alert("你好！")}
    }
    
}