import { useState, useEffect, useRef } from "react";
import "./ListeningClient.css";
import Cart from "../reuse-compo/Cart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../reuse-compo/RightArrow";

const ListeningClient = () => {
  let [index, setIndex] = useState(0);
  let sliderRef = useRef(null);

  useEffect(() => {
    const myInt = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
      setIndex(p => p + 1)}
      sliderRef.slickGoTo(index);
      console.log("runiing");
    }, 3000);

    return () => {
      clearInterval(myInt)
    }
    
  }, [index]);

  

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <RightArrow />,
  };
  // const [cartState, setCartState] = useState("centre");

  // useEffect(() => {
  //   setInterval(() => {
  //     settings.prevArrow.onClick();
  //   }, 2000)},[]);

  //   return () => {
  //   }

  // }, [cartState])

  const rightContent = {
    name: "James Clear",
    role: "Senior Manager,",
    company: "RIGHT Technologies Inc",
    choice: "Excellent Choice RIGHT",
    descrip: `Our team loves HotKup—it obliterates sil and digs into business data
            in a way tha been able to make time for until now.`,
  };

  const leftContent = {
    name: "James Clear",
    role: "Senior Manager,",
    company: "LEFT Technologies Inc",
    choice: "Excellent Choice LEFT",
    descrip: `Our team loves HotKup—it obliterates sil and digs into business data
            in a way tha been able to make time for until now.`,
  };

  const centreContent = {
    name: "James Clear",
    role: "Senior Manager,",
    company: "ABC Technologies Inc",
    choice: "Excellent Choice CENTRE",
    descrip: `Our team loves HotKup—it obliterates sil and digs into business data
            in a way tha been able to make time for until now.`,
  };

  return (
    <div className="listening">
      <div>
        <h1>Listen from our Clients</h1>
      </div>
      <div className="cart-maintaining-div">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <Cart cartContent={leftContent} />
          <Cart cartContent={centreContent} />
          <Cart cartContent={rightContent} />
        </Slider>
      </div>
      {/* <div className="listening-bottom">
        <div className="indicators-wrapper">
          <div className="indicators"></div>
          <div className="indicators active"></div>
          <div className="indicators"></div>
        </div>
      </div> */}
    </div>
  );
};

export default ListeningClient;
