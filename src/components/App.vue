<!--<template>-->
  <!--<div id="app" class="app">-->
    <!--<no-ui-slider />-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import NoUiSlider from '../components/NoUiSlider';-->

<!--export default {-->
  <!--name: 'app',-->
  <!--components: {NoUiSlider},-->
  <!--data() {-->
    <!--return {}-->
  <!--},-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--@import "../assets/scss/styles";-->

<!--.app {-->
  <!--min-height: 100vh;-->
  <!--display: flex;-->
  <!--flex-direction: column;-->
  <!--justify-content: space-between;-->
<!--}-->
<!--</style>-->

<template>
  <div id="app" class="app">
    <no-ui-slider />
  </div>
</template>

<script>
  import NoUiSlider from './NoUiSlider';

  export default {
    name: 'app',
    components: { NoUiSlider },
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles";
</style>

