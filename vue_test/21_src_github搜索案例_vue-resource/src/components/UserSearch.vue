<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model:value="searchName"/>&nbsp;
        <button @click="searchGithubUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name:'UserSearch',
    data(){
        return {
            searchName:""
        }
    },
    methods:{
        searchGithubUsers(){
            console.log(this);
            if(this.searchName==""||this.searchName.trim().length==0) {
                alert("不允许为空！");
                this.searchName="";
                return
            }
    
            var dataObj = {
                welcome:false,
                loading:true,
                errMsg:'',
                userList:[]
            }
            //变成loading  封装成对象传过去最好
            this.$bus.$emit('updateUserList',dataObj);
            this.$http.get('https://api.github.com/search/users?q=' + this.searchName).then(
                res=>{
                    // console.log(res);
                    if(res.status!=200) {
                        alert("获取信息失败！");
                        console.log("获取信息失败！",res);
                        return;
                    }
                    var dataObj = {
                        // welcome:false,
                        loading:false,
                        errMsg:'',
                        userList:res.data.items
                    }
                    //展示用户数据  封装成对象传过去最好
                    this.$bus.$emit('updateUserList',dataObj);
                },
                err=>{
                    console.log(1,err);
                    var dataObj = {
                        // welcome:false,
                        loading:false,
                        errMsg:err.message,
                        userList:[]
                    }
                    //展示接口错误原因  封装成对象传过去最好
                    this.$bus.$emit('updateUserList',dataObj);
                }
            ).catch(err=>{
                console.log(2,err);
                var dataObj = {
                    // welcome:false,
                    loading:false,
                    errMsg:err.message,
                    userList:[]
                }
                //展示逻辑错误原因  封装成对象传过去最好
                this.$bus.$emit('updateUserList',dataObj);
            })

        }
    }
}
</script>

<style>

</style>