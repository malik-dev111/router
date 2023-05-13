import React, { useState } from 'react';
import './style.scss';
import Nav from '../../Components/Nav';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('isledi!');

  };

  return (
    <div className='container-c' >
      <Nav />
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={firstName}  onChange={(event) => setFirstName(event.target.value)}  />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)}/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email"  value={email} onChange={(event) => setEmail(event.target.value)}/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>

          <button type="submit">Sign Up</button>
        </form>
    </div>
  );
};

export default SignupPage;
