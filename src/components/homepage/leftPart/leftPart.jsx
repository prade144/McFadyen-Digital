import "./leftPart.css";

const LeftPart = () => {
  return (
    <>
      <div className="left_part_bk">
        <div className="tab_links">
          <p className="mb-0 active">details</p>
          <p className="mb-0">delivery</p>
          <p className="mb-0">fit</p>
          <p className="mb-0">share</p>
        </div>

        <div className="left_desc mt-3">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky. it
          has a straight fit with well defined shoulders and a shawl collar
          culminating in a button and has been flawlessly finished with three
          jet pockets with a sartorial feel. <br /><br /> See the <a href="#">EDITOR’S NOTE</a> <br /><br />{" "}
          Learn about the <a href="#">DESIGNER</a>
        </div>
      </div>
    </>
  );
};

export default LeftPart;
