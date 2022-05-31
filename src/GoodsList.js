import date from "./data";
import { useState } from "react";

const GoodsList = () => {
  let [shoes] = useState(date);
  return shoes.map(function (a, i) {
    return (
      <div className="col-md-4">
        <img
          src={process.env.PUBLIC_URL + `/img/shoes${i + 1}.jpg`}
          width="80%"
        />
        <h4>{shoes[i].title}</h4>
        <p>{shoes[i].price}</p>
      </div>
    );
  });
};

export default GoodsList;
