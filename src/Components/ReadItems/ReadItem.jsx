
import { CiLocationOn } from "react-icons/ci";
import { MdPeople } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
const ReadItem = ({ book }) => {
    const { image, tags, bookName, author, category, rating, bookId, yearOfPublishing,publisher,totalPages } = book;

    return (
        <div className="flex shadow-xl py-6 border 1px solid rounded-2xl">
            <figure className="bg-base-200 m-6 p-6 rounded-xl">
                <img className="w-[100px] h-[166px]" src={image} alt="Shoes" />
            </figure>
            <div className="space-y-4">
                <h2 className="font-bold text-2xl">{bookName}</h2>
                <h2 className="font-medium">By : {author}</h2>
                <div className="flex gap-10">
                    <p className="font-bold">Tag</p>
                    <p className="flex gap-4  text-green-600 font-bold">
                        {
                            tags.map((tag, index) => <ul key={index}><li className="bg-base-200 px-3 py-1 rounded-full">{`#${tag}`}</li></ul>)
                        }
                    </p>
                    <p className="flex items-center gap-3"><CiLocationOn />Year Of Publishing: {yearOfPublishing}</p>
                </div>
                <div className="flex gap-6">
                <p className="flex items-center gap-3"><MdPeople />Publisher: {publisher}</p>
                <p className="flex items-center gap-3"><MdOutlineContactPage></MdOutlineContactPage> Page {totalPages}</p>
                </div>
                <hr />
                <div className="flex items-center gap-10">
                    <p className="bg-blue-100 font-medium text-blue-900 px-7 py-4 rounded-full">Category: {category}</p>
                    <p className="bg-orange-100 font-medium text-orange-700 px-7 py-4 rounded-full">Rating: {rating}</p>
                    <button className=" bg-green-600 text-white px-7 py-4 rounded-full font-bold">View Details</button>
                </div>

            </div>
        </div>
    );
};

export default ReadItem;