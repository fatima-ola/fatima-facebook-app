import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './NavBar.css';
import swal from 'sweetalert';

function NavBar() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  function submitButton(event) {
    event.preventDefault();
    var users = JSON.parse(localStorage.getItem('users'));

    var i = 0;
    for (var user of users) {
      if (user.username == username && user.password == password) {
        i++;
      }
    }

    if (i == 1) {
      swal('Welcome!', 'Login Successful!', 'success');
    } else {
      swal('Welcome!', 'Invalid Login!', 'error');
    }
  }

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
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button onClick={submitButton}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
