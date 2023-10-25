import React from 'react';

const Signup = () => {

    const emailHandler = (event) =>{
        console.log(event.target.value)
    }

    const handlePasswordBlur = event =>{
        console.log(event.target.value)
    }

    const handleSubmit = event =>{
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
    }

    return (
      <div>
            <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <input onChange={emailHandler} type="email" name='email'id=' email' placeholder='enter email'/>
            <br />
            <input onBlur={handlePasswordBlur} type="password" name='password' id='password' placeholder='enter password' />
            <br />
            <input type='submit' value='Register'/>
        </form>
      </div>
    );
};

export default Signup;