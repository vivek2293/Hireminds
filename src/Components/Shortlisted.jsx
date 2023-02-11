import React from "react";
import {Routes, Route, useParams} from 'react-router-dom';

export default function Shortlisted() {
    React.useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        console.log(token);
    }, [])

    return (
        <>
            <div className="link-div">
            </div>
        </>
    )
} 