<template>
<transition name="todoTra" appear>
    <div>
      <li>
        <label>
          <!-- 不推荐使用v-model:checked 
            v-model:checked 效果等同于v-model:value 即v-model
            这是因为 这个是props属性 虽然不会报错(这是因为保存的是地址引用，没改地址，只是改里面的属性值 vue没监测到)，不推荐在上面直接修改数据 -->
          <!-- @change绑定改变事件 就是jq的onchange -->
            <!-- <input type="checkbox" v-model="todo.done" /> -->
            <input type="checkbox" :checked="todo.done" @change="changeStatus(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <!-- $event vue中获取原生event -->
            <input v-show="todo.isEdit" 
              :value="todo.title" 
              @blur="update(todo,$event)"
              ref="inputBox"
              />
        </label>
        <button class="btn btn-danger" @click="del(todo)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="edit(todo)">编辑</button>
      </li>
      <!-- <input type="checkbox" /> test <button>删除</button> -->
    </div>
</transition>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: "TodoItem",
    props:{
      todo:{
        type:Object,
        require:true
      }
    },
    methods:{
      changeStatus(id){
        //通知APP.vue改变todo完成状态
        this.$bus.$emit('changeTodoStatus',id);
      },
      del(todo){
        var ret=confirm("确认删除事件："+todo.title);
        if(ret) {
          //通知APP.vue删除
          // this.$bus.$emit('delTodo',todo);
          // 发布消息
          pubsub.publish('delTodo',todo);

        }
      },
      edit(todo){ //props属性最好不要直接改，用事件来操作
        // todo.isEdit=true;
        // 响应式数据添加$set  
        if(!todo.hasOwnProperty('isEdit')) this.$set(todo,'isEdit',true);
        else todo.isEdit=true;
        // console.log(event);
        console.log(this.$refs.inputBox);
        /*
          下面这样写不生效，这是因为当前input没有显示，所以让一个不生效的input获取焦点会失败的
          原理就是vue在edit这个函数完全执行完后才会重新解析模版，不是改一个立马生效
          解决方法：
            1、使用setTimeout定时器
            2、使用$nextTick函数，该函数内指定一个回调函数f，f会在下一次dom重新解析后执行
        */
        // this.$refs.inputBox.focus();
        // setTimeout(()=>{this.$refs.inputBox.focus()},200)
        this.$nextTick(function(){
          this.$refs.inputBox.focus()
        })
      },
      update(todo,event){//props属性最好不要直接改，用事件来操作
        if(event.target.value.trim()=="") {
          alert("不允许为空");
          return
        }
        todo.title=event.target.value;
        todo.isEdit=false;
      }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
/* css实现悬浮 变色 */
li:hover{
  background-color: grey;
}
/* css实现悬浮显示删除按钮 */
li:hover button{
  display: block;
}

/* 动画 */
.todoTra-enter-active{
  animation: todoAni 1s linear;
}
.todoTra-leave-active{
  animation: todoAni 1s linear reverse;
}
@keyframes todoAni {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0);
  }
}
</style>