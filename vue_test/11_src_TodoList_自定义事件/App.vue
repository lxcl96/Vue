<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- <TodoHeader :insert="insert"/> -->
                <TodoHeader @addObj="insert"/>
                <TodoList :todos="todos" :changeTodoStatus="changeTodoStatus" :delTodo="delTodo"/>
                <!-- <TodoFooter :todos="todos" :selectAllTodos="selectAllTodos " :clearAllDoneTodos="clearAllDoneTodos"/> -->
                <TodoFooter :todos="todos" @selectAllTodos="selectAllTodos " @clearAllDoneTodos="clearAllDoneTodos"/>
            </div>
        </div>
    </div>

</template>
    
<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
    name: 'App',
    components: {TodoHeader,TodoList,TodoFooter},
    data(){

      // 简洁写法
      var list = JSON.parse(localStorage.getItem("todos")) || []
      /*
      var list = localStorage.getItem("todos");
      list=JSON.parse(list);
      // console.log(list==null); {'id':"001","title":"睡觉","done":false}
      if(!list) list=[];
      */
      return {
          todos:list
      }
    },
    methods:{
      insert(todoObj){
        console.log("插入数据：",todoObj)
        //头插
        this.todos.unshift(todoObj);
        //尾插
        // this.todos.push(todoObj);
      },
      changeTodoStatus(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id) {
            todo.done=!todo.done;
            // localStorage.setItem("todos",JSON.stringify(this.todos));
          }
        });
      },
      delTodo(todo){
        this.todos = this.todos.filter((item=>{
          return item !== todo;
        }));
      },
      selectAllTodos(status){
        this.todos.forEach(item=>item.done=status);
        // localStorage.setItem("todos",JSON.stringify(this.todos));
      },
      clearAllDoneTodos(){
        this.todos = this.todos.filter(todo=>{
          return !todo.done;
        })
      }
    },
    // 使用监视来实现动态更新localStorage 比增加时新，删除时更新更简洁
    watch:{
      todos:{
        immediate:false,
        // 第二种方法：开启深度监视，那么属性值变化也会被监视到 就不需要在勾选时再次加代码了
        deep:true,
        handler(newValue,oldValue){
          // 增加删除时才更新，所以需要看个数即可 发生变化那么肯定newValue!=oldValue 
          // 引用数据地址不变，里面的值变化了，那么就需要TodoItem单独写 全选也是
          // 第二种方法：开启深度监视，那么属性值变化也会被监视到
          localStorage.setItem("todos",JSON.stringify(newValue));
        }
      }
    }
}
</script>
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>