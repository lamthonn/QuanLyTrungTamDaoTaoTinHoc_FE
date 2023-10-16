<template>
  <div class="container">
    <a-carousel autoplay>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </a-carousel>
  </div>
</template>

<script>
import { Carousel } from 'ant-design-vue/es/components';

export default {
  name: "Home-",
  components: {
    ACarousel: Carousel,
  },
  setup() {},
};
</script>

<style scoped>
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
:deep(.slick-slide h3) {
  color: #fff;
}
</style>