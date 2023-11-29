<template>
  <a-modal v-model:open="visible" width="80%" :centered="true" @ok="handleOk" class="addNewCourse">

  </a-modal>
</template>

<script>
export default {
    props: {
        value:{
            type: String,
            default: null,
        }
    },
    setup(){
        
    }
}
</script>

<style>

</style>