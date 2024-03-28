import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getReadItems } from "../../utility/localstorage";
import ReadItem from "./ReadItem";

const ReadItems = () => {
    const readBooks = useLoaderData();
    const [savedBook, setSaveBook] = useState([]);
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    console.log(savedBook);

    useEffect(() => {
        const storedReadBook = getReadItems();
        if (readBooks.length > 0) {
            const readBook = readBooks.filter(book => storedReadBook.includes(book.bookId))
            setSaveBook(readBook);
        }
        console.log(storedReadBook);
    }, [])

    const bookDetails = savedBook.find((book) => book.bookId === Number(bookId));
    console.log(bookDetails);


    return (
        <div>
            <h2>{savedBook.length}</h2>

            <div>

            </div>
        </div>
    );
};

export default ReadItems;