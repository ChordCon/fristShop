const Detail = (props) => {
  return (
    <div className="container">
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
      </div>
    </div>
  );
};

export default Detail;
