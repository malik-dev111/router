import React, { useState, useEffect } from 'react';
import './style.scss'
import Nav from '../../Components/Nav'
const AccountPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    console.log("yarandilogin ")
  }
  const handleLogin = (event) => {
    event.preventDefault();
    // Burada  giriş melumatlarini idare ede bilirsen
  };
  const data = [
    {
      username: username,
      password: password
    }
  ]

  console.log(data)

  return (
    <div>
      <Nav />
      <h1>Login </h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit " onClick={login} >Login</button>
      </form>
    </div>
  );
};

export default AccountPage;
