import React, { useEffect, useState } from 'react';
import { fetchData } from '../Services/TestService';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState({ name: '', email: '', number: '' });
  const [editingId, setEditingId] = useState(null);  // Track the ID of the user being edited

  useEffect(() => {
    fetchData().then((res) => {
      setServices(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    if (editingId) {
      handleUpdateUser(editingId);  // If editing, update the user
    } else {
      axios
        .post('http://localhost:4000/users', inputValue)
        .then((response) => {
          setServices((prevServices) => [...prevServices, response.data]);
          setInputValue({ name: '', email: '', number: '' });
          console.log('User added:', response.data);
        })
        .catch((error) => {
          console.error('Error adding user:', error);
        });
    }
  };

  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:4000/users/${id}`)
      .then(() => {
        setServices((prevServices) => prevServices.filter((service) => service.id !== id));
        console.log(`User with ID ${id} deleted`);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const handleEditUser = (user) => {
    setEditingId(user.id);  // Set the ID of the user being edited
    setInputValue({ name: user.name, email: user.email, number: user.number });  // Populate input fields
  };

  const handleUpdateUser = (id) => {
    axios
      .put(`http://localhost:4000/users/${id}`, inputValue)
      .then((response) => {
        setServices((prevServices) =>
          prevServices.map((service) =>
            service.id === id ? response.data : service  // Update the specific user in state
          )
        );
        setEditingId(null);  // Reset editing ID
        setInputValue({ name: '', email: '', number: '' });  // Clear input fields
        console.log('User updated:', response.data);
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <div>
      <h1>Our Services</h1>
      <input
        type="text"
        name="name"
        value={inputValue.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={inputValue.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="number"
        value={inputValue.number}
        placeholder="Phone Number"
        onChange={handleChange}
      />
      <button onClick={handleAddUser}>{editingId ? 'Update User' : 'Add User'}</button>

      {/* Table format for displaying services */}
      <table border="1" cellPadding="10" cellSpacing="0" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>{service.email}</td>
              <td>{service.number}</td>
              <td>
                <button onClick={() => handleEditUser(service)}>Edit</button>
                <button onClick={() => handleDeleteUser(service.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
