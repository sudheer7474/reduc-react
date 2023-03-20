import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const op = useSelector((state)=>state);
  const products = useSelector((state) => state.allproducts
  .products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}> 
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} width={80} height={80}/>
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    // <div className="Cards">
    //     <div className="card">
    //         <div className="container">
    //             <image src={image} alt="image"/>

    //         </div>
    //         <div className="details">
    //         <div className="header">{title}</div>
    //            <div className="meta price">$ {price}</div>
    //            <div className="meta">{category}</div>

    //         </div>

    //     </div>

    // </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;