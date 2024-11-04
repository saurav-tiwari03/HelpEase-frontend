"use client"
import React, { useState } from 'react';

// Function to identify the login type
function identifyLoginType(input:string) {
  input = input.trim();

  if (input.startsWith("C-")) {
    return "clientId";
  }

  if (input.includes("@gmail.com")) {
    return "email";
  }

  const phoneNumberPattern = /^\d{10}$/;
  if (phoneNumberPattern.test(input)) {
    return "phoneNumber";
  }

  return "Email";
}

export default function LoginForm() {
  const [login, setLogin] = useState('');
  const [loginType, setLoginType] = useState('Email');
  const [password, setPassword] = useState('');

  // Handle input change
  const handleLoginChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLogin(value);

    // Update loginType dynamically based on input
    const type = identifyLoginType(value);
    setLoginType(type);
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Prepare login payload
    const payload = {
      login,
      password,
    };

    // Make API request (example)
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label><span>{loginType ? loginType : 'Email'}</span></label>
        <input
          type="text"
          value={login}
          onChange={handleLoginChange}
          placeholder="Enter Client ID, Email, or Phone Number"
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
