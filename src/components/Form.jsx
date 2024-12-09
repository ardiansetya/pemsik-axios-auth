import React, { useState } from 'react';
import axiosInstance from '../axios/axiosInstance';
import { usePostData } from '../hooks/useFetchData';


const Form = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    title: '',
  });

  const [submittedData, setSubmittedData] =useState([])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/posts', formData); 
      setSubmittedData(response.data)
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



  const renderPost = () => {
    return submittedData.map((data, index) => {
        return  (<div key={index} className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="border-b border-gray-300 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-medium">ID</th>
              <th className="px-6 py-3 text-left font-medium">Title</th>
              <th className="px-6 py-3 text-left font-medium">Body</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 transition-colors">
              <td className="px-6 py-4 border-b border-gray-200">
                {data.id}
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                {data.title}
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                {data.body}
              </td>
            </tr>
          </tbody>
        </table>
      </div>)
    })
  }

  return (
    <>
      <h2>Input Data</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>


{renderPost()}
    </>
  );
};

export default Form;
