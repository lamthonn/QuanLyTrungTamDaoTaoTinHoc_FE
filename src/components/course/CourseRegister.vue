<template>
  <a-modal v-model:open="visible" width="30%" title="Đăng ký khóa học" :centered="true" @ok="handleOk" class="addNewCourse">
    <a-input  placeholder="Họ và tên học viên" />
    <a-input style="margin-top:5px;" 
        placeholder="ngày tháng năm sinh" />
    <a-input style="margin-top:5px;" 
        placeholder="Email" />
    <a-input style="margin-top:5px;" 
        placeholder="Số điện thoại liên hệ" />
    
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