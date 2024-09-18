import React from 'react';

const Register = () => (
  <div>
    <h1>Register</h1>
    <form>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  </div>
);

export default Register;
