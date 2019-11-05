import React from 'react';


const SignUP = () => {
  return (
    <div className="wrapper">
      <form>
        <label>Name</label>
        <input className="nameInput" name="name" type="text"></input>
        <label>Email</label>
        <input className="emailInput" name="email" type="email"></input>
        <label>Password</label>
        <input className="PasswordInput" name="password" type="password"></input>
      </form>
    </div>
  )
}

export default SignUP;