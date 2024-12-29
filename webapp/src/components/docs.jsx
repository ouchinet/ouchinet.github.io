export const Docs = () => {
    return (
        <>
        <link rel="stylesheet" href="style/docs.css"/>

        <title>ドキュメント | Ouchinet Portal</title>

        <h1 className="title">ドキュメント</h1>
        <div className="docs-list">
            <h1 className="title">Loading...</h1>
            <button id="load_button" className="button" disabled>読み込まれない場合は再読み込みしてください</button>
        </div>
        </>
    );
};