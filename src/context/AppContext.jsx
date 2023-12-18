import React from 'react';
import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { baseUrl } from "../baseUrl";

//step 1 -> create context
export const AppContext = createContext();
//children <App/> component hai jo index.js me hai
export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //data filling pending api call
    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);

        } catch (error) {
            alert("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);

        }
        setLoading(false);
    }


    //function to handel page change
    function handlerPageChange(newPage) {
        setPage(newPage);
        fetchBlogPosts(newPage);
    }


    // "value" name hai koi bhi rakh sakte hai 
    //sare variable ko value me store karke dusre component me use kar sakte hai
    // now we have a centralised data store we can use anywhere in our app
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlerPageChange
    };

    // step 2 -> return provider
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}
