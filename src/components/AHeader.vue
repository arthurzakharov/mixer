<template>
    <header class="header">
      <h1 class="header__title">Super Crypto Mixer</h1>
    </header>
</template>

<script>
export default {
  name: 'AHeader'
}
</script>

<style lang="scss" scoped>
.header {
  padding: 15px;
  box-shadow: 0px -5px 50px dodgerblue;
  &__title {
    font-size: 22px;
    line-height: 24px;
    color: dodgerblue;
    text-align: center;
    font-weight: 400;
  }
}

@media screen and (min-width: 768px) {
  .header {
    padding: 20px;
    &__title {
      font-size: 24px;
      line-height: 26px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .header {
    padding: 25px;
    &__title {
      font-size: 26px;
      line-height: 28px;
    }
  }
}
</style>
