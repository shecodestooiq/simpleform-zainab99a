import './Card.css'
import { useState } from 'react'



function Card(){
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`name:${name}
    email:${email}
    message:${message}`);
  };


return(
    <div className="card">
        <h1>Login Screen</h1>

        <form onSubmit={handleSubmit}>
        <div><input type="text" className="name" placeholder='please enter your name' required
        onChange={(e)=>setName(e.target.value)}
        />
        </div>
        <div><input type="email" className="email"placeholder='please enter your email'required
        onChange={(e)=>setEmail(e.target.value)}
        /></div>
        <div><textarea cols="30" rows="10"placeholder='write here'
        onChange={(e)=>setMessage(e.target.value)}
        ></textarea></div>
        <button className='btn' type='submit'>Login</button>
        </form>
        
    </div>
)
}
export default Card;