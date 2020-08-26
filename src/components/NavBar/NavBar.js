import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './NavBar.css';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

function NavBar() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('loggedin');
    history.push('/');
    window.location.reload(true);
  };

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
      localStorage.setItem('loggedin', 'loggedin');
      history.push('/dashboard');
      window.location.reload(true);
    } else {
      swal('Sorry!', 'Invalid Login!', 'error');
    }
  }

  return (
    <div>
      <div className='row nav'>
        <div className='col-md-6'>
          <h1>FaceBook</h1>
        </div>
        <div className='col-md-6'>
          {(() => {
            if (localStorage.getItem('loggedin')) {
              return <button onClick={logout}>LOGOUT</button>;
            } else {
              return (
                <div>
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
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
