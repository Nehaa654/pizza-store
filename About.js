import React from 'react';
import './About.css';  // Import the CSS file

function About() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">About Our Pizza Store</h1>
      
      <div className="row mb-5">
        <div className="col-md-6">
          <img src="https://placehold.co/600x400?text=Our+Story" alt="Our Story" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, our pizza store began as a small family-owned business with a big dream: to serve the most delicious and authentic pizzas in town. What started as a tiny shop has now grown into a beloved local institution, thanks to our commitment to quality and our passion for pizza-making.
          </p>
          <p>
            Our founder, Maria, brought her grandmother's secret recipes from Italy and combined them with innovative techniques to create our signature pizzas. Today, we continue to honor those traditions while constantly innovating to meet our customers' evolving tastes.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 order-md-2">
          <img src="https://placehold.co/600x400?text=Our+Ingredients" alt="Our Ingredients" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 order-md-1">
          <h2>Our Ingredients</h2>
          <p>
            At our pizza store, we believe that great pizza starts with great ingredients. That's why we source only the finest:
          </p>
          <ul>
            <li>Fresh, locally-sourced vegetables</li>
            <li>Premium, hormone-free meats</li>
            <li>Authentic Italian cheeses</li>
            <li>Homemade sauces crafted from ripe, juicy tomatoes</li>
            <li>Dough made fresh daily using a blend of premium flours</li>
          </ul>
          <p>
            We're committed to supporting local farmers and producers, ensuring that our ingredients are not only delicious but also sustainable.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <img src="https://placehold.co/600x400?text=Our+Process" alt="Our Process" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>Our Pizza-Making Process</h2>
          <p>
            Creating the perfect pizza is an art form, and we take it seriously. Our process involves:
          </p>
          <ol>
            <li>Hand-stretching our dough to achieve the perfect thickness</li>
            <li>Carefully layering our homemade sauces</li>
            <li>Generously topping with premium ingredients</li>
            <li>Baking in our state-of-the-art stone ovens at precisely the right temperature</li>
          </ol>
          <p>
            This meticulous process ensures that every pizza that leaves our kitchen is nothing short of perfection.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>Our Commitment to You</h2>
          <p>
            At our pizza store, we're more than just a place to eat. We're a part of the community. We're committed to:
          </p>
          <ul>
            <li>Providing exceptional customer service</li>
            <li>Maintaining the highest standards of cleanliness and food safety</li>
            <li>Continuously innovating our menu to offer exciting new flavors</li>
            <li>Giving back to our community through various charitable initiatives</li>
          </ul>
          <p>
            We're grateful for the support of our loyal customers and look forward to serving you for many years to come. Thank you for being a part of our pizza-loving family!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
