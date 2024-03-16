import InputField from "../InputField/InputField";
import TextAreaField from "../TextAreaField/TextAreaField";
import './hw.css'

function HW(){
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
       
            <div className="hw">
                <form onSubmit={handleSubmit}>

                <InputField label='Name' type="text" className="name" placeholder='please enter your name' required value={name}
                  onChange={(e)=>setName(e.target.value)}/>

                 <InputField label='Email' type="email" className="email"placeholder='please enter your email'required value={email}
                 onChange={(e)=>setEmail(e.target.value) }/>
                    <TextAreaField label='Description'required value={message} onChange={(e)=>setMessage(e.target.value) } ></TextAreaField>

                <button className='btn' type='submit'>Login</button>
                </form>
                
            </div>
        )
    
}
export default HW;