import "./Cart.css";
import manProfile from "../image-sources/manProfile.svg";
import leftCod from "../image-sources/leftCod.svg";
import rightCod from "../image-sources/rightCod.svg";

const Cart = ({cartContent}) => {
  

  return (
    <div className="cart">
      <div className="main-cart">
        <div className="main-cart-div1">
          <img src={manProfile} alt="manProfile" />
          <h2>{cartContent.name}</h2>
          <p>{cartContent.role}</p>
          <p>{cartContent.company}</p>
        </div>
        <div className="main-cart-div2">
          <h2>{cartContent.choice}</h2>
          <img src={leftCod} alt="leftCod" />
          <p>
            {cartContent.descrip}
          </p>
          <img src={rightCod} alt="rightCod" className="rightCod" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
