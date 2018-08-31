<template>
  <div class="input-fee">
    <p class="input-fee__label">Fee</p>
    <p class="input-fee__value">
      {{ feeValue }} %
    </p>
    <label class="input-fee__hidden"  for="fee_for_btc">
      <input
        id="fee_for_btc"
        type="hidden"
        name="fee"
        :value="feeValue"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'AInputFee',
  props: {
    feeValue: {
      type: Number
    }
  },
  data() {
    return {
      fee: undefined
    };
  },
  mounted() {
    this.fee = this.feeValue;
  }
}
</script>

<style lang="scss" scoped>
.input-fee {
  flex-basis: 49%;
  &__label {
    display: block;
    margin: 0;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: lightskyblue;
  }
  &__value {
    margin: 10px 0 0 0;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: lightskyblue;
  }
  &__hidden {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .input-fee {
    &__label {
      font-size: 13px;
      line-height: 15px;
    }
    &__value {
      font-size: 18px;
      line-height: 22px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .input-fee {
    &__label {
      font-size: 14px;
      line-height: 16px;
    }
    &__value {
      font-size: 20px;
      line-height: 24px;
    }
  }
}
</style>
