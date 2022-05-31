import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import GoodsList from "./GoodsList";
import NavbarF from "./Nav-bar";
import Detail from "./pages/detail";
import Event from "./pages/event";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import date from "./data";

function App() {
  let [shoes] = useState(date);
  let [mapNum, setMapNum] = useState(0);

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
                  <GoodsList
                    shoes={shoes}
                    mapNum={mapNum}
                    setMapNum={setMapNum}
                  />
                </div>
              </div>
            </>
          }
        ></Route>
        {/* 상품 디테일 페이지 */}
        <Route
          path="/detail"
          element={
            <Detail shoes={shoes} mapNum={mapNum} setMapNum={setMapNum} />
          }
        ></Route>

        {/* nested route 이벤트 페이지. */}
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={
              <>
                <p>첫 주문시 양배추 즙 서비스</p>
              </>
            }
          />
          <Route
            path="two"
            element={
              <>
                <p>생일기념 쿠폰받기</p>
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
