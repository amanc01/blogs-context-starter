import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext();
//children <App/> component hai jo index.js me hai
function AppContextProvider ({ children }){
    const [loading , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);
    const [page , setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);

    // "value" name hai koi bhi rakh sakte hai 
    //sare variable ko value me store karke dusre component me use kar sakte hai
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages
    };

    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>;
}
