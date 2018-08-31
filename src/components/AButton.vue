<template>
  <button
    :class="buttonClasses"
    :type="type"
    @click="handleClick"
    :disabled="isDisabled"
  >{{ text }}
  </button>
</template>

<script>
export default {
  name: "AButton",
  props: {
    text: {
      type: String,
      default: 'Press',
    },
    handleClick: {
      type: Function,
    },
    type: {
      type: String,
      default: 'button'
    },
    isDisabled: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    buttonClasses: function () {
      return [
        'button',
        { 'button--disabled': this.isDisabled },
      ];
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 15px;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 1px 1px 1px white;
  color: white;
  font-size: 18px;
  line-height: normal;
  outline: none;
  cursor: pointer;
  background-color: black;
  &:hover {
    color: ghostblack;
    background-color: black;
  }
  &--disabled {
    color: red;
    border-color: red;
    background-color: black;
    box-shadow: 1px 1px 1px orangered;
    &:hover {
      color: salmon;
      border-color: salmon;
      background-color: black;
    }
  }
}

@media screen and (min-width: 768px) {
  .button {
    font-size: 20px;
  }
}

@media screen and (min-width: 1024px) {
  .button {
    font-size: 22px;
  }
}
</style>
