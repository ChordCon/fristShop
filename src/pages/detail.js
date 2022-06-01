import { Alert } from "bootstrap";
import { useEffect, useState } from "react";

const Detail = (props) => {
  let [Ealert, setAlert] = useState(true);
  let [num, setNum] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      {Ealert == true ? (
        <div className="discount">할인 쿠폰 받으로 가기</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + `/img/shoes${props.mapNum + 1}.jpg`}
            width="80%"
          />
        </div>

        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[props.mapNum].title}</h4>
          <p>{props.shoes[props.mapNum].content}</p>
          <p>{props.shoes[props.mapNum].price} 원</p>
          <div>
            <input
              className="num-input"
              onChange={(e) => {
                setNum(e.target.value);
              }}
            ></input>
            {isNaN(num) == true
              ? alert("숫자를 입력해주세요.")
              : console.log(num)}
          </div>

          <br />
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
