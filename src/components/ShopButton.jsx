import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

import '../styles/shopButton.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ShopButton() {
    return (
        <DropdownButton id="dropdown-item-button" title="SHOP">
            <Dropdown.Item as="button"><Link className='category-links' to="/categories">Les catégories</Link></Dropdown.Item>
            <Dropdown.Item as="button"><Link className='category-links' to="/categories/1">Petites plantes</Link></Dropdown.Item>
            <Dropdown.Item as="button"><Link className='category-links' to="/categories/2">Succulentes et cactus</Link></Dropdown.Item>
            <Dropdown.Item as="button"><Link className='category-links' to="/categories/3">Grandes plantes</Link></Dropdown.Item>
            <Dropdown.Item as="button"><Link className='category-links' to="/categories/8">Orchidées</Link></Dropdown.Item>
            <Dropdown.Item as="button"><Link className='category-links' to="/categories/4">Les pots</Link></Dropdown.Item>
            <Dropdown.Item as="button"><Link className='category-links' to="/categories/5">Les outils</Link></Dropdown.Item>
            <Dropdown.Item as="button"><Link className='category-links' to="/categories/6">Terreaux et engrais</Link></Dropdown.Item>
            <Dropdown.Item as="button"><Link className='category-links' to="/categories/7">Terrariums</Link></Dropdown.Item>

        </DropdownButton>
    );

}

