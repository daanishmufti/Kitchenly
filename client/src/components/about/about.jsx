import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>Welcome to Kitchenly</h1>
        <p>
          <strong>Kitchenly</strong> is your trusted companion for discovering, sharing, and enjoying the best recipes from around the world. Whether you're a passionate home cook, a culinary explorer, or just looking for dinner inspiration, Kitchenly is here to make your cooking journey easier and more delicious.
        </p>
        <hr style={{margin: '1.5rem 0', border: 'none'}} />
        <h2>Our Mission</h2>
        <p>
          We believe food brings people together. Our mission is to inspire creativity in the kitchen, foster a love for cooking, and connect food lovers everywhere. We strive to provide a platform where everyone can find and share recipes, tips, and stories.
        </p>
        <h2>What You'll Find Here</h2>
        <ul style={{textAlign: 'left', margin: '0 auto 1.5rem auto', maxWidth: 400, fontSize: '1.05rem'}}>
          <li>Handpicked recipes for every taste and occasion</li>
          <li>Easy navigation by categories and favorites</li>
          <li>Beautiful food photography and step-by-step details</li>
          <li>Community-driven inspiration and sharing</li>
        </ul>
        <h2>Join Our Community</h2>
        <p>
          We invite you to explore, cook, and share your own creations. Kitchenly is more than a recipe site — it's a place to celebrate food and connect with others who share your passion.
        </p>
        <p style={{marginTop: '2rem', fontSize: '0.98rem'}}>
          Thank you for being part of our journey. Happy cooking!
        </p>
      </div>
    </div>
  );
};

export default About;
