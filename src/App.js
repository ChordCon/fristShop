import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import GoodsList from "./GoodsList";
import NavbarF from "./Nav-bar";
import Detail from "./detail";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Navbar 정보가 들어 있습니다. */}
      <NavbarF />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <div className="container">
                <div className="row">
                  {/*GoodsList에 상품정보가 들어있습니다. */}
                  <GoodsList />
                </div>
              </div>
            </>
          }
        ></Route>
        {/* 상품 디테일 페이지 */}
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
