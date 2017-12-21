import React, {Component} from 'react';
import {Pie, Bar  } from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      chartType: props.chartType
    }
  }

  render(){
    if (!this.state.chartType ){
      return(
        <div></div>
      )
    }
    if (this.state.chartType.toLowerCase().indexOf('pie') !== -1) {
      return (
        <div className="chart">
          <Pie
            data ={this.state.chartData}
            options={{}}
          />
        </div>
      )
    }
    else if (this.state.chartType.toLowerCase().indexOf('bar') !== -1) {
      return (
        <div className="chart">
          <Bar
            data ={this.state.chartData}
            options={{}}
          />
        </div>
      )
    }
  }
}


export default Chart;
