<template>
  <!-- TODO: implement later action and token -->
  <!--<form class="header-xchange-block" id="home-exchange-form" method="POST" action="{{ url('application') }}">-->
  <!--<input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}">-->
  <div id="form" class="form">
    <div class="form__fee-container">
      <a-input-amount
        id="amount_of_btc"
        name="amount"
        text="BTC"
        :minAmount="$root.$data.minAmount"
      />
      <a-input-fee
        id="fee_for_btc"
        step="0.0001"
        name="fee"
        value="0.001"
        text="Fee"
        :minFee="$root.$data.minFee"
        :maxFee="$root.$data.maxFee"
      />
    </div>
    <div class="form__address-container">
      <a-input-address
        v-for="(inputsField, index) in inputsFields"
        :key="`key_from_${index}`"
        :text="inputsField"
        :number="index"
        :clickHandler="removeInputField"
        class="form__input"
      />
    </div>
    <a-button class="form__button" text="Add" :handleClick="addInputField" />
    <!-- no-ui-slider injection for fee field -->
    <div class="form__slider" id="slider-fee" ref="slider-fee"></div>
    <!-- no-ui-slider-injection -->
    <div class="form__slider" id="slider" ref="slider"></div>
    <!-- html post button -->
    <a-button class="form__button form__button--submit" text="Sell" type="submit" :handleClick="submit" />
  </div>
</template>

<script>
import noUiSlider from 'nouislider';
import AInputAddress from './AInputAddress.vue';
import AInputFee from './AInputFee';
import AInputAmount from './AInputAmount';
import AButton from './AButton.vue';

export default {
  name: 'NoUiSlider',
  components: { AInputAddress, AInputFee, AInputAmount, AButton },
  data() {
    return {
      isFirstCallOfSlider: true,
      amountOfInputs: 1,
      amountOfHandlers: 0,
      inputsFields: [ 100 ],
      currentHandlersPosition: [ ],
      range: {
        'min': [ 0 ],
        'max': [ 100 ]
      }
    };
  },
  methods: {
    submit() {
      console.log('form is sent');
    },
    addInputField() {
      this.amountOfHandlers++;
      this.amountOfInputs++;
      if (this.isFirstCallOfSlider) {
        this.isFirstCallOfSlider = false;
        this.createSlider();
      }else {
        this.$refs.slider.noUiSlider.destroy();
        this.createSlider();
      }
    },
    removeInputField() {
      this.amountOfHandlers--;
      this.amountOfInputs--;
      this.$refs.slider.noUiSlider.destroy();
      if (this.amountOfHandlers !== 0) {
        this.createSlider();
      }else {
        const line = this.$refs.slider;
        Object.assign(
          line.style,
          {
            display: 'none'
          }
        );
        this.isFirstCallOfSlider = true;
        this.setInitialStateOfInputs();
      }
    },
    createSlider() {
      this.setInitialPositionOfHandlers();
      this.setInitialStateOfInputs();
      noUiSlider.create(
        this.$refs.slider,
        {
          start: this.currentHandlersPosition,
          range: this.range,
        }
      );
      this.$refs.slider.noUiSlider.on('slide', (values, handle, unencoded, tap, positions) => {
        this.updateInputFieldsValue(positions, handle);
        this.currentHandlersPosition = this.roundFloatArray(positions);
      });
      this.$refs.slider.noUiSlider.on('update', () => {
        const line = this.$refs.slider;
        const handlers = document.querySelectorAll('.noUi-handle');
        handlers.forEach(el => {
          Object.assign(
            el.style,
            {
              backgroundColor: 'lightblue',
              opacity: '1',
              width: '20px',
              height: '20px',
              border: '1px solid lightskyblue',
              borderRadius: '50%',
              outline: 'none',
              top: '-10px',
            }
          );
        });
        Object.assign(
          line.style,
          {
            display: 'block',
            height: '5px',
            backgroundColor: 'lightblue',
            border: '1px solid lightskyblue',
          }
        );
      });
    },
    roundFloatArray(arr) {
      return arr.map((item) => {
        return parseFloat(item.toFixed(2));
      });
    },
    setInitialStateOfInputs() {
      const everyInputFieldContentRaw = 100 / this.amountOfInputs;
      const everyInputFieldContent = parseFloat(everyInputFieldContentRaw.toFixed(2));
      const differenceOfRounding = parseFloat((100 - (everyInputFieldContent * this.amountOfInputs)).toFixed(2));
      const tempArrayWithInputFields = new Array(this.amountOfInputs).fill(everyInputFieldContent);
      tempArrayWithInputFields.pop();
      tempArrayWithInputFields.push(parseFloat((everyInputFieldContent + differenceOfRounding).toFixed(2)));
      this.inputsFields = tempArrayWithInputFields;
    },
    setInitialPositionOfHandlers() {
      const firstHandlerPositionRaw = 100 / this.amountOfInputs;
      const firstHandlerPosition = parseFloat(firstHandlerPositionRaw.toFixed(2));
      const tempArrayWithHandlersPositions = new Array(this.amountOfHandlers).fill(0);
      this.currentHandlersPosition = tempArrayWithHandlersPositions.reduce((array, item, index) => {
        const nextHandlerPosition = parseFloat((firstHandlerPosition * (index + 1)).toFixed(2));
        array.push(nextHandlerPosition);
        return array;
      }, []);
    },
    updateInputFieldsValue(values, index) {
      const currentPositionOfHandlers = this.currentHandlersPosition;
      const updatedPositionOfHandlers = this.roundFloatArray(values);
      const diff = parseFloat((updatedPositionOfHandlers[index] - currentPositionOfHandlers[index]).toFixed(2));
      const tempArrayOfInputFields = this.inputsFields;
      const firstChange = (tempArrayOfInputFields[index] + diff).toFixed(2);
      const secondChange = (tempArrayOfInputFields[index + 1] - diff).toFixed(2);
      tempArrayOfInputFields[index] = parseFloat(firstChange);
      tempArrayOfInputFields[index + 1] = parseFloat(secondChange);
      this.$set(this.inputsFields, tempArrayOfInputFields);
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles";
.form {
  width: 95%;
  margin: 50px auto;
  padding: 30px 5px;
  border: 1px solid lightskyblue;
  border-radius: 10px;
  box-shadow: 1px 1px 10px lightblue;
  &__fee-container {
    display: flex;
    justify-content: space-between;
    margin: 20px auto;
    width: calc(100% - 130px);
  }
  &__input {
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 20px;
  }
  &__button {
    display: block;
    width: 40%;
    margin: 40px auto;
    &--submit {
      margin-top: 20px;
    }
  }
  &__slider {
    margin-left: 25px;
    margin-right: 25px;
  }
}

@media screen and (min-width: 768px){
  .form {
    width: 85%;
    margin: 60px auto;
    padding: 40px 15px;
    &__fee-container {
      width: calc(100% - 140px);
      margin: 25px auto;
    }
    &__input {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 30px;
    }
    &__button {
      width: 30%;
      margin: 0 auto;
      &--submit {
        margin-top: 40px;
      }
    }
    &__slider {
      margin-top: 60px;
      margin-left: 0;
      margin-right: 0;
    }
  }
}

@media screen and (min-width: 1024px){
  .form {
    width: 75%;
    margin: 70px auto;
    padding: 60px 25px;
    &__fee-container {
      width: calc(100% - 180px);
      margin: 30px auto;
    }
    &__input {
      margin-bottom: 4%;
    }
    &__button {
      width: 20%;
      &--submit {
        margin-top: 60px;
      }
    }
  }
}
</style>
