<template>
    <div class="input">
      <div class="input__close" @click="clickHandler"></div>
      <label class="input__wrapper">
        <input class="input__field" type="email" :name="`${number}_address__email`"/>
      </label>
      <label class="input__hidden">
        <input type="hidden" :value="text" :name="`${number}_address__percentage`" />
      </label>
      <span class="input__text">{{ `${text}%` }}</span>
    </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    clickHandler: {
      type: Function
    },
    text: {
      type: Number
    },
    number: {
      type: Number
    }
  },
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: block;
  &__close {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
    &:before,
    &:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: dodgerblue;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }

  }
  &__wrapper {
    display: block;
    /* total width of static close and text */
    width: calc(100% - 120px);
    margin-left: 50px;
    margin-right: 50px;
  }
  &__field {
    width: 100%;
    height: 32px;
    padding: 5px 10px;
    border: 1px solid lightskyblue;
    border-radius: 10px;
    box-shadow: 1px 1px 10px lightblue;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 20px;
    &:focus {
      border: 2px solid dodgerblue;
      outline: none;
    }
  }
  &__text {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 18px;
    line-height: 22px;
    font-weight: 300;
    color: dodgerblue;
  }
  &:only-child .input__text {
    display: none;
  }
  &:last-child:not(:only-child) .input__close {
    display: block;
  }
}

@media screen and (min-width: 768px) {
  .input {
    &__wrapper {
      width: calc(100% - 140px);
      margin-left: 60px;
      margin-right: 60px;
    }
    &__field {
      height: 36px;
      padding: 10px 15px;
      font-size: 18px;
      line-height: 22px;
    }
    &__text {
      font-size: 20px;
      line-height: 24px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .input {
    &__wrapper {
      width: calc(100% - 180px);
      margin-left: 80px;
      margin-right: 80px;
    }
    &__field {
      height: 40px;
      padding: 20px 15px;
      font-size: 20px;
      line-height: 24px;
    }
    &__text {
      font-size: 22px;
      line-height: 26px;
    }
  }
}
</style>
