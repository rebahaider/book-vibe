
import { useLoaderData } from "react-router-dom";
import Book from "./Book";
const Books = () => {
    const books = useLoaderData();
    //console.log(books);

    return (
        <div className="mt-10">
            <h2 className="text-3xl text-center font-bold">Books</h2>
            <div className="grid grid-cols-3 gap-10 mt-10">
                {
                    books.map(book => (<Book key={book.bookId} book={book}></Book>))
                }
            </div>
        </div>


    );
};

export default Books;