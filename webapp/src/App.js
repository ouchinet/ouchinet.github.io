import { BrowserRouter, Link, Routes, Route } from "react-router-dom";


// ページインポート
import { Home } from "./components/home.jsx";
import { Docs } from "./components/docs.jsx";
import { DocsPage } from "./components/docsPage.jsx";
import { Page404 } from "./components/Page404.jsx";

import * as React from "react";
import { Box } from "@mui/material";

// 画像インポート
import logo from "./ouchinet-potal.png";

const  App = () => {
  return (
    <>
      <BrowserRouter>
        <Box sx={{backgroundColor: "#131636",width: "100%",height: "100vh"}}>
          <header style={{backgroundColor: "#b6d5e0"}}>
            <Link to="/"><img src={logo} alt="Ouchinet Potal" style={{width: "15em",verticalAlign: "middle"}} /></Link>

            <br />

            
          </header>

          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/docs/*" element={<DocsPage />} />

            <Route path="/docs" element={<Docs />} />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;