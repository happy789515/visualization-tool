import { Doughnut } from './BaseChart';
import { reactiveProp } from './mixins';

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ['chartData'],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        circumference: Math.PI,
        rotation: -Math.PI,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
