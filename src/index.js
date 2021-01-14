/* eslint-disable import/prefer-default-export */
import d3chart from "./d3.chart";
import d3linechart from './linechart/d3.linechart';

export { default as D3BarChart } from './barchart/d3.barchart.vue';
export { default as D3LineChart } from './linechart/d3.linechart.vue';
export { default as D3PieChart } from './piechart/d3.piechart.vue';
export { default as D3SlopeChart } from './slopechart/d3.slopechart.vue';
export { default as D3Sunburst } from './sunburst/d3.sunburst.vue';
export { default as D3WordsCloud } from './wordscloud/d3.wordscloud.vue';
export { default as D3SlicesChart } from './sliceschart/d3.sliceschart.vue';
export { default as D3Chart } from './d3.chart.vue';

export { d3chart as D3ChartClass, d3linechart as D3LineChartClass }
