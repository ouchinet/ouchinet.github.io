import { Box } from "@mui/material";

export const Home = () => {
    return (
        <>
        <title>Ouchinet Portal</title>
        <h1 id="title">Ouchinet</h1>
        <p>おうちネットは家庭や教育機関で安心して使えるSNSプラットフォームです。</p>
        <button className="button" id="home-latest-release">最新リリースを見る！</button>
        <Box id="about" className="box">
            <h2 className="title is-size-4">おうちネットについて</h2>
            <p className="is-size-6">
                おうちネットは安心して使える軽量SNSソフトウェアです。
                <br />
                XやInstagramとは異なり独立したSNSではなく個別でホストされるSNSのソフトウェアとなっています。
                <br />
                家庭や教育機関での利用を想定しており、軽量なためラズベリーパイなどのスペックの低いハードウェアでも動作します。
                <br />
                なので無料で簡単な方法でセットアップできます。
            </p>
        </Box>
        </>
    );
};