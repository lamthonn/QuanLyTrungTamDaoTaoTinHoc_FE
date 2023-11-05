<template>
  <Header />
    <router-view ></router-view>
  <Footer />
</template>
<script>
  import Header  from './layout/Header';
  import Footer  from './layout/Footer';
  export default {
    components: {
      Header,
      Footer
    },
    setup() {

    },
  };
</script>
<style scoped>
  
</style>
