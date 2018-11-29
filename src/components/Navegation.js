import React from 'react';
import './css/navegation.css';
import { NavLink } from 'react-router-dom';

const Navegation = () => {
    return (
        <nav className="navegation">
            <NavLink  to={'/about'} activeClassName="active" >About Us</NavLink >
            <NavLink  to={'/products'} activeClassName="active" >Products</NavLink >
            <NavLink  to={'/contact'} activeClassName="active" >Contact</NavLink >
        </nav>
    );
};

export default Navegation;