import { Routes, Route, Link, Outlet } from "react-router-dom";

const Event = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Event;
