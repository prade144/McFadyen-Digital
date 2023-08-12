import LeftPart from "../../components/homepage/leftPart/leftPart";
import "./homepage.css";
import prod_img_1 from "../../assets/prod_img_1.png";
import prod_img_2 from "../../assets/prod_img_2.png";
import Heart from "../../assets/heart.svg";
import prod_img_3 from "../../assets/prod_img_3.png";
import prod_img_4 from "../../assets/prod_img_4.png";
import prod_img_5 from "../../assets/prod_img_5.png";
import RightPart from "../../components/homepage/rightPart/rightPart";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ReactImageMagnify from "react-image-magnify";
import { useState } from "react";

const options1 = {
  loop: true,
  center: true,
  item: 1,
  margin: 10,
  autoplay: false,
  dots: true,
  autoplayTimeout: 8500,
  smartSpeed: 450,
  nav: false,
  // navText: [`<img src=${leftIcon}>`, `<img src=${rightIcon}>`],
  responsive: {
    1000: { items: 1 },
    600: { items: 1 },
    300: { items: 1 },
  },
};

const imageProps = [
  {
    smallImage: {
      alt: "img-alt",
      isFluidWidth: true,
      src: prod_img_1,
    },
    largeImage: {
      src: prod_img_1,
      width: 1200,
      height: 1800,
    },
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
    enlargedImagePosition: "over",
    enlargedImageContainerClassName: "enlarged_zoom_container",
  },
  {
    smallImage: {
      alt: "img-alt",
      isFluidWidth: true,
      src: prod_img_2,
    },
    largeImage: {
      src: prod_img_2,
      width: 1200,
      height: 1800,
    },
    // imageClassName: "w-50",
    className: "w-50",
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
    enlargedImagePosition: "over",
    enlargedImageContainerClassName: "enlarged_zoom_container",
  },
  {
    smallImage: {
      alt: "img-alt",
      isFluidWidth: true,
      src: prod_img_3,
    },
    largeImage: {
      src: prod_img_3,
      width: 1200,
      height: 1800,
    },
    className: "w-50",
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
    enlargedImagePosition: "over",
    enlargedImageContainerClassName: "enlarged_zoom_container",
  },
  {
    smallImage: {
      alt: "img-alt",
      isFluidWidth: true,
      src: prod_img_4,
    },
    largeImage: {
      src: prod_img_4,
      width: 1200,
      height: 1800,
    },
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
    enlargedImagePosition: "over",
    enlargedImageContainerClassName: "enlarged_zoom_container",
  },
  {
    smallImage: {
      alt: "img-alt",
      isFluidWidth: true,
      src: prod_img_5,
    },
    largeImage: {
      src: prod_img_5,
      width: 1200,
      height: 1800,
    },
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
    enlargedImagePosition: "over",
    enlargedImageContainerClassName: "enlarged_zoom_container",
  },
];

