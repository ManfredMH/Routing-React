import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const {name, img, price, id} = props.info;

    return (
        <li>
            <img src={`img/${img}.png`} alt={name} />
            <p>{name}<span> $ {price}</span></p>
            <Link to={`/product/${id}`} >More Information</Link>
        </li>
    );
};

export default Product;