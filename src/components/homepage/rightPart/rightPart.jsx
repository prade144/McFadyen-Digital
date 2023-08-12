import "./rightPart.css";
import prod_img_1 from "../../../assets/prod_img_1.png";
import prod_img_2 from "../../../assets/prod_img_2_1.png";
import rightIcon from "../../../assets/right_icon.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const RightPart = () => {
  return (
    <div className="right_part_bk">
      <div className="pro_title">JONATHAN SIMKHAI</div>
      <div className="prod_desc">Lurex Linen Viscose Jacket in Conchiglia</div>
      <div className="prod_price">$225</div>

      <div className="color_select">
        <span>Color</span> Conchiglia
      </div>

      <div className="prod_img d-flex align-items-center">
        <div className="prod_img_box selected overflow-hidden">
          <LazyLoadImage
            src={prod_img_1}
            className="w-100"
            alt="Image Alt"
            effect="blur"
          />
          {/* <img src={prod_img_1} alt="" /> */}
        </div>
        <div className="prod_img_box ms-2 border py-2 p-1">
          <LazyLoadImage src={prod_img_2} alt="Image Alt" effect="blur" />

          {/* <img src={prod_img_2} alt="" /> */}
        </div>
      </div>

      <div className="size_part mt-4">
        <div className="size_heading d-flex align-items-center justify-content-between">
          <div className="size_text">
            <span>SIZE</span> &nbsp; L
          </div>
          <div className="size_guide">SIZE GUIDE</div>
        </div>

        <div className="size_capsules">
          <div className="capsule_div">XS</div>
          <div className="capsule_div">S</div>
          <div className="capsule_div disable">M</div>
          <div className="capsule_div active">L</div>
          <div className="capsule_div">XL</div>
        </div>

        <div className="add_prod_btn mt-3">
          <button>
            add to bag <img src={rightIcon} className="ms-3" alt="" />
          </button>
        </div>

        <div className="more_desc">
          Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
          <br />
          <br />
          Speak to a Personal Stylist CHAT NOW
        </div>
      </div>
    </div>
  );
};

export default RightPart;
