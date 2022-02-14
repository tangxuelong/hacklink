<!-- Please remove this file from your project -->
<template>
  <div class="">
    <Header></Header>
    <!-- siwper -->
    <!-- Slider main container -->
    <div class="swiper" style="width:600px;height:300px">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
      </div>
    </div>
    <!-- posts list -->
  </div>
</template>

<script>
export default {
  name: 'PostsList',
  components: {
    Header: () => import('~/components/Header.vue')
  },
  mounted() {
    const swiper = this.$swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
  }
}
</script>
<style scoped>
.swiper {
  width: 600px;
  height: 300px;
}
</style>