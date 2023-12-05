
import React from 'react'
import { FaPizzaSlice } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { GiChopsticks } from "react-icons/gi";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Category = () => {
  return (
    <div>
            <h4 style={{textAlign:'center', marginTop: '20px'}}>Select Food Category</h4>

<List>
        <NavLink to={'/cuisine/italian'}>
        <FaPizzaSlice />
        </NavLink>
        <NavLink to={'/cuisine/Ameican'}>
        <FaHamburger />
        </NavLink>
        <NavLink to={'/cuisine/Thai'}>
        <GiNoodles />
        </NavLink>
        <NavLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        </NavLink>
    </List>
    </div>
    
  )
}

const List = styled.div`
 display: flex;
 justify-content: center;
 margin:0.5rem 0;

 a{
  background: #000;
  margin: 10px;
  border-radius: 1rem;
 }

 svg
 {
  color: #fff;
  font-size:2rem;
  margin:1rem;
 }
`;



export default Category
