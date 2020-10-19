import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';







export const MenuUtama = styled.a`    
    
    margin-left: 12px;
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;

    opacity: 50%;

    &:hover {
        color: Green;
        transition: 0.3s ease-out;
      }

`;



export const MenuDalam = styled.a`    
    display: block;
    color: black;
    margin-left: 12px;
    padding: 16px;
    text-decoration: none;
    font-size: 17px;
    opacity: 50%;
    font-weight: 500;
    
    &:hover {
        color: Green;
        transition: 0.3s ease-out;
      }

    &:active {
        color: Green;
        transition: 0.3s ease-out;
      }

`;
