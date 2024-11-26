// Home.js
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../Services/usecontext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const { setUserData, setContentData, setLoading } = useContext(AppContext);

  useEffect(() => {
    // Fetch data when Home loads
    setLoading(true);
    const fetchUserData = axios.get('http://localhost:4000/users');
    const fetchContentData = axios.get('http://localhost:4001/content');

    Promise.all([fetchUserData, fetchContentData])
      .then(([userResponse, contentResponse]) => {
        setUserData(userResponse.data); // Update userData in context
        setContentData(contentResponse.data); // Update contentData in context
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching data in Home:', error);
        setLoading(false); // Set loading to false even on error
      });
  }, [setUserData, setContentData, setLoading]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/services">
          <button style={{ marginRight: '10px', padding: '10px 20px' }}>Our Services</button>
        </Link>
        <Link to="/about">
          <button style={{ marginRight: '10px', padding: '10px 20px' }}>About Us</button>
        </Link>
        <Link to="/contact">
          <button style={{ padding: '10px 20px' }}>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
