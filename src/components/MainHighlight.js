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




  handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  //   handleSubmit = e => {
  //     e.preventDefault();

  //     this.setState(prevState => ({
  //       records: [...prevState.records, prevState.post],
  //       post: { name: "", city: "" }
  //     }));


  //   };

  //   handleUpdate = e => {
  //     e.preventDefault();

  //     this.setState(prevState => ({
  //       records: [...prevState.records, prevState.post],
  //       post: { name: "", city: "" , id :""},
  //       show: false
  //     }));

  //     DataService.updateRecord(this.state.post.id, this.state.post.name, this.state.post.city).then(() => {
  //       let promise = DataService.retrieveShowAllRecords();
  //       promise.then(response => {
  //         this.setState({
  //           records: response.data
  //         })
  //       })
  //     });
  //   };

  addVideo = () =>{
    
  }

  render() {
    return (
      
      <div >
        

        {
          this.state.records.filter((record) => {
           return( record.title === this.props.match.params.string);
          }).map((record, i) => {
         
            let div1 = document.createElement('div');
            div1.innerHTML= record.videos.embed; 
         return( <div>
              <img id="thumbnail" src={record.thumbnail}/> 
              <a href={record.competition.url} record={record.title}> {record.competition.name}</a>
              <div1></div1>
          </div>
         )
          })
        }
      </div>
    );

  }

}


