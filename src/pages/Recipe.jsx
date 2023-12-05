import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useState,useEffect } from 'react'

const Recipe = () => {
  const [itemrecipe, setitemrecipe] = useState([]);
  let params = useParams();

  const fetchDetails=  async (name) =>
  {
   const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_KEY}`)
   const data = await api.json();
   setitemrecipe(data)
  }
  
  useEffect (() => 
  {
    fetchDetails();
  },[params.name]);

  return (
    <div>
      <div style={styles.container}>
      <header style={styles.header}>
      <h1>{itemrecipe.title}</h1>
      </header>
      <main style={styles.main}>
      <img src={itemrecipe.image} alt={itemrecipe.title} />
        <p style={styles.description}>
        {itemrecipe.summary}
        </p>
      </main>
    </div>
     
    </div>
  )
}


const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
  },
  title: {
    fontSize: '2em',
    margin: '0',
  },
  main: {
    marginTop: '20px',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
    borderRadius: '1rem'
  },
  description: {
    fontSize: '1.2em',
    lineHeight: '1.5',
    padding:'20px 0'
  },
};

export default Recipe
