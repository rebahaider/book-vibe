import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const { image, tags, bookName, author, category, rating, bookId } = book;

    return (
        <div className="">
            <Link to={`/singlePage/:${bookId}`} className="card card-compact bg-base-100 shadow-xl px-4">
                <figure className="bg-base-200 m-6 p-6 rounded-xl">
                    <img className="w-[100px] h-[166px]" src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p className="flex gap-4  text-green-600 font-medium">
                        {
                            tags.map((tag, index) => <ul key={index}><li className="bg-base-200 px-3 py-1 rounded-full">{tag}</li></ul>)
                        }
                    </p>
                    <h2 className="font-bold text-2xl">{bookName}</h2>
                    <h2 className="font-medium">By : {author}</h2>
                    <hr className="border-dashed" />
                    <div className="font-medium flex">
                        <p>{category}</p>
                        <p className="flex gap-2 items-center">{rating} <CiStar className="text-2xl"></CiStar></p>
                    </div>

                </div>
            </Link>
            
        </div>
    );
};

export default Book;