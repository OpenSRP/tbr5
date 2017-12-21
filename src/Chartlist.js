import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import ChartDetail from './ChartDetail';
import * as constants from './utils/GlobalConstants.js';
import {Link} from 'react-router-dom';
class Chartlist extends Component{
  constructor(props){
    super(props);
    this.myFunction=this.myFunction.bind(this);
    this.renderList=this.renderList.bind(this);
  }

getState(){
  return{
    users: []
  }
}
componentDidMount(){
  axios.get(constants.URL_CHARTLIST).then(results => {
    console.log(results.data);
    this.setState({
      users: results.data
    });
  });

}



myFunction(fileName2){
  axios.get(constants.URL_CHARTDISPLAY+fileName2).then(results => {
  });
  return(
    <div>

    </div>
  )
}

  renderList(){
    return (  this.state.users.map(function(user, i){

          return (

            <li key={user.fileName} >
            <Link to={{  pathname: '/ChartDetail',  search: '?sort=name',  hash: '#the-hash',  state: { filename: user.fileName } }}> {user.chartName} ({user.type})</Link>
              </li>
          )
        },this));
  }
  render(){
    if(this.state==null){
      return (<div> state null</div>);
    }

  return  (
    <div>
    {this.renderList()}
</div>
);

    }




}
export default Chartlist;
