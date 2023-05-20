import React from 'react';
import {Helmet} from "react-helmet";
import useTitle from '../hook/UseTitle';

const Blogs = () => {

    useTitle('Blogs');

    return (
        <div className='lg:px-16 px-2 mt-4'>
            <div>
            <h3 className='mb-4 mt-6 text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600'>Blogs</h3> <hr />
            <div className='bg-gradient-to-r from-indigo-600 to-black mb-2 rounded-md p-8 mt-6'>
                <h3 className='text-3xl font-semibold mb-2 text-blue-200'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className='font-bold text-sky-400'>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. We can store refresh token in-memory JavaScript variable And Access token in a httpOnly cookie.</p>
            </div>
            <div className='bg-gradient-to-r from-indigo-600 to-black mb-2 rounded-md p-8'>
                <h3 className='text-3xl font-semibold mb-2 text-blue-200'>Compare SQL and NoSQL databases?</h3>
                <p className='font-bold text-sky-400'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='bg-gradient-to-r from-indigo-600 to-black mb-2 rounded-md p-8'>
                <h3 className='text-3xl font-semibold mb-2 text-blue-200'>What is express js? What is Nest JS?</h3>
                <p className='font-bold text-sky-400'>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
            </div>
            <div className='bg-gradient-to-r from-indigo-600 to-black mb-2 rounded-md p-8'>
                <h3 className='text-3xl font-semibold mb-2 text-blue-200'>What is MongoDB aggregate and how does it work?</h3>
                <p className='font-bold text-sky-400'>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
            </div>
        </div>
    );
};

export default Blogs;