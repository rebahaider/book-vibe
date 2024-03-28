import React from 'react';
import { getReadItems } from '../../utility/localstorage';
import { useParams } from 'react-router-dom';

const ReadItem = () => {
    const storedReadBook = getReadItems();
    const { bookId } = useParams();
    console.log(storedReadBook,bookId);
    const books = storedReadBook.find((book)=>book.bookId===Number(bookId));
    console.log(books);
    // const bookDetails = data.find((book) => book.bookId === Number(bookId));
    return (
        <div>
            <h2>{book.bookName}</h2>
        </div>
    );
};

export default ReadItem;