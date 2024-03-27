import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePage = () => {
    const singlePage = useLoaderData();
    console.log(singlePage);
    return (
        <div>
            <h2>{singlePage.bookName}</h2>
        </div>
    );
};

export default SinglePage;
