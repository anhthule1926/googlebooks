import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                    key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.authors}
                        published={book.volumeInfo.publishedDate}
                    />
                })
            }
        </div>   
    )
}

//export header comppnent
export default BookList;