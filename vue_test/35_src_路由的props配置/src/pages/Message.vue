<template>
    <div>
        <ul>
            <li v-for="message in messages" :key='message.id'>
                <!-- query传参 简单写法 -->
                <!-- <router-link :to="'/home/message/detail?id='+message.id+'&title='+message.title" >{{message.title}}</router-link > -->
                
                <!-- query传参 对象写法 -->
                <!-- <router-link 
                    :to="{
                        path:'/home/message/detail',
                        query:{
                            id:message.id,
                            title:message.title
                        }
                    }" > -->

                    <!-- params传参1 -->
                <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`" >{{message.title}}</router-link > -->
                    <!-- params传参2  必须和name搭配 不能和path否则会出错，也没有提示 -->
                    <router-link 
                    :to="{
                        name:'detailName',
                        path:'/home/message/detail',
                        query:{
                            id:message.id,
                            title:message.title
                        }
                    }" >
                
                    {{message.title}}
                </router-link >

            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Message',
    data(){
        return {
            messages:[
                {id:'001',title:"message001"},
                {id:'002',title:"message002"},
                {id:'003',title:"message003"}
            ]
        }
    }
}
</script>