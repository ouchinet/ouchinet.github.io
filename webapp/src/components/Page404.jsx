import { Link } from "react-router-dom";

export const Page404 = () => {
    return (
        <>
        <title>Not Found - Ouchinet Portal</title>
        <h1 id="title">404 - Not Found</h1>
        <p>お探しのページが見つかりませんでした。</p>
        <Link to="../">ホームに移動</Link>
        </>
    );
};