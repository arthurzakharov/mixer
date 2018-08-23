<template>
  <div class="input-fee">
    <label class="input-fee__wrapper" :for="id">
      {{ text }}
      <input
        class="input-fee__field"
        :id="id"
        type="number"
        :step="step"
        :name="name"
        :value="value"
        :min="min"
        :max="max"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'AInputFee',
  props: {
    step: {
      type: String
    },
    value: {
      type: String
    },
    name: {
      type: String
    },
    id: {
      type: String
    },
    text: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.input-fee {
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
  .input-fee {
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
  .input-fee {
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
