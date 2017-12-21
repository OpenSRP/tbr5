import React, { Component } from 'react';
import Chart from './components/Chart';

import axios from 'axios';
import * as constants from './utils/GlobalConstants.js';

class ChartDetail extends Component{
  constructor(props){
    super(props);
    console.log(props);
    console.log(props.location.state);
    this.state = {
      chartData:{} , chartName : props.location.state.filename
    }
}

componentWillMount(){
  console.log('will mount');
  console.log(this.state.chartName);
  axios.get(constants.URL_CHARTDISPLAY+this.state.chartName).then(results => {
    console.log('ok i m here');
    console.log(results.data);

    var labels = results.data.labels;
    var bgcolor = results.data.backgroundColor;
    var daatasets = [];

    //[results.data.data[0].male, results.data.data[0].female, results.data.data[0].other, results.data.data[0].unknown, ];
    for (var i=0; i<results.data.datasets.length; i++){
      var responseDataitem = results.data.datasets[i];
      var dataItem =[];
      var myLab =[];
      for (var j = 0; j < results.data.datasets.length; j++) {


        for (var key in results.data.datasets[i]) {
          if(results.data.datasets[i].hasOwnProperty(key)) {
            var dataV = results.data.datasets[i][key];

            if(!isNaN(dataV)){

              var f = dataV;
            }else {
                var l = dataV;
            }

        }
        }

        myLab.push(l);
        dataItem.push(f);
      }
      var dataSetItem = {};
      dataSetItem['label'] = myLab;
      dataSetItem['backgroundColor'] = results.data.backgroundColor;
      dataSetItem['data'] = dataItem;

      daatasets.push(dataSetItem);
    }

    console.log("This is my dataset");
    console.log(daatasets);

    this.setState({
      reportdata: results.data,
      type: results.data.type,

      chartData:{
        labels: labels,
        datasets: daatasets
      }
    });
  });
}

componentDidMount(){
  console.log('did mount');
//  this.getChartData();
}

    render() {
      if (!this.state.chartData.datasets) {
        return (
          <div className="App">
          There is nothing i can do about it
          </div>
        );
      }
      return (
        <div className="App">

        <Chart chartData={this.state.chartData} chartType={this.state.type}/>

        </div>
      );
    }

}


export default ChartDetail;
