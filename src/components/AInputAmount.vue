<template>
  <div class="input-amount">
    <label class="input-amount__wrapper" for="amount_of_btc">
      BTC
      <input
        class="input-amount__field"
        id="amount_of_btc"
        type="number"
        :step="step"
        name="amount"
        v-model="amountOfBTC"
        @change="isLessThenMinimalValue"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'AInputAmount',
  props: {
    minAmount: {
      type: Number
    },
  },
  data() {
    return {
      step: 0.00001,
      amountOfBTC: undefined
    };
  },
  methods: {
    isLessThenMinimalValue() {
      this.amountOfBTC = (this.amountOfBTC <= this.minAmount) ? this.minAmount : this.amountOfBTC;
    }
  },
  mounted() {
    this.amountOfBTC = this.minAmount + this.step;
  },
}
</script>

<style lang="scss" scoped>
.input-amount {
  flex-basis: 49%;
  &__wrapper {
    display: block;
    font-size: 12px;
    line-height: 14px;
    color: lightskyblue;
  }
  &__field {
    width: 100%;
    height: 32px;
    margin-top: 5px;
    padding: 5px 10px;
    border: 1px solid lightskyblue;
    border-radius: 10px;
    box-shadow: 1px 1px 10px lightblue;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 20px;
    color: lightskyblue;
    &:focus {
      border: 2px solid dodgerblue;
      outline: none;
    }
  }
}

@media screen and (min-width: 768px) {
  .input-amount {
    &__wrapper {
      font-size: 13px;
      line-height: 15px;
    }
    &__field {
      height: 36px;
      padding: 10px 15px;
      font-size: 18px;
      line-height: 22px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .input-amount {
    &__wrapper {
      font-size: 14px;
      line-height: 16px;
    }
    &__field {
      height: 40px;
      padding: 20px 15px;
      font-size: 20px;
      line-height: 24px;
    }
  }
}
</style>
