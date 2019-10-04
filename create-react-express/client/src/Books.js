import React, { Component } from "react";
import SearchArea from './SearchArea';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    //creating method
    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        return (
        //create Book component
        <div >
            <SearchArea handleSearch={this.handleSearch} />
        </div>
        );
    }
}

export default Books;
