import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

const Detail = (props) => {
  let [Ealert, setAlert] = useState(true);

  let [tab, setTab] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      {Ealert === true ? (
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

          <button className="btn btn-danger">주문하기</button>
        </div>

        <div className="mid-nav" style={{ marginTop: "30px" }}>
          <Nav variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTab(0);
                }}
                eventKey="link-0"
                style={{ color: "black" }}
              >
                Option 1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTab(1);
                }}
                eventKey="link-1"
                style={{ color: "black" }}
              >
                Option 2
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTab(2);
                }}
                eventKey="link-2"
                style={{ color: "black" }}
              >
                Option 3
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {tab === 1 ? (
            <div>내용2</div>
          ) : tab === 2 ? (
            <div>내용3</div>
          ) : (
            <div>내용1</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
