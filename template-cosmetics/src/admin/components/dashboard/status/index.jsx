import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  
    datasets: [
      {
        label: 'Patients',
        borderColor: "#e23e56",
        borderWidth: 2,
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        lineTension: false,
        pointBorderColor: '#e23e56',
        pointBackgroundColor: '#e23e56',
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#e23e56',
        pointHoverBorderColor: '#e23e56',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 50,
        fill: false,
        gridLines: false,
        data: [65, 59, 80, 81, 56, 55, 40, 60],
      },
      {
        label: 'Doctors',
        borderColor: "#1b5a90",
        borderWidth: 2,
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        lineTension:false,
        pointBorderColor: '#1b5a90',
        pointBackgroundColor: '#1b5a90',
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#1b5a90',
        pointHoverBorderColor: '#1b5a90',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 50,
        fill: false,
        gridLines: false,
        data: [60, 50, 70, 85, 50, 50, 45, 60],
      },
     
    ]
  };
  ;

export default class StatusChart extends Component {
   
  render() {

    return (
      <div>
        
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data

  }
}