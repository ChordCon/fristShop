import { useNavigate } from "react-router-dom";

const GoodsList = (props) => {
  let navigate = useNavigate();

  return props.shoes.map(function (a, i) {
    return (
      <div
        className="col-md-4"
        onClick={() => {
          props.setMapNum(i);
          navigate("/detail");
        }}
      >
        <img
          src={process.env.PUBLIC_URL + `/img/shoes${i + 1}.jpg`}
          width="80%"
        />
        <h4>{props.shoes[i].title}</h4>
        <p>{props.shoes[i].price}</p>
      </div>
    );
  });
};

export default GoodsList;
