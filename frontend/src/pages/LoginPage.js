// src/pages/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert("Login Successfull...");
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    
    
    <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
    <h2 className="text-center mb-4">Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
          onChange={handleChange}
          required
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-success">Login</button>
      </div>
    </form>
    <p className="mt-3 text-center">
      Don’t have an account?{' '}
      <Link to="/register" className="text-decoration-none fw-bold">Register</Link>
    </p>
  </div>
</div>

  );
};

export default LoginPage;
