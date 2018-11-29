import React from 'react';
import './css/singleProduct.css';

const SingleProduct = (props) => {

    if(!props) return null;

    const {img, name, price, description} = props.product;

    return (
        <div className="info-product">
            <div className="img">
                <img src={`/img/${img}.png`} alt={name} />
            </div>
            <div className="info">
                <h2>{name}</h2>
                <p className="price">$ {price}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleProduct;