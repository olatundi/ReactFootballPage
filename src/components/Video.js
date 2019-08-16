import React, { Component } from 'react';


import DataService from "./DataService"
import HeaderComponent from "./HeaderComponent"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"



export default class MainHighlight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      records: []
    };
    let promise = DataService.retrieveShowAllRecords();
    promise.then(response => {
      this.setState({
        records: response.data
      })
    })
  }


}

