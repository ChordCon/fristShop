import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

const Detail = (props) => {
  let [Ealert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState("");
  let [detailFade, setDetailFade] = useState();

  useEffect(() => {
    setTimeout(() => {
      setDetailFade("detailEnd");
    }, 100);
  });

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`container detailStart ${detailFade}`}>
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
          <div className={`start ${fade}`}>
            {tab === 1 ? (
              <div>내용2</div>
            ) : tab === 2 ? (
              <div>내용3</div>
            ) : tab === 0 ? (
              <div>내용1</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
