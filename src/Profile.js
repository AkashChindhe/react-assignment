import React, { useState } from 'react';
import './Profile.css'
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    state: '',
    city: '',
    pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can send the form data to your api or do whatever you want with it
    navigate("/Userprofile");
  };


  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />

      <label>Phone Number:</label>
      <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />

      <label>First Name:</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />

      <label>Last Name:</label>
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <label>Gender:</label>
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label>Date of Birth:</label>
      <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />

      <label>Address:</label>
      <input type="text" name="address" value={formData.address} onChange={handleChange} />

      <label>State:</label>
      <input type="text" name="state" value={formData.state} onChange={handleChange} />

      <label>City:</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} />

      <label>Pincode:</label>
      <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />

      <button type="submit">Save</button>
    </form>
  )
};

export default Profile;