const Homepage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  return (
    <div className="homepage">
      <div className="homepage_bk row mx-0 position-relative">
        <div className="col-lg-3 p-0 left_section">
          <LeftPart />
        </div>
        <div className="col-lg-6 middle_section justify-content-center align-items-center flex-column">
          <div className="position-relative">
            <div
              className="image_section"
              id="scrollSection"
              onScroll={() =>
                setScrollPosition(
                  document.getElementById("scrollSection").scrollTop
                )
              }
            >
              <div className="image_single">
                <LazyLoadImage
                  src={prod_img_1}
                  className="w-100"
                  alt="Image Alt"
                  effect="blur"
                  scrollPosition={scrollPosition}
                />
                {/* <ReactImageMagnify
                  {...imageProps[0]}
                  className="magnifying_div"
                /> */}
                
              </div>
              <div className="image_double d-flex mt-2 pt-1">
                {/* <ReactImageMagnify {...imageProps[1]} /> */}
                <LazyLoadImage
                  src={prod_img_2}
                  className="w-100"
                  alt="Image Alt"
                  effect="blur"
                  scrollPosition={scrollPosition}
                />
                {/* <ReactImageMagnify {...imageProps[2]} /> */}

                <LazyLoadImage
                  src={prod_img_3}
                  className="w-100"
                  alt="Image Alt"
                  effect="blur"
                  scrollPosition={scrollPosition}
                />
                
              </div>
              <div className="image_single mt-2 pt-1">
                {/* <ReactImageMagnify {...imageProps[3]} /> */}
                <LazyLoadImage
                  src={prod_img_4}
                  className="w-100"
                  alt="Image Alt"
                  effect="blur"
                  scrollPosition={scrollPosition}
                />
                
              </div>
              <div className="image_single mt-2 pt-1">
                {/* <ReactImageMagnify {...imageProps[4]} /> */}
                <LazyLoadImage
                  src={prod_img_5}
                  className="w-100"
                  alt="Image Alt"
                  effect="blur"
                  scrollPosition={scrollPosition}
                />
                
              </div>
            </div>
            <div className="heart_icon_wrapper position-absolute">
              <img
                src={Heart}
                className="d-block"
                height={18}
                width={20}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-0 right_section">
          <RightPart />
        </div>
      </div>
      <div className="text-center d-none d-md-block">
        <div className="row m-0 p-0">
          <div className="col-md-3 p-0"></div>
          <div className="col-md-6">
            <a
              href="#"
              className="text-center more_prod_link text-decoration-none text-dark"
            >
              view more like this product
            </a>
            <div className="prod_links">
              <a href="#">Jonathan Simkhai</a>
              <a href="#">Blazers</a>
              <a href="#">Viscose</a>
            </div>
            <div className="editor_note">
              <div className="note_head">a note from the editor</div>
              <div className="note_desc">
                The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
                lunar lavishness by night and by day: a blazer in a linen blend
                shot with lurex for a shimmering surface that shines like a star
                in the sky.
              </div>

              <div className="note_written">By MINNA SHIM, Fashion Editor</div>
            </div>
          </div>
          <div className="col-md-3 p-0"></div>
        </div>
      </div>

      <div className="homepage_bk_mobile">
        <OwlCarousel className="owl-theme owl_carousel_home_1" {...options1}>
          <div className="image_div">
            <LazyLoadImage
              src={prod_img_1}
              alt="Image Alt"
              effect="blur"
            />
            {/* <img src={prod_img_1} alt="" /> */}
          </div>
          <div className="image_div">
            <LazyLoadImage
              src={prod_img_2}
              className="w-100"
              alt="Image Alt"
              effect="blur"
            />
            {/* <img src={prod_img_2} alt="" /> */}
          </div>
          <div className="image_div">
            <LazyLoadImage
              src={prod_img_3}
              className="w-100"
              alt="Image Alt"
              effect="blur"
            />
            {/* <img src={prod_img_3} alt="" /> */}
          </div>
          <div className="image_div">
            <LazyLoadImage
              src={prod_img_4}
              alt="Image Alt"
              effect="blur"
            />
            {/* <img src={prod_img_4} alt="" /> */}
          </div>
          <div className="image_div">
            <LazyLoadImage
              src={prod_img_5}
              alt="Image Alt"
              effect="blur"
            />
            {/* <img src={prod_img_5} alt="" /> */}
          </div>
        </OwlCarousel>

        <div className="right_side_part_mobile">
          <RightPart />
        </div>

        <div className="bottom_section">
          <div className="prod_links">
            <a href="#">Jonathan Simkhai</a>
            <a href="#">Blazers</a>
            <a href="#">Viscose</a>
          </div>

          <div className="editor_note">
            <div className="note_head">a note from the editor</div>

            <div className="note_desc">
              The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
              lunar lavishness by night and by day: a blazer in a linen blend
              shot with lurex for a shimmering surface that shines like a star
              in the sky.
            </div>

            <div className="note_written">By MINNA SHIM,  Fashion Editor</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
