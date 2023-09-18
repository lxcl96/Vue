<template>
    <div class="row" >
        <div v-show="info.userList" v-for="user in info.userList" :key="user.id">
            <User :userInfo="user"/>
        </div>
        <!-- 友好界面显示放在这里最合适，虽然放在UserSearch组件更方便 -->
        <span v-show="info.welcome">Welcome to use</span>
        <h3 v-show="info.loading">Loading...</h3>
        <h3 v-show="info.errMsg">{{info.errMsg}}</h3>
    </div>
</template>

<script>
import User from './User.vue'
export default {
    name:'UserList',
    components:{User},
    data(){
        return {
            info:{
                userList:[],
                welcome:true,
                loading:false,
                errMsg:""
            }
        }
    },
    mounted(){
        this.$bus.$on('updateUserList',(dataObj)=>{
            // console.log(dataObj);
            // this.info=dataObj; //这样赋值有问题，这个是直接替换引用地址，会导致值丢失
            // es6字面量赋值,有就更新，没有就不变，不会丢失属性
            this.info={...this.info,...dataObj}
        });
    },
    beforeDestory(){
        this.$bus.$off('updateUserList');
    }
}
</script>

<style>

</style>