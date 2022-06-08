import "./SideBar.modul.css";

const SideBar = (props) => {
  return (
    <div className="sideBar">
      <div>
        <p>최근 본 상품</p>
        {props.latestItem}
      </div>
    </div>
  );
};

export default SideBar;
