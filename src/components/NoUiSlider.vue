<template>
  <!-- TODO: implement later action and token -->
  <!--<form class="header-xchange-block" id="home-exchange-form" method="POST" action="{{ url('application') }}">-->
  <!--<input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}">-->
  <div id="form" class="form">
    <div class="form__input-container">
      <a-input
        v-for="(inputsField, index) in inputsFields"
        :key="`key_from_${index}`"
        :text="inputsField"
        :number="index"
        :clickHandler="removeInputField"
        class="form__input"
      />
    </div>
    <a-button class="form__button" text="Add" :handleClick="addInputField"/>
    <div class="form__slider" id="slider" ref="slider"></div>
  </div>
</template>

<script>
import noUiSlider from 'nouislider';
import AInput from './AInput.vue';
import AButton from './AButton.vue';

export default {
  name: 'NoUiSlider',
  components: { AInput, AButton },
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
        const line = document.querySelector('.noUi-horizontal');
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
  &__input {
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 20px;
  }
  &__button {
    display: block;
    width: 40%;
    margin: 40px auto;
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
    &__input {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 30px;
    }
    &__button {
      width: 30%;
      margin: 0 auto;
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
    &__input {
      margin-bottom: 4%;
    }
    &__button {
      width: 20%;
    }
  }
}
</style>
