import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../styles/shopButton.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ShopButton() {
    return (
        <DropdownButton id="dropdown-item-button" title="SHOP">
            <Dropdown.Item as="button">Petites plantes</Dropdown.Item>
            <Dropdown.Item as="button">Plantes moyennes</Dropdown.Item>
            <Dropdown.Item as="button">Grandes plantes</Dropdown.Item>
            <Dropdown.Item as="button">Accessoires</Dropdown.Item>
        </DropdownButton>
    );

}

