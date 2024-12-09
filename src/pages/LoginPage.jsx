import axios from 'axios';
import React, { useState } from 'react';

const LoginPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); 
        
        try {
            const response = await axios.post("http://demo-api.syaifur.io/api/register", form, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data)

            if (response.data.code === 201) {
                setResponseMessage(response.data.message);
                setForm({
                    email: '',
                    password: ''
                });
            } else {
                setErrorMessage('Registration failed. Please try again.');
            }
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Server error occurred');
            } else {
                setErrorMessage('No connection. Please try again later.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
      <div className="h-screen bg-gray-300">
        <div className="min-w-md  mt-3 w-1/3 h-1/2  p-5 rounded-2xl bg-white shadow-md flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl text-green-400 font-bold">Login</h1>

          {responseMessage && (
            <div className="bg-green-200 p-3 rounded-xl text-green-700 font-bold">
              {responseMessage}
            </div>
          )}

          {errorMessage && (
            <div className="bg-red-200 p-3 rounded-xl text-red-700 font-bold">
              {errorMessage}
            </div>
          )}

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center gap-1">
              <label className="font-bold text-green-400" htmlFor="email">
                Email
              </label>
              <input
                required
                value={form.email}
                onChange={handleChange}
                name="email"
                className="px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 border border-gray-300 outline-none transition duration-200"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <label className="font-bold text-green-400" htmlFor="password">
                Password
              </label>
              <input
                required
                value={form.password}
                onChange={handleChange}
                name="password"
                className="px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 border border-gray-300 outline-none transition duration-200"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              className={`bg-green-500 px-2 py-3 rounded-xl text-white font-bold hover:bg-green-600 transition-all duration-200 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={isLoading}>
              {isLoading ? "Login..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
};

export default LoginPage;
