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
  background-color: transparent;
  border: 1px solid lightskyblue;
  border-radius: 10px;
  box-shadow: 1px 1px 10px lightblue;
  color: lightskyblue;
  font-size: 18px;
  line-height: 22px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: ghostwhite;
    background-color: lightskyblue;
  }
  &--disabled {
    color: lightsalmon;
    border-color: lightsalmon;
    background-color: white;
    &:hover {
      color: salmon;
      border-color: salmon;
      background-color: white;
    }
  }
}

@media screen and (min-width: 768px) {
  .button {
    font-size: 20px;
    line-height: 24px;
  }
}

@media screen and (min-width: 1024px) {
  .button {
    font-size: 22px;
    line-height: 26px;
  }
}
</style>
