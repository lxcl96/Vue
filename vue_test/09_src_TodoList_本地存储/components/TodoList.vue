<template>
  <ul class="todo-main">
    <!-- :key 自定义排序-->
    <!-- props传值指定类型要加冒号 -->
    <TodoItem v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo" 
      :changeTodoStatus="changeTodoStatus"
      :delTodo="delTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
    name: "TodoList",
    components:{TodoItem},
    props:{
      todos:{
        type:Array,
        require:true
      },
      changeTodoStatus:{
        type:Function,
        require:true
      },
      delTodo:{
        type:Function,
        require:true
      }
    }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>