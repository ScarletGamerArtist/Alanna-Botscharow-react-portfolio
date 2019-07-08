import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from "./portfolio/portfolio-container";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Alanna Botscharow Portfolio</h1>
        <div>{moment().format('MMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />       
      </div>
    );
  }
}
