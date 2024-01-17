import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import style from "./products.module.css";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

  return (
    <div className={style.product}>
      <div className={style["image-container"]}>
        <img
          className={style["paper-coffee"]}
          src={productImage}
          alt={productName}
        />
        <h2>{productName}</h2>
      </div>
      <div className={style["category"]}>
        <h3>₱ {price}</h3>
        <div className={style["order-buttons"]}>
          <button onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>[{cartItemAmount}]</>}</button>
        </div>
      </div>
    </div>
  );
};
export default Product;

// import React, { useContext } from "react";
// import { PRODUCTS } from "../../Product";
// import style from "./products.module.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import coffee1 from "../../assets/productsImage/Paper-coffee-bag-on-transparent-background-PNG.png";
// import { ShopContext } from "../../context/ShopContextProvider";
// const Products = () => {
//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={`${className} ${style.nextArrow}`}
//         style={{
//           ...style,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "#B85C38",
//           position: "absolute",
//           opacity: "opacity: 0.8",
//           top: "50%",
//           right: 30,
//           transform: "translateY(-50%)",
//           padding: "20px 20px",
//           borderRadius: "3px",
//         }}
//         onClick={onClick}
//       />
//     );
//   }

//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={`${className} ${style.prevArrow}`}
//         style={{
//           ...style,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "#B85C38",
//           position: "absolute",
//           zIndex: 10,
//           opacity: "opacity: 0.8",
//           top: "50%",
//           left: 30,
//           transform: "translateY(-50%)",
//           padding: "20px 20px",
//           borderRadius: "3px",
//         }}
//         onClick={onClick}
//       />
//     );
//   }
//   const settings = {
//     dots: false,
//     infinite: true,
//     dots: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const { addToCart, cartItems } = useContext(ShopContext);

//   return (
//     <div>
//       <div className={style.coffee}>
//         <h1>C O F F E E </h1>
//       </div>

//       <Slider className={style.slider} {...settings}>
//         {PRODUCTS.map((product) => (
//           <div key={product.id} className={style.card}>
//             <div className={style["image-container"]}>
//               <img
//                 className={style["paper-coffee"]}
//                 src={coffee1}
//                 alt={product.productName}
//               />
//               <h2>{product.productName}</h2>
//             </div>
//             <div className={style.category}>
//               <h3>₱ {product.price}</h3>
//               <div className={style["order-buttons"]}>
//                 <button onClick={() => addToCart(product.id)}>
//                 add to cart {cartItems[product.id] > 0 && `(${cartItems[product.id]})`}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Products;
