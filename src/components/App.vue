<template>
  <div id="app" class="app">
    <a-header />
    <router-view></router-view>
    <a-footer />
  </div>
</template>

<script>
import AHeader from './AHeader';
import AFooter from './AFooter';

export default {
  name: 'app',
  components: { AHeader, AFooter },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles";

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

<!--<template>-->
  <!--<div id="app" class="app">-->
    <!--<a-header />-->
    <!--<no-ui-slider />-->
    <!--<a-footer />-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import NoUiSlider from './NoUiSlider';-->
  <!--import AHeader from './AHeader';-->
  <!--import AFooter from './AFooter';-->

  <!--export default {-->
    <!--name: 'app',-->
    <!--components: { NoUiSlider, AHeader, AFooter },-->
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

