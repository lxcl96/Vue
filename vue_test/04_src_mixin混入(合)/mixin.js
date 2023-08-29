//mixin使用 分别暴露
export const mixin = {
    //这里可以写vc中的methods，data,mounted等(vc中可以写的配置，这里都可以)
    methods: {
        showAlert(){
            alert(this.name);
        }
    },
    //一挂载好就执行的生命周期函数
    mounted(){
        console.log("已经挂载完成！");
    }
}