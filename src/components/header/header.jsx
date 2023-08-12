import "./header.css";
import search from "../../assets/search.svg";
import basket from "../../assets/cart.svg";
import account from "../../assets/acoount.svg";
import navIcon from "../../assets/navIcon.svg";
import crossIcon from "../../assets/cross_icon.svg";
import { useState } from "react";

const Header = () => {
  const [showLinksBox, setShowLinksBox] = useState(false);

  return (
    <>
      <div className="header_bk align-items-center justify-content-between">
        <div className="logo_heading">MY COMPANY.COM</div>

        <div className="header_links">
          <a href="#">The Edit</a>
          <a href="#">New Arrivals</a>
          <a href="#">Designers</a>
          <a href="#">Clothing</a>
          <a href="#">Shoes</a>
          <a href="#">Bags</a>
          <a href="#">Accessories</a>
          <a href="#">Jewelry</a>
          <a href="#">Beauty</a>
          <a href="#">home</a>
        </div>

        <div className="header_icons d-flex align-items-center">
          <img src={search} alt="" />
          <img src={basket} alt="" />
          <img src={account} alt="" />
        </div>
      </div>

      <div className="header_bk_mobile align-items-center justify-content-between">
        <div className="logo_heading">MY COMPANY.COM</div>

        <div className="header_icons d-flex align-items-center">
          <img src={search} alt="" />
          <img src={basket} alt="" />
          <img
            src={showLinksBox ? crossIcon : navIcon}
            alt=""
            onClick={() => setShowLinksBox(!showLinksBox)}
          />
        </div>

        {showLinksBox ? (
          <div className="header_mobile_links_container">
            <a href="#">The Edit</a>
            <a href="#">New Arrivals</a>
            <a href="#">Designers</a>
            <a href="#">Clothing</a>
            <a href="#">Shoes</a>
            <a href="#">Bags</a>
            <a href="#">Accessories</a>
            <a href="#">Jewelry</a>
            <a href="#">Beauty</a>
            <a href="#">home</a>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Header;
