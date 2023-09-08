<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
        v-model="item" @keydown.enter="pressEnter"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: "TodoHeader",
    data(){
        return {
            item:""
        }
    },
    // props:{
    //   insert:{
    //     type:Function,
    //     require:true
    //   }
    // },
    methods:{
        pressEnter(event){
          //第二种方法通过事件获取value值
          // console.log(event.target.value)
          // alert(this.item);
          //包装成对象，等待插入
          if(this.item.trim()!=""||this.item.trim().length!=0) {
            var itemObj = {
              id:nanoid(),
              title:this.item,
              done:false
            };
            //通过this调用
            // this.insert(itemObj);
            this.$emit('addObj',itemObj)
            this.item="";
          }
        }
    }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>