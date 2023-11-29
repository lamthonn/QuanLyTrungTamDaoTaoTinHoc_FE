<template>
  <a-modal v-model:open="visible" width="80%" :centered="true" @ok="handleOk" class="addNewCourse">
    
  </a-modal>
</template>

<script>
import { ref } from 'vue';
import { Modal,FormItem, Input,Upload  } from 'ant-design-vue/es/components'
export default {
    components:{
       AModal:Modal,
       AFormItem:FormItem,
       AInput:Input,
   },
   setup(){
    const visible = ref(false);
    const handleOk = () => {
        console.log("running...");
    }
    return{
        visible,
        handleOk
    }
   }

}
</script>

<style>

</style>