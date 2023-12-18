import React from "react";
import "./Spinner.css";

export default function Spinner() {

    return (
        <div className="w-full h-screen flex justify-center items-center"> {/* Updated className */}
            <div className="loader"></div>
        </div>
    );
}