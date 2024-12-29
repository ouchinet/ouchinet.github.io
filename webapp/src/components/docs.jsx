import React, { useState, useEffect } from "react";

export const Docs = () => {
    const [data, setData] = useState(undefined);
    
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ouchinet/ouchinet.github.io/refs/heads/docs/list.json")
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((e) => alert("error:" + e));
    }, []);
    
    console.log(data);
    
    return (
        <>
        <h1 className="title">ドキュメント</h1>
        <div className="docs-list">
            {
            data === undefined ?
                ""
            :
                data[0].title
            }
        </div>
        </>
    );
};