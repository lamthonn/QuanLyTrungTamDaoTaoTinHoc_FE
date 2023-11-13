
import { Modal } from 'bootstrap';
<template>
    <a-modal v-model:open="visible" title="đăng bài viết mới" width="80%" :centered="true" @ok="handleOk">
        <a-form-item label="Title">
            <a-input />
        </a-form-item>
        <a-form-item label="Upload">
            <a-upload list-type="picture-card" :max-count="1">
                <div>
                    <PlusOutlined />
                <div style="margin-top: 8px">Upload</div>
                </div>
            </a-upload>
        </a-form-item>
    </a-modal>
</template>
<script>
import { ref } from 'vue';
import { Modal,FormItem, Input,Upload  } from 'ant-design-vue/es/components'
import { PlusOutlined } from '@ant-design/icons-vue';
export default{
    components:{
        AModal:Modal,
        AFormItem:FormItem,
        AInput:Input,
        AUpload:Upload,

        PlusOutlined,
    },
    setup(){
        const visible = ref(false);
        const handleOk= () => {

        }

        return{
            visible,

            handleOk,
        }
    }
}
</script>
