<template>
  <div>
    <li>
      <label>
        <!-- 不推荐使用v-model:checked 
          v-model:checked 效果等同于v-model:value 即v-model
          这是因为 这个是props属性 虽然不会报错(这是因为保存的是地址引用，没改地址，只是改里面的属性值 vue没监测到)，不推荐在上面直接修改数据 -->
        <!-- @change绑定改变事件 就是jq的onchange -->
          <!-- <input type="checkbox" v-model="todo.done" /> -->
          <input type="checkbox" :checked="todo.done" @change="changeStatus(todo.id)"/>
          <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" @click="del(todo)">删除</button>
    </li>
    <!-- <input type="checkbox" /> test <button>删除</button> -->
  </div>
</template>

<script>
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
          this.$bus.$emit('delTodo',todo);
        }
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
</style>