import React, { Component } from 'react';

import './home.css'
import DataService from "./DataService"
import Table from "./Table"
import MainHighlight from "./MainHighlight"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"



class HomePage extends Component {

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



    render() {
        return (
            <div >

                {/* <EntryFormComponent handleChange={this.handleChange} post={this.state.post} handleSubmit={this.handleSubmit} /> */}

                <div className="container">
                    <Router>
                        <Route exact path='/MainHighlight' component={MainHighlight}></Route>
                        <Route exact path="/" component={Table}></Route>
                    </Router>
                </div>
            </div>
        );

    }

}

export default HomePage;