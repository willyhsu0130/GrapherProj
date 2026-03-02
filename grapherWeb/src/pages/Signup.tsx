import { useState } from 'react';
import { signup } from '../services/fetchers.ts';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const handleSignup = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      lastName: lastName,
      firstName: firstName,
      username: username
    }
    const res = await signup(data);
    if (res.success) {
      navigate("/dashboard")
    }
    else alert("Signup failed.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-900">Create Account</h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="username"
            placeholder="Username"
            className="p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="firstname"
            placeholder="Firstname"
            className="p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="lastname"
            placeholder="Lastname"
            className="p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            autoComplete='new-password'
            placeholder="Password"
            className="p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            autoComplete='new-password'
            placeholder="Confirm Password"
            className="p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
      
          
          <button className="bg-indigo-500 text-white font-bold py-3 rounded-lg hover:bg-indigo-600 shadow-lg transform transition hover:-translate-y-1">
            Get Started
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-500 text-sm">Already a member? </span>
          <a href="/login" className="text-indigo-500 text-sm font-semibold hover:text-indigo-700">Login here</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;