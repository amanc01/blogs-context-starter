import React, { useContext, useEffect } from 'react';
import "./App.css";
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext'; // Add the import statement for AppContext

export default function App() {
  // api call
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    if (fetchBlogPosts) { // Add a conditional check to ensure fetchBlogPosts is defined
      fetchBlogPosts();
    }
  }, []);

  return (
    <div className='w-full h-full flex flex-col gap-y-1 overflow-scroll'>
      <Header/>
      <Blogs />
      <Pagination />
    </div>
  );
}
