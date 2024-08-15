// src/components/DisplayAllItems.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './dis.css';  // Import the CSS file

function DisplayAllItems() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(response => {
        setPizzas(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching pizzas');
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/pizzas/${id}`)
      .then(() => {
        setPizzas(pizzas.filter(pizza => pizza.id !== id));
      })
      .catch(error => console.error('Error deleting pizza:', error));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-5">
      <h2>Our Pizzas</h2>
      <div className="row">
        {pizzas.length > 0 ? (
          pizzas.map(pizza => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{pizza.name}</h5>
                  <p className="card-text">{pizza.description}</p>
                  <p className="card-text">Price: ${pizza.price}</p>
                  <Link to={`/update/${pizza.id}`} className="btn btn-primary mr-2">Update</Link>
                  <button onClick={() => handleDelete(pizza.id)} className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No pizzas available</p>
        )}
      </div>
    </div>
  );
}

export default DisplayAllItems;
