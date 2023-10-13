import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

import '../styles/shopButton.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ShopButton() {
    return (
        <DropdownButton id="dropdown-item-button" title="SHOP">
            <Dropdown.Item as="button"><Link to="/categories">Voir tout</Link></Dropdown.Item>
            <Dropdown.Item as="button"><Link to="/categories/1">Petites plantes</Link></Dropdown.Item>
            <Dropdown.Item as="button"><Link to="/categories/2">Moyenne plantes</Link></Dropdown.Item>
            <Dropdown.Item as="button"><Link to="/categories/3">Grandes plantes</Link></Dropdown.Item>

        </DropdownButton>
    );

}

