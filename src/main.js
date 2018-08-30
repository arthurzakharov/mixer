import Vue from 'vue';
import App from './components/App.vue';

new Vue({
  el: '#app',
  data() {
    return {
      minAmount: undefined,
      minFee: undefined,
      maxFee: undefined,
    };
  },
  methods: {
    getOuterValueFromAttr(attr) {
      return this.$el.parentNode.getAttribute(attr);
    }
  },
  beforeMount() {
    this.minAmount = this.getOuterValueFromAttr('data-min_amount');
    this.minFee = this.getOuterValueFromAttr('data-min_fee');
    this.maxFee = this.getOuterValueFromAttr('data-max_fee');
  },
  render: h => h(App),
})
