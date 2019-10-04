import React, { Component } from "react";
import SearchArea from './SearchArea';
import BookList from './BookList';
import request from 'superagent';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query ({ q: this.searchField })
            .then((data) => {
                this.setState({ books: {...data.body.items}})
            })
    }

    //creating method
    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    handleSort = (e) => {
        this.setState({sort: e.target.value})
    }

    //method clean data
    cleanData = (data) => {
        const cleanData = data.body.items.map ((book) => {
            if(book.volumeInfo.hasOwnPoroperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            }
        })
    }

    render() {
        return (
        //create Book component
        <div >
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} />
            <BookList books={this.state.books} /> 
        </div>
        );
    }
}

export default Books;
