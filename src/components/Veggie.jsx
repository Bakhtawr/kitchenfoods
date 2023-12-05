import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';


export default function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect (() => 
  {
    getVeggie();
  },[])

  
  const getVeggie =  async () =>
  {
   const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=20&tags=vegetarian`)
   const data = await api.json();
   console.log(data);
   setVeggie(data.recipes)
  }
  
  const splideOptions = {
    type: 'carousel',
    heightRatio: 0.3,
    pagination: false,
    perPage: 4,
    breakpoints: {
      1000: {
        perPage: 2,
        heightRatio: 0.8,
      },
    },
  };

  return (
    <div>
   <Wrapper>
   <h3 style={{textAlign: 'center'}}> Our Veggies</h3>
   <Splide options={splideOptions}>
      {veggie.map((recipe, index) => {      
            return(   
              <SplideSlide>     
                <Card key={recipe.id}>
                <Link to={"/recipes/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}/>
                  </Link>
                </Card> 
                </SplideSlide>
            );     
          })}
    </Splide>
    </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
 margin : 4rem 0rem;
 `;

const Card = styled.div`
 min-height: 12rem;
 border-radius: 2rem;
 overflow: hidden;
 position: relative;


 img {
  border-radius : 2rem;
  position: absolute;
  left: 0;
  width:100%;
  height: 100%;
  object-fit: cover;
  margin: 0 1rem;
 }
 
 p
 {
  position: absolute;
  z-index: 10;
  color: #fff;
  padding: 1rem;
  text-align: center;
  border-radius: 2rem;
  left: 50%;
  bottom: 0;
  width: 100%;
  transform: translate(-50%, 0%);
  font-weight: 600;
  justify-content: center;
  align-items : center;
  font-size: 1rem;
 }
`;

const Gradient = `

`;




