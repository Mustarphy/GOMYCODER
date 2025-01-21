import React from 'react'

export default function Login() {
  function handleClick() { alert ('WELCOME DEVINE'); }
  
  return (
   <div> <form>
        <input type="text" placeholder="Username" className='py-4'/>
        <input type="password" placeholder="Password"/>
        <button onClick={handleClick}>Login</button>
    </form>
    </div>
  );
  
  }

