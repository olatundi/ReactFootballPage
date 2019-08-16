import React, { Component } from 'react';
import './home.css'
import DataService from "./DataService"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"



class Table extends Component {

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

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th><h1>Latest Highlights</h1></th>
            <th><h4>Competition</h4></th>

          </tr>
        </thead>
        <tbody>
          {
            this.state.records.map((record, i) => {
              return (

                <tr key={"A" + i}>
                  {/* <MainHighlight record= {record}/> */}
                  <td> <img id="thumbnail" src={record.thumbnail} /><br /><Link to={"/MainHighlight/"+record.title}  >{record.title}</Link></td>
                  <td> <a href={record.competition.url} record={record.title}>{record.competition.name}</a></td>

                </tr>
              )
            })
          }
        </tbody>
      </table>
    );

  }

}

export default Table;
