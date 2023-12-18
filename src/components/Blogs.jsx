import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

export default function Blogs() {
    //consume
    const { posts, loading } = useContext(AppContext);
    return (
        <div className="flex flex-col items-center justify-center mb-6">
            <div className=" w-11/12 max-w-[500px] py-3 flex flex-col gap-y-7">
                {
                    loading ?
                        (<Spinner />) :
                        (
                            posts.length === 0 ? (
                                <p className="font-bold text-3xl text-center my-[200px]">
                                    Data Not Found
                                </p>
                            ) : (
                                posts.map((post) => (
                                    <div>
                                        <p className="font-bold text-md">{post.title}</p>
                                        <p>
                                            By <span className="italic">{post.author}</span>
                                            on <span className="underline font-bold text-sm">{post.category}</span>
                                        </p>
                                        <p className="text-[12px]">Posted On {post.date}</p>
                                        <p className="text-[15px] mt-[10px]">{post.content}</p>
                                        <div className="flex gap-1">
                                            {post.tags.map((tag, index) => {
                                                return <span key={index} className="text-blue-500 undeline font-bold text-[11px]">{`#${tag}`}</span>
                                            })}
                                        </div>
                                    </div>
                                )))
                        )
                }
            </div>

        </div>
    );
}