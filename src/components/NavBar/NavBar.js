import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <div className='row nav'>
        <div className='col-md-6'>
          <h1>FaceBook</h1>
        </div>
        <div className='col-md-6'>
          <input type='text' placeholder='Username' />
          <input type='text' placeholder='Password' />
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
