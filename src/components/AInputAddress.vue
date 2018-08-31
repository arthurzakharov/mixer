<template>
    <div class="input">
      <div class="input__close" @click="clickHandler"></div>
      <label class="input__wrapper" :for="`${number}_address`">
        Your wallet address:
        <input
          class="input__field"
          type="text"
          :name="`person_addresses-${number}`"
          :id="`person_addresses-${number}`"
          @blur="isEmptyField"
        />
      </label>
      <label class="input__hidden" :for="`${number}_address__percentage`">
        <input
          type="hidden"
          :value="text"
          :name="`address_percentage-${number}`"
          :id="`address_percentage-${number}`"
        />
      </label>
      <span class="input__text">{{ `${text}%` }}</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AInputAddress',
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
  methods: {
    ...mapActions([
      'changeEmptyFieldError',
    ]),
    isEmptyField(e) {
      (e.target.value.length === 0) ? this.changeEmptyFieldError(true) : this.changeEmptyFieldError(false);
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  &__close {
    display: none;
    position: absolute;
    top: 65%;
    left: 15px;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    opacity: 0.7;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
    &:before,
    &:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: darkslategray;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }

  }
  &__wrapper {
    display: block;;
    font-size: 12px;
    line-height: normal;
    text-align: center;
    color: darkslategray;
  }
  &__field {
    display: block;
    width: 58%;
    margin-top: 5px;
    margin-right: auto;
    margin-left: auto;
    padding: 5px 10px;
    border: 1px solid darkslategray;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 20px;
    color: darkslategray;
    &:focus {
      border: 2px solid lightgray;
      outline: none;
    }
  }
  &__text {
    position: absolute;
    top: 65%;
    right: 0;
    transform: translateY(-50%);
    font-size: 18px;
    line-height: normal;
    font-weight: 300;
    color: darkslategray;
  }
  &:only-child .input__text {
    display: none;
  }
  &:last-child:not(:only-child) .input__close {
    display: block;
  }
}

@media screen and (min-width: 375px) {
  .input {
    position: relative;
    &__field {
      width: 65%;
    }
  }
}

@media screen and (min-width: 414px) {
  .input {
    position: relative;
    &__field {
      width: 65%;
    }
  }
}

@media screen and (min-width: 768px) {
  .input {
    &__wrapper {
      font-size: 13px;
    }
    &__field {
      width: 75%;
      padding: 10px 15px;
      font-size: 18px;
    }
    &__text {
      font-size: 20px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .input {
    &__wrapper {
      font-size: 14px;
    }
    &__field {
      width: 80%;
      padding: 15px 20px;
      font-size: 20px;
    }
    &__text {
      font-size: 22px;
    }
  }
}
</style>
