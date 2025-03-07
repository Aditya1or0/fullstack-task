import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async () => {
    if (!name) {
      setError("Please enter your name.");
      setMessage("");
      return;
    }

    try {
      const response = await axios.get(
        `https://fullstack-task-backend-nine.vercel.app/api/greet?name=${name}`
      );
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setMessage("");
      setError("An error occurred while fetching the greeting.");
    }
  };

  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold mb-6">Welcome to Younglabs!</h1>
      <div className="flex justify-center items-center space-x-4">
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="p-3 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Get Greeting
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default App;
