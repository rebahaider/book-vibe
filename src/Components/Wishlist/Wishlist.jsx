import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadItems } from "../../utility/localstorage";

const Wishlist = () => {
    const readBooks = useLoaderData();
    const [savedBook, setSaveBook] = useState([]);
    useEffect(() => {
        const storedReadBook = getReadItems();
        if (readBooks.length > 0) {
            const readBook = readBooks.filter(book => storedReadBook.includes(book.bookId))
            setSaveBook(readBook);
        }

    }, [])
    return (
        <div>
            <h2>{savedBook.length}</h2>
        </div>
    );
};

export default Wishlist;