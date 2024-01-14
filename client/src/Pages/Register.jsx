import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate(); // Changed Navigate to navigate for consistency
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    try {
      const {res} = await axios.post('/register', {
        name,
        email,
        password,
      });
      if (res?.error) {
        toast.error(res.error);
      } else {
        setFormData({})
        toast.success('Registration Successful. Welcome!');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name='name'
          placeholder="Enter Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name='email'
          placeholder="Enter Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name='password'
          placeholder="Enter Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
