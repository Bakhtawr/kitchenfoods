import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; <a href='https://bakhtawr.github.io/3dfolio/' target='_blank' style={{color: 'white'}}>2023 3dFolio.</a> All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    width: '100%',
  },
  text: {
    margin: 0,
  },
};

export default Footer;