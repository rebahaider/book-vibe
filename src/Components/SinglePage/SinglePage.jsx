import data from '../../data/fakeData.json';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadItems } from '../../utility/localstorage';

const SinglePage = () => {

    const { bookId } = useParams();
    const bookIdInt=parseInt(bookId);
    const bookDetails = data.find((book) => book.bookId === Number(bookId));
    console.log(bookDetails);

    const handleReadBtn = () => {
        saveReadItems(bookIdInt);
        toast('Already Read')
    }
    const handleWishListBtn = () => {
        saveReadItems(bookIdInt);
        toast('Successfully Added To Wish List')
    }
    return (
        <div className="  lg:flex gap-10 bg-base-100 shadow-2xl p-10">
            <figure className='bg-base-200 p-10 rounded-2xl'>
                <img className="w-[250px]" src={bookDetails.image} />
            </figure>
            <div className="space-y-3">
                <h2 className="text-3xl font-bold">{bookDetails.bookName}</h2>
                <p className='font-medium'>By: {bookDetails.author}</p>
                <hr />
                <p className='font-medium'>{bookDetails.category}</p>
                <hr />
                <p><span className='font-bold'>Review:</span>{bookDetails.review}</p>
                <p className='space-x-4'>
                    <span className='font-bold'>Tag</span>
                    <span className="bg-base-200 px-3 py-1 rounded-full text-green-600 font-bold">#{bookDetails.tags[0]}</span>
                    <span className="bg-base-200 px-3 py-1 rounded-full text-green-600 font-bold">#{bookDetails.tags[1]}</span>
                </p>
                <hr />
                <div className=''>
                    <div className='grid grid-cols-2 gap-0'>
                        <p >Number Of Pages:</p>
                        <p className='font-bold'>{bookDetails.totalPages}</p>
                    </div>
                    <div className='grid grid-cols-2 gap-0'>
                        <p >Publisher:</p>
                        <p className='font-bold'>{bookDetails.publisher}</p>
                    </div>
                    <div className='grid grid-cols-2 gap-0'>
                        <p >Year Of Publishing:</p>
                        <p className='font-bold'>{bookDetails.yearOfPublishing}</p>
                    </div>
                    <div className='grid grid-cols-2 gap-0'>
                        <p>Rating:</p>
                        <p className='font-bold'>{bookDetails.rating}</p>
                    </div>
                    <div className='space-x-4 mt-8'>
                        <button onClick={handleReadBtn} className='btn btn-outline font-bold px-5'>Read</button>
                        <button onClick={handleWishListBtn} className='btn btn-info text-white font-bold px-5'>Wish List</button>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>


            </div>
        </div>
    );
};

export default SinglePage;