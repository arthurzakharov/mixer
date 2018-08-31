import Vue from 'vue';
import App from './components/App.vue';
import store from './store';

new Vue({
  el: '#app',
  store,
  data() {
    return {
      minAmount: undefined,
      minFee: undefined,
      maxFee: undefined,
    };
  },
  methods: {
    getOuterValueFromAttr(attr) {
      // toFixed returns String with + turn into Number
      return + parseFloat(this.$el.parentNode.getAttribute(attr)).toFixed(5);
    }
  },
  beforeMount() {
    this.minAmount = this.getOuterValueFromAttr('data-min_amount');
    this.minFee = this.getOuterValueFromAttr('data-min_fee');
    this.maxFee = this.getOuterValueFromAttr('data-max_fee');
  },
  render: h => h(App),
})
