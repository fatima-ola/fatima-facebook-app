import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  return (
    <div>
      <div className='row nav'>
        <div className='col-md-6'>
          <h1>FaceBook</h1>
        </div>
        <div className='col-md-6'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <input
            type='text'
            placeholder='Password'
            value={password}
            onChnage={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
