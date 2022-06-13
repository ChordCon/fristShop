import "./SideBar.modul.css";
import { useNavigate } from "react-router-dom";

const SideBar = (props) => {
  let newItem = props.latestItem;

  let deduplication = newItem.filter(
    (arr, index, callback) =>
      index === callback.findIndex((t) => t.key === arr.key)
  );
  deduplication.length = 2;

  let navigate = useNavigate();

  return (
    <div className="sideBar">
      <div
        onClick={(e) => {
          props.setMapNum(Number(e.target.alt));
          navigate(`/detail${e.target.alt}`);
        }}
      >
        {deduplication}
      </div>
    </div>
  );
};

export default SideBar;
