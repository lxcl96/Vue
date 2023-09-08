<template>
  <div class="todo-footer" v-show="all">
      <label>
        <!-- 一般写法 -->
      <!-- <input type="checkbox" @click="selectAll" :checked="isAll"/> -->
      <!-- 借助v-model更好的写法 因为这里绑定的值我们并没有修改checked  我们改的是todos-->
      <input type="checkbox" v-model:checked="isAll"/>
      </label>
      <span>
      <span>已完成{{done}}</span> / 全部{{all}}
      </span>
      <button class="btn btn-danger" @click="clearAllDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name: "TodoFooter",
    //计算属性
    computed:{
      done(){
        // var done=0;
        // this.todos.forEach(todo=>{
        //   if(todo.done) done++;
        // })
        // return done
        return this.todos.reduce((ret,todo)=>{
          if(todo.done) ret++;
          return ret;
        },0)
      },
      all(){
        return this.todos.length;
      },
      // 计算属性的完整写法
      isAll:{
        get(){
          return this.done == this.all&&this.all>0;
        },
        set(value){
          // 这里的value就是checked的值 true or false
          // console.log(value);
          // this.selectAllTodos(value);
          this.$emit('selectAllTodos',value)
        }
      }
  },
  // props:['todos','selectAllTodos',"clearAllDoneTodos"],
  props:['todos'],
  methods:{
    // selectAll(event){
    //   // console.log(event.target.checked);
    //   this.selectAllTodos(event.target.checked);
    // },
    clearAllDone(){
      // this.clearAllDoneTodos();
      this.$emit('clearAllDoneTodos');
    },
  }
}

</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>