import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

import MeCard from '../../Shared/MeCard';
import styles from './BarChart.styles';

class BarChart extends Component {
  static setChartOptions(xData, yData) {
    return {
      color: ['rgba(121, 76, 104, 0.75)'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        },
        formatter: function(params) {
          return `${params[0].axisValue}: ${params[0].data}kn`;
        }
      },
      grid: {
        top: 16,
        bottom: 30,
        left: 60,
        right: 12
      },
      xAxis: [
        {
          type: 'value'
        }
      ],
      yAxis: [
        {
          type: 'category',
          data: yData,
          axisTick: {
            show: false
          },
          axisLine: {
            show: true
          },
          axisLabel: {
            color: '#777777'
          }
        }
      ],
      series: [
        {
          name: 'Expenses',
          type: 'bar',
          data: xData,
          itemStyle: {
            barBorderRadius: [0, 5, 5, 0]
          },
          emphasis: {
            itemStyle: {
              color: '#794C68'
            }
          }
        }
      ]
    };
  }

  renderBarChart() {
    const { classes, data } = this.props;

    return (
      <div className={classes.barChartWrapper}>
        <ReactEcharts
          option={BarChart.setChartOptions(data.xData, data.yData)}
        />
      </div>
    );
  }

  render() {
    return (
      <MeCard title="Expenses over categories in last month">
        {this.renderBarChart()}
      </MeCard>
    );
  }
}

BarChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default injectSheet(styles)(BarChart);
