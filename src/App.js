import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

componentWillMount(){
  this.getChartData();
}


  getChartData(){
    //AJAX CALLS YAHAN AYENGI

    const dataUrl = "https://199.172.1.266:9095/allCharts";

    $.ajax(
      {
        url: dataUrl,
        success: function(result){
          console.log(result);
        }
    }
  );

    this.setState({
      chartData:{
        labels: ['Male','Female', 'Other', 'Unknown'],
        datasets: [
          {
            label:'Total',
            data:[ 624588, 548481, 584141, 518787 ],
            backgroundColor:['Yellow','Red','Green','Blue','Purple','Pink']
          },
          {
            label:'Total',
            data:[ 624588, 548481, 584141, 518787 ],
            backgroundColor:['Yellow','Red','Green','Blue','Purple','Pink']
          },
          {
            label:'Due',
            data:[
              62458,
              54848,
              58414,
              51878,
            ],
            backgroundColor:[
              'Yellow',
              'Red',
              'Green',
              'Blue',
              'Purple',
              'Pink',
            ]
          }
        ]
      }
    });
  }


  render() {
    return (
      <div className="App">


      </div>
    );
  }
}

export default App;
