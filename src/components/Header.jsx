import React from "react";

export default function Header() {
    return (
        <div className='border mt-2 rounded-full bg-slate-400 mx-auto w-4/5 shadow-2xl py-3'>
            <header className='text-center'>
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-500 relative inline-block">
                    <h1 className='font-bold text-2xl uppercase text-center'><span className="relative">Blogs</span></h1>
                </span>
            </header>
        </div>
    );
}