import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function Body() {
  const [name, setname] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  function submitForm() {
    var newUsers = JSON.parse(localStorage.getItem('newUsers') || '[]');
    var newUser = {
      name: name,
      username: username,
      password: password,
    };
    newUsers.push(newUser);
    localStorage.setItem('newUsers', JSON.stringify(newUsers));
  }

  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <img
            src='https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/7XdR1KwCifL.png'
            alt='connecting the world'
          />
        </div>
        <div className='col-md-4'>
          <h1>Register</h1>
          <form onSubmit={submitForm}>
            <input
              type='text'
              placeholder='Name'
              className='form-control'
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type='text'
              placeholder='Username'
              className='form-control'
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <input
              type='text'
              placeholder='Password'
              className='form-control'
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button type='submit' className='btn btn-primary'>
              SIGNUP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Body;
